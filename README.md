# 🚀 Offline to Online (O2O Digital) — Master Startup Ecosystem

> **North India's High-Converting Digital Studio for Offline Businesses. Jamstack Websites, Google 3-Pack Maps Domination, and Automated WhatsApp Lead Funnels at ₹0 Monthly Server Cost.**

**Founder & CEO:** Raja Singh Chauhan  
**Headquartered in:** Ekta Nagar, S Block, Gandhi Path West, Jaipur, Rajasthan  
**Contact:** +91 80009 07924 • kanu9264@gmail.com  
**Official UPI:** `80009079241@ybl`  

---

## 📂 Architecture Overview (2 Separate Modules)

Inside this repository, your business operations and client showcase are cleanly segregated into two distinct, independent modules:

```
offlinetoonline/
├── start.sh                          # 🚀 Master 1-Click Interactive Launcher
├── module-1-lead-system/             # 💼 MODULE 1: Internal Operating System (Port 3000)
│   ├── setup.sh                      # Universal 1-Click Setup script
│   ├── SETUP_GUIDE.md                # Local / VPS / PM2 / Migration instructions
│   ├── Dockerfile & docker-compose   # Containerized deployment
│   ├── scripts/backup.js             # Automated SQLite & JSON cross-platform export
│   ├── scripts/restore.js            # Universal data restore
│   ├── prisma/schema.prisma          # Database models (Leads, Quotes, RateCards, Activities)
│   └── src/                          # CRM, AI Pitch Engine, Follow-up War Room, Invoices
│
└── module-2-portfolio/               # 🌐 MODULE 2: Public Agency Showcase (Port 3001)
    ├── setup.sh                      # Universal 1-Click Setup & Build script
    ├── SETUP_GUIDE.md                # Netlify / Vercel / VPS hosting guide
    ├── Dockerfile & docker-compose   # Containerized deployment
    └── src/                          # Case Studies, Fare & ROI Calculator, Packages, WhatsApp Leads
```

---

## ⚡ Quick Start & Universal 1-Click Setup

### Run Both Modules or Specific System:
```bash
./start.sh
```
You will see an interactive menu to run Module 1, Module 2, both simultaneously, or trigger backups!

### Module 1: Internal CRM & Lead Machine (Port 3000)
- **Local URL:** `http://localhost:3000`
- **Key Features:** Live North India Lead Extraction, Groq AI Pitch Generator (`qwen/qwen3.8-27b`), Gmail SMTP dispatch, Follow-up War Room, Client Onboarding Intake, PDF/Print Quotation & Invoicing, PhonePe UPI QR integration.
- **Backup Data:** `cd module-1-lead-system && npm run backup`
- **Restore Data:** `cd module-1-lead-system && npm run restore`

### Module 2: Public Client Showcase & Portfolio (Port 3001)
- **Local URL:** `http://localhost:3001`
- **Deployable to:** Netlify or Vercel (Edge CDN, ₹0 Monthly Server Cost)
- **Key Features:** High-converting Dark/Cyber design, Bhumika Tour & Travels Live Case Study, Interactive 200 KM Outstation Cab Fare Calculator, Aggregator vs O2O ROI Estimator, 3-Tier Pricing Packages, Direct WhatsApp consultation routing to Raja Singh Chauhan (+91 80009 07924).

---

## 💾 Zero Data Loss Migration Guide (Moving to VPS or Another Laptop)
When you move to another PC or a cloud VPS:
1. Clone this repo: `git clone https://github.com/Mormukut976/offlinetoonline.git`
2. Run `bash setup.sh` inside `module-1-lead-system/`
3. All leads, quotations, and rate cards restore automatically from your backup SQLite and JSON dumps.
4. Run `npm run dev` — everything works instantly!

---

## 🏆 Verified Proof: Bhumika Tour & Travels
- **Domain:** [https://bhumikatourandtravels.world/](https://bhumikatourandtravels.world/)
- **Result:** Ranked on Google Page 1 (Average Position 6.7) with 100/100 Mobile PageSpeed, 200 KM fare calculator, and zero recurring server bills.
