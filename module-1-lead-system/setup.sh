#!/usr/bin/env bash

# ==============================================================================
# OFFLINE TO ONLINE (O2O Digital) - MODULE 1 UNIVERSAL 1-CLICK SETUP SCRIPT
# Founder & CEO: Raja Singh Chauhan
# Headquartered in Jaipur, Rajasthan
# ==============================================================================

set -e

echo ""
echo "======================================================================"
echo "  🚀 O2O DIGITAL AGENCY — MODULE 1 (LEAD GEN & CRM OPERATING SYSTEM)  "
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

# 3. Setup Environment Variables (.env.local)
if [ ! -f .env.local ]; then
    echo "⚙️ Creating .env.local from .env.example..."
    if [ -f .env.example ]; then
        cp .env.example .env.local
        echo "✓ .env.local initialized! You can customize API keys in .env.local or via /settings UI."
    fi
else
    echo "✓ .env.local already exists. Preserving your configuration."
fi

# 4. Setup Database
echo "💾 Initializing database..."
if [ ! -f prisma/dev.db ] && [ -f prisma/seed.db ]; then
    echo "✓ Restoring pre-seeded CRM database from prisma/seed.db..."
    cp prisma/seed.db prisma/dev.db
fi

# 5. Push Prisma schema & generate client
echo "🔄 Syncing Prisma database schema..."
npx prisma db push --skip-generate
npx prisma generate

# 6. Success Banner
echo ""
echo "======================================================================"
echo "  ✅ SETUP COMPLETE! MODULE 1 IS READY TO RUN ANYWHERE                "
echo "======================================================================"
echo ""
echo "How to start:"
echo "  1. Local Development:    npm run dev         (Runs on http://localhost:3000)"
echo "  2. Production VPS (PM2): pm2 start npm --name "o2o-crm" -- start"
echo "  3. Backup CRM Data:      npm run backup"
echo "  4. Restore CRM Data:     npm run restore"
echo ""
echo "All your leads, invoices, Groq AI settings, and credentials remain safe."
echo "======================================================================"
echo ""
