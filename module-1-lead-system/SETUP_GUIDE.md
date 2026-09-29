# 🚀 O2O Digital Agency — Module 1 Universal Setup & Deployment Guide
**Founder & CEO:** Raja Singh Chauhan  
**Agency Location:** Ekta Nagar, S Block, Gandhi Path West, Jaipur, Rajasthan  
**Contact:** +91 80009 07924 • kanu9264@gmail.com  
**UPI ID:** 80009079241@ybl  

---

## 📌 Architecture Overview
Aapka project do alag-alag modules me organized hai:
- **`module-1-lead-system/`**: Agency Internal Operating System (CRM, AI Pitch Generator, Lead Extractor, Quotations, Production Kanban, Follow-up War Room, Client Onboarding).
- **`module-2-portfolio/`**: Public-Facing Agency Showcase & Client Acquisition Website.

---

## 💻 1. Is Machine Par Kaise Run Karein (Local Mac)

Terminal me simple yeh command run karein:
```bash
cd /Users/clouddc/Downloads/offlinetoonline/module-1-lead-system
npm run dev
```
👉 Browser me open kijiye: **[http://localhost:3000](http://localhost:3000)**

---

## 🔄 2. Kisi Doosre Laptop / PC Par Move Kaise Karein (1-Click Setup)

Agar aap kisi doosre computer ya friend ke laptop par ise chalana chahte hain:

1. **Step 1:** Folder ko copy karein ya GitHub se clone karein:
   ```bash
   git clone https://github.com/Mormukut976/offlinetoonline.git
   cd offlinetoonline/module-1-lead-system
   ```

2. **Step 2:** 1-Click Setup Script chalayein:
   ```bash
   chmod +x setup.sh
   ./setup.sh
   ```
   *(Yeh script automatically Node.js check karegi, dependencies install karegi, database schema sync karegi aur aapka CRM data load karegi).*

3. **Step 3:** Start karein:
   ```bash
   npm run dev
   ```
   Aapka poora CRM, rate card, invoices aur leads bilkul waise hi shuru ho jayenge!

---

## 🌐 3. Kisi VPS Par 24/7 Kaise Deploy Karein (Ubuntu / Hostinger / DigitalOcean)

Agar aap chahte hain ki yeh portal internet par 24 ghante live rahe taaki aap mobile se bhi access kar sakein:

### Option A: PM2 Process Manager (Recommended • Super Fast)
```bash
# 1. Server par clone karein
git clone https://github.com/Mormukut976/offlinetoonline.git
cd offlinetoonline/module-1-lead-system

# 2. Universal Setup chalayein
chmod +x setup.sh
./setup.sh

# 3. PM2 install karein aur background me start karein
npm install -g pm2
npm run build
pm2 start npm --name "o2o-crm" -- start

# 4. Auto-restart on reboot set karein
pm2 save
pm2 startup
```

### Option B: Docker Container (1 Command)
```bash
cd offlinetoonline/module-1-lead-system
docker-compose up -d --build
```

---

## 💾 4. Customer Data & Leads Backup Kaise Karein

Aapka poora CRM data `prisma/dev.db` (SQLite) me store hota hai. Ise backup aur restore karna behad asaan hai:

### Backup Lena:
```bash
npm run backup
```
- Yeh automatically `backups/db-backup-[timestamp].sqlite` me fresh snapshot banata hai.
- Sath hi `backups/crm-data-export.json` me human-readable JSON export nikalta hai.

### Restore Karna (Agar galti se data delete ho jaye):
```bash
npm run restore
```
- Yeh turant latest backup ko wapas restore kar deta hai!

---

## 🔑 5. API Keys & Credentials
Aapke credentials securely `.env.local` aur database table `AppSetting` me saved hain:
- **Groq API Key**: `gsk_NYNNC...` (Active • Model: `qwen/qwen3.8-27b`)
- **Gmail SMTP**: `kanu9264@gmail.com`
- **Phone / WhatsApp**: `+91 80009 07924`
- **UPI ID**: `80009079241@ybl`

Aap inko anytime **[http://localhost:3000/settings](http://localhost:3000/settings)** par jaakar 1 click me update kar sakte hain!
