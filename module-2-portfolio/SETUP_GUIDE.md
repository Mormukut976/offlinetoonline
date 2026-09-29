# 🌐 Module 2: Agency Showcase & Portfolio — Universal Setup Guide
**Founder & CEO:** Raja Singh Chauhan  
**Headquarters:** Ekta Nagar, S Block, Gandhi Path West, Jaipur, Rajasthan  
**Contact:** +91 80009 07924 • kanu9264@gmail.com • UPI: `80009079241@ybl`  

---

## ⚡ 1-Click Setup Instructions

### Option 1: One-Click Bash Script (Mac / Linux / VPS)
```bash
cd module-2-portfolio
bash setup.sh
```

### Option 2: Manual Start
```bash
cd module-2-portfolio
npm install
npm run dev
```
> Portal will open on **http://localhost:3001** (Module 1 runs on port 3000, so both can run simultaneously without conflicts).

---

## 🚀 Deployment Options

### 1. Free Edge CDN Hosting (₹0 / Month Lifetime) — RECOMMENDED
Because this website is built with Jamstack architecture:
1. Push this folder to your GitHub.
2. Connect the repository to **Netlify** or **Vercel**.
3. Build command: `npm run build`
4. Output directory: `.next`
5. Connect your custom domain (e.g. `offlinetoonline.in`).
6. **Result:** 100/100 Google PageSpeed at **₹0 monthly hosting bill**.

### 2. VPS Deployment via PM2
```bash
npm run build
pm2 start npm --name "o2o-portfolio" -- start
pm2 save
```

### 3. Docker Deployment
```bash
docker-compose up -d --build
```
