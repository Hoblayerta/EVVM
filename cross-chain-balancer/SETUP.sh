#!/bin/bash

# ============================================
# EVVM Cross-Chain Balancer - Setup Completo
# ============================================

set -e  # Exit on error

echo "================================================"
echo "🚀 EVVM CROSS-CHAIN BALANCER - SETUP COMPLETO"
echo "================================================"
echo ""

# ============================================
# 1. VERIFICAR FOUNDRY
# ============================================
echo "📋 Step 1: Verificando Foundry..."

if ! command -v forge &> /dev/null; then
    echo "❌ Foundry no está instalado"
    echo "📥 Instalando Foundry..."
    curl -L https://foundry.paradigm.xyz | bash
    source ~/.bashrc
    foundryup
else
    echo "✅ Foundry instalado: $(forge --version | head -1)"
fi

echo ""

# ============================================
# 2. COMPILAR CONTRATOS
# ============================================
echo "📋 Step 2: Compilando contratos..."

forge build

if [ $? -eq 0 ]; then
    echo "✅ Contratos compilados exitosamente"
else
    echo "❌ Error al compilar"
    exit 1
fi

echo ""

# ============================================
# 3. EJECUTAR TESTS
# ============================================
echo "📋 Step 3: Ejecutando tests..."

forge test

if [ $? -eq 0 ]; then
    echo "✅ Todos los tests pasaron"
else
    echo "❌ Algunos tests fallaron"
    exit 1
fi

echo ""

# ============================================
# 4. VERIFICAR .ENV
# ============================================
echo "📋 Step 4: Verificando configuración..."

if [ ! -f .env ]; then
    echo "⚠️  Archivo .env no encontrado"
    echo "📝 Copiando .env.example a .env..."
    cp .env.example .env
    echo "⚠️  IMPORTANTE: Edita .env con tus valores reales"
    echo "   nano .env"
else
    echo "✅ Archivo .env existe"
fi

echo ""

# ============================================
# 5. MOSTRAR PRÓXIMOS PASOS
# ============================================
echo "================================================"
echo "✅ SETUP COMPLETADO EXITOSAMENTE!"
echo "================================================"
echo ""
echo "📋 PRÓXIMOS PASOS:"
echo ""
echo "1️⃣  Configurar .env:"
echo "   nano .env"
echo "   # Agregar PRIVATE_KEY, SEPOLIA_RPC_URL, etc."
echo ""
echo "2️⃣  Actualizar direcciones en script/Deploy.s.sol:"
echo "   nano script/Deploy.s.sol"
echo "   # Líneas 21-24: Agregar addresses de EVVM-A y EVVM-B"
echo ""
echo "3️⃣  Deploy en Sepolia:"
echo "   forge script script/Deploy.s.sol:DeployBalancer \\"
echo "     --rpc-url sepolia \\"
echo "     --broadcast \\"
echo "     --verify \\"
echo "     -vvvv"
echo ""
echo "4️⃣  Actualizar frontend/config.js con address del balancer"
echo ""
echo "5️⃣  Levantar frontend:"
echo "   python -m http.server 8000"
echo "   # Abrir http://localhost:8000/frontend/index.html"
echo ""
echo "================================================"
echo "📚 Documentación:"
echo "   - README.md: Documentación completa"
echo "   - QUICKSTART.md: Guía rápida"
echo "   - ARCHITECTURE.md: Arquitectura técnica"
echo "================================================"
echo ""
echo "🎣 ¡Listo para crear tu Fisher! 🎣"
echo ""
