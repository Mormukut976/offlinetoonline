const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('@prisma/client');

async function backup() {
  const prisma = new PrismaClient();
  const sourceDb = path.join(__dirname, '../prisma/dev.db');
  const backupDir = path.join(__dirname, '../backups');

  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
  }

  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const backupDbPath = path.join(backupDir, `db-backup-${timestamp}.sqlite`);
  const latestDbPath = path.join(backupDir, 'latest-db-backup.sqlite');

  // 1. Copy SQLite Binary
  if (fs.existsSync(sourceDb)) {
    fs.copyFileSync(sourceDb, backupDbPath);
    fs.copyFileSync(sourceDb, latestDbPath);
    console.log('✓ SQLite binary backed up to:', backupDbPath);
  }

  // 2. Dump Portable JSON (cross-platform safe)
  try {
    const leads = await prisma.lead.findMany();
    const quotations = await prisma.quotation.findMany();
    const rateCards = await prisma.rateCard.findMany();
    const activities = await prisma.activity.findMany();
    const projects = await prisma.project.findMany();
    const settings = await prisma.appSetting.findMany();

    const exportData = {
      timestamp: new Date().toISOString(),
      counts: {
        leads: leads.length,
        quotations: quotations.length,
        rateCards: rateCards.length,
        activities: activities.length,
        projects: projects.length,
        settings: settings.length
      },
      leads,
      quotations,
      rateCards,
      activities,
      projects,
      settings: settings.filter(s => s.key !== 'groq_api_key') // omit raw secret from JSON dump for safety
    };

    const jsonPath = path.join(backupDir, 'crm-data-export.json');
    fs.writeFileSync(jsonPath, JSON.stringify(exportData, null, 2));
    console.log('✓ Cross-platform JSON data exported to:', jsonPath);
    console.log(`✓ Total Records: ${leads.length} Leads, ${quotations.length} Quotes, ${rateCards.length} RateCards`);
  } catch (err) {
    console.warn('Notice: Could not dump JSON via Prisma, SQLite binary was saved.', err.message);
  } finally {
    await prisma.$disconnect();
  }
}

backup();
