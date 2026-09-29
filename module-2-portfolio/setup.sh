#!/usr/bin/env bash
# ==============================================================================
# OFFLINE TO ONLINE (O2O Digital) - MODULE 2 PORTFOLIO & SHOWCASE SETUP SCRIPT
# Founder & CEO: Raja Singh Chauhan
# Headquartered in Jaipur, Rajasthan
# ==============================================================================

set -e

echo ""
echo "======================================================================"
echo "  🌐 O2O DIGITAL AGENCY — MODULE 2 (PUBLIC AGENCY SHOWCASE & PORTFOLIO)"
echo "  Founder: Raja Singh Chauhan • Jaipur, Rajasthan                      "
echo "======================================================================"
echo ""

# 1. Check Node.js & npm
if ! command -v node &> /dev/null; then
    echo "❌ Error: Node.js is not installed on this system."
    echo "Please install Node.js (v18 or higher) from https://nodejs.org or via nvm."
    exit 1
fi

NODE_VERSION=$(node -v)
echo "✓ Node.js detected: $NODE_VERSION"

# 2. Install dependencies
echo "📦 Installing project dependencies..."
npm install

# 3. Build optimized static output
echo "⚡ Building production website bundle..."
npm run build

# 4. Success Banner
echo ""
echo "======================================================================"
echo "  ✅ SETUP COMPLETE! MODULE 2 IS READY TO RUN OR DEPLOY ANYWHERE       "
echo "======================================================================"
echo ""
echo "How to run:"
echo "  1. Local Dev:       npm run dev          (Runs on http://localhost:3001)"
echo "  2. Production Run:  npm start            (Runs on http://localhost:3001)"
echo "  3. Production VPS:  pm2 start npm --name \"o2o-portfolio\" -- start"
echo "  4. Zero Cost Edge:  Deploy to Netlify or Vercel with 'npm run build'"
echo ""
echo "======================================================================"
echo ""
