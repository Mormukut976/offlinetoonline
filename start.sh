#!/usr/bin/env bash

# ==============================================================================
# OFFLINE TO ONLINE (O2O Digital) — MASTER ECOSYSTEM RUNNER
# Founder & CEO: Raja Singh Chauhan • Jaipur, Rajasthan
# ==============================================================================

echo ""
echo "======================================================================"
echo "  🚀 OFFLINE TO ONLINE (O2O Digital) — AGENCY PLATFORM               "
echo "  Founder: Raja Singh Chauhan • Jaipur, Rajasthan                      "
echo "======================================================================"
echo ""
echo "Select an option:"
echo "  1) Run Module 1 (Lead Gen, Groq AI Pitch & Production CRM) -> Port 3000"
echo "  2) Run Module 2 (Public Agency Showcase & Portfolio Website) -> Port 3001"
echo "  3) Run BOTH Modules Simultaneously (CRM + Public Site)"
echo "  4) Universal 1-Click Setup / Reinstall (Both Modules)"
echo "  5) Backup CRM & Customer Data to JSON & SQLite"
echo "  6) Restore CRM & Customer Data"
echo ""

read -p "Enter your choice (1-6): " choice

case $choice in
  1)
    echo "Starting Module 1 on http://localhost:3000..."
    cd module-1-lead-system && npm run dev
    ;;
  2)
    echo "Starting Module 2 on http://localhost:3001..."
    cd module-2-portfolio && npm run dev
    ;;
  3)
    echo "Launching Module 1 (Port 3000) and Module 2 (Port 3001)..."
    (cd module-1-lead-system && npm run dev) &
    (cd module-2-portfolio && npm run dev) &
    wait
    ;;
  4)
    echo "Running Universal Setup for Module 1..."
    (cd module-1-lead-system && bash setup.sh)
    echo "Running Universal Setup for Module 2..."
    (cd module-2-portfolio && bash setup.sh)
    echo "All modules set up successfully!"
    ;;
  5)
    echo "Backing up CRM Data..."
    cd module-1-lead-system && npm run backup
    ;;
  6)
    echo "Restoring CRM Data..."
    cd module-1-lead-system && npm run restore
    ;;
  *)
    echo "Invalid choice. Please run ./start.sh again."
    ;;
esac
