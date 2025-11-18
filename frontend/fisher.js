// Fisher Dashboard Logic

let provider, signer, fisherAddress;
let evvmA_Contract, evvmB_Contract, balancer_Contract;
let autoExecuteEnabled = false;
let stats = {
    totalRewards: 0,
    transfersExecuted: 0,
    successRate: 100
};

// ============================================
// INICIALIZACIÓN
// ============================================

async function init() {
    if (!window.ethereum) {
        log('error', 'MetaMask not found');
        return false;
    }

    try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        provider = new ethers.providers.Web3Provider(window.ethereum);
        signer = provider.getSigner();
        fisherAddress = await signer.getAddress();

        // Mostrar dirección
        document.getElementById('fisherAddress').textContent =
            fisherAddress.substring(0, 10) + '...' + fisherAddress.substring(32);

        // Inicializar contratos
        evvmA_Contract = new ethers.Contract(
            CONFIG.EVVM_A.address,
            CONFIG.ABI.EVVM,
            signer
        );

        evvmB_Contract = new ethers.Contract(
            CONFIG.EVVM_B.address,
            CONFIG.ABI.EVVM,
            signer
        );

        balancer_Contract = new ethers.Contract(
            CONFIG.BALANCER.address,
            CONFIG.ABI.BALANCER,
            signer
        );

        log('success', 'Fisher initialized: ' + fisherAddress);

        // Cargar datos
        await loadFisherStats();
        await scanTransfers();

        return true;

    } catch (error) {
        log('error', 'Init failed: ' + error.message);
        return false;
    }
}

// ============================================
// FISHER STATS
// ============================================

async function loadFisherStats() {
    try {
        // Obtener pool del fisher
        const pool = await balancer_Contract.getFisherPool(fisherAddress);

        // Actualizar UI
        document.getElementById('liquidityA').textContent =
            ethers.utils.formatEther(pool.liquidityInA);
        document.getElementById('liquidityB').textContent =
            ethers.utils.formatEther(pool.liquidityInB);
        document.getElementById('pendingRewards').textContent =
            ethers.utils.formatEther(pool.rewardsEarned);
        document.getElementById('transfersExecuted').textContent =
            pool.transfersExecuted.toString();

        stats.totalRewards = parseFloat(ethers.utils.formatEther(pool.rewardsEarned));
        stats.transfersExecuted = pool.transfersExecuted.toNumber();

        log('info', 'Stats refreshed');

    } catch (error) {
        log('error', 'Failed to load stats: ' + error.message);
    }
}

// ============================================
// ESCANEO DE TRANSFERS PENDIENTES
// ============================================

async function scanTransfers() {
    if (!balancer_Contract) await init();

    log('info', 'Scanning for pending transfers...');

    // Obtener transfers del localStorage
    const pendingTransfers = JSON.parse(localStorage.getItem('pendingTransfers') || '[]');

    const container = document.getElementById('pendingTransfersList');

    if (pendingTransfers.length === 0) {
        container.innerHTML = '<p style="color: #666; padding: 15px;">No pending transfers found</p>';
        return;
    }

    container.innerHTML = '';

    for (const transfer of pendingTransfers) {
        const div = document.createElement('div');
        div.className = 'transfer-item';

        const timeAgo = Math.floor((Date.now() - transfer.timestamp) / 60000);

        div.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <strong>${transfer.direction}</strong> - ${transfer.amount} MATE<br>
                    <small>User: ${transfer.user.substring(0, 10)}...</small><br>
                    <small>Priority Fee: ${transfer.priorityFee} ETH</small><br>
                    <small>${timeAgo} min ago</small>
                </div>
                <div>
                    <span class="status-badge pending">PENDING</span><br>
                    <button onclick="executeTransfer('${transfer.direction}', ${JSON.stringify(transfer).replace(/"/g, '&quot;')})">
                        ⚡ Execute
                    </button>
                </div>
            </div>
        `;

        container.appendChild(div);
    }

    log('success', `Found ${pendingTransfers.length} pending transfers`);
}

// ============================================
// EJECUTAR TRANSFER
// ============================================

async function executeTransfer(direction, transferData) {
    if (!balancer_Contract) await init();

    log('info', `Executing transfer ${direction}...`);

    try {
        let tx;

        if (direction === 'A→B') {
            // Paso 1: Ejecutar deposit en EVVM-A
            tx = await balancer_Contract.depositToBalancerFromA(
                transferData.user,
                transferData.amountWei,
                transferData.priorityFeeWei,
                transferData.nonce,
                transferData.signature
            );

            log('info', 'Deposit TX sent: ' + tx.hash);

            const receipt = await tx.wait();
            log('success', 'Deposit confirmed!');

            // Extraer transferId del evento
            const event = receipt.events.find(e => e.event === 'TransferInitiated');
            const transferId = event.args.transferId;

            log('info', 'Transfer ID: ' + transferId);

            // Paso 2: Completar withdraw en EVVM-B
            // Nota: Fisher necesita tener liquidez en B
            const fisherSig = await signer.signMessage('Fisher executing withdrawal');

            const tx2 = await balancer_Contract.withdrawToUserInB(
                transferId,
                fisherSig
            );

            log('info', 'Withdraw TX sent: ' + tx2.hash);

            await tx2.wait();
            log('success', '✅ Transfer completed A→B!');

        } else {
            // B→A flow
            tx = await balancer_Contract.depositToBalancerFromB(
                transferData.user,
                transferData.amountWei,
                transferData.priorityFeeWei,
                transferData.nonce,
                transferData.signature
            );

            const receipt = await tx.wait();
            const event = receipt.events.find(e => e.event === 'TransferInitiated');
            const transferId = event.args.transferId;

            const fisherSig = await signer.signMessage('Fisher executing withdrawal');

            const tx2 = await balancer_Contract.withdrawToUserInA(
                transferId,
                fisherSig
            );

            await tx2.wait();
            log('success', '✅ Transfer completed B→A!');
        }

        // Actualizar stats
        stats.transfersExecuted++;
        await loadFisherStats();

        // Remover del localStorage
        removePendingTransfer(transferData);

        // Agregar a completados
        saveCompletedTransfer(transferData);

        await scanTransfers();
        await displayCompletedTransfers();

    } catch (error) {
        log('error', 'Execution failed: ' + error.message);
        console.error(error);
    }
}

// ============================================
// GESTIÓN DE LIQUIDEZ
// ============================================

async function addLiquidity() {
    if (!balancer_Contract) await init();

    const amountA = document.getElementById('addLiquidityA').value;
    const amountB = document.getElementById('addLiquidityB').value;

    if (!amountA && !amountB) {
        log('error', 'Enter amount for at least one EVVM');
        return;
    }

    try {
        log('info', 'Adding liquidity...');

        // Obtener nonces
        const nonceA = await balancer_Contract.noncesA(fisherAddress);
        const nonceB = await balancer_Contract.noncesB(fisherAddress);

        // Firmar para cada EVVM
        const sigA = amountA ? await signer.signMessage('Add liquidity A') : '0x';
        const sigB = amountB ? await signer.signMessage('Add liquidity B') : '0x';

        const amountAWei = amountA ? ethers.utils.parseEther(amountA) : 0;
        const amountBWei = amountB ? ethers.utils.parseEther(amountB) : 0;

        const tx = await balancer_Contract.provideLiquidity(
            amountAWei,
            amountBWei,
            nonceA,
            nonceB,
            sigA,
            sigB
        );

        log('info', 'TX sent: ' + tx.hash);

        await tx.wait();

        log('success', '✅ Liquidity added!');

        await loadFisherStats();

    } catch (error) {
        log('error', 'Failed to add liquidity: ' + error.message);
    }
}

async function removeLiquidity() {
    if (!balancer_Contract) await init();

    const amountA = prompt('Amount to remove from EVVM-A:');
    const amountB = prompt('Amount to remove from EVVM-B:');

    if (!amountA && !amountB) return;

    try {
        log('info', 'Removing liquidity...');

        const amountAWei = amountA ? ethers.utils.parseEther(amountA) : 0;
        const amountBWei = amountB ? ethers.utils.parseEther(amountB) : 0;

        const tx = await balancer_Contract.withdrawLiquidity(
            amountAWei,
            amountBWei
        );

        await tx.wait();

        log('success', '✅ Liquidity removed!');

        await loadFisherStats();

    } catch (error) {
        log('error', 'Failed to remove liquidity: ' + error.message);
    }
}

async function claimRewards() {
    if (!balancer_Contract) await init();

    try {
        log('info', 'Claiming rewards...');

        const tx = await balancer_Contract.claimRewards();

        await tx.wait();

        log('success', '💎 Rewards claimed!');

        await loadFisherStats();

    } catch (error) {
        log('error', 'Failed to claim rewards: ' + error.message);
    }
}

// ============================================
// AUTO-EXECUTE
// ============================================

function toggleAutoExecute() {
    autoExecuteEnabled = !autoExecuteEnabled;

    const btn = document.getElementById('autoExecuteText');
    btn.textContent = autoExecuteEnabled ? '🤖 Auto-Execute ON' : '🤖 Enable Auto-Execute';

    log(autoExecuteEnabled ? 'success' : 'info',
        autoExecuteEnabled ? 'Auto-execute enabled' : 'Auto-execute disabled');

    if (autoExecuteEnabled) {
        startAutoExecute();
    }
}

async function startAutoExecute() {
    while (autoExecuteEnabled) {
        const pendingTransfers = JSON.parse(localStorage.getItem('pendingTransfers') || '[]');

        for (const transfer of pendingTransfers) {
            if (autoExecuteEnabled) {
                await executeTransfer(transfer.direction, transfer);
                await new Promise(resolve => setTimeout(resolve, 2000)); // Esperar 2s entre cada uno
            }
        }

        await new Promise(resolve => setTimeout(resolve, 10000)); // Check cada 10s
    }
}

// ============================================
// STORAGE HELPERS
// ============================================

function removePendingTransfer(transferData) {
    let transfers = JSON.parse(localStorage.getItem('pendingTransfers') || '[]');
    transfers = transfers.filter(t =>
        !(t.user === transferData.user &&
          t.nonce === transferData.nonce &&
          t.direction === transferData.direction)
    );
    localStorage.setItem('pendingTransfers', JSON.stringify(transfers));
}

function saveCompletedTransfer(transferData) {
    let completed = JSON.parse(localStorage.getItem('completedTransfers') || '[]');
    completed.push({
        ...transferData,
        completedAt: Date.now(),
        fisher: fisherAddress
    });
    localStorage.setItem('completedTransfers', JSON.stringify(completed));
}

function displayCompletedTransfers() {
    const completed = JSON.parse(localStorage.getItem('completedTransfers') || '[]');
    const container = document.getElementById('completedTransfersList');

    if (completed.length === 0) {
        container.innerHTML = '<p style="color: #666; padding: 15px;">No completed transfers yet</p>';
        return;
    }

    container.innerHTML = '';

    completed.slice(-10).reverse().forEach(transfer => {
        const div = document.createElement('div');
        div.className = 'transfer-item completed';

        const timeAgo = Math.floor((Date.now() - transfer.completedAt) / 60000);

        div.innerHTML = `
            <strong>${transfer.direction}</strong> - ${transfer.amount} MATE<br>
            <small>User: ${transfer.user.substring(0, 10)}...</small><br>
            <small>Completed ${timeAgo} min ago</small><br>
            <span class="status-badge completed">COMPLETED</span>
        `;

        container.appendChild(div);
    });
}

// ============================================
// LOGGING
// ============================================

function log(type, message) {
    const logContainer = document.getElementById('activityLog');
    const entry = document.createElement('div');
    entry.className = `log-entry ${type}`;

    const timestamp = new Date().toLocaleTimeString();
    entry.textContent = `[${timestamp}] [${type.toUpperCase()}] ${message}`;

    logContainer.appendChild(entry);
    logContainer.scrollTop = logContainer.scrollHeight;

    console.log(`[${type}]`, message);
}

// ============================================
// AUTO-REFRESH
// ============================================

setInterval(async () => {
    if (balancer_Contract) {
        await scanTransfers();
        await loadFisherStats();
    }
}, 10000); // Cada 10 segundos

// ============================================
// INIT
// ============================================

window.addEventListener('load', async () => {
    log('info', 'Fisher dashboard loading...');
    await init();
    await displayCompletedTransfers();
});
