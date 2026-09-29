const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('@prisma/client');

async function restore() {
  const targetDb = path.join(__dirname, '../prisma/dev.db');
  const latestDb = path.join(__dirname, '../backups/latest-db-backup.sqlite');
  const seedDb = path.join(__dirname, '../prisma/seed.db');
  const jsonExport = path.join(__dirname, '../backups/crm-data-export.json');

  // Try SQLite file restore first
  const backupSource = fs.existsSync(latestDb) ? latestDb : (fs.existsSync(seedDb) ? seedDb : null);

  if (backupSource) {
    fs.copyFileSync(backupSource, targetDb);
    console.log('✓ SQLite database successfully restored from:', backupSource);
    return;
  }

  // Fallback: restore from JSON export
  if (fs.existsSync(jsonExport)) {
    console.log('Restoring data from JSON export...');
    const prisma = new PrismaClient();
    try {
      const raw = JSON.parse(fs.readFileSync(jsonExport, 'utf8'));
      if (raw.leads && raw.leads.length > 0) {
        for (const lead of raw.leads) {
          await prisma.lead.upsert({
            where: { id: lead.id },
            update: lead,
            create: lead
          });
        }
        console.log(`✓ Restored ${raw.leads.length} leads from JSON`);
      }
      if (raw.rateCards && raw.rateCards.length > 0) {
        for (const rc of raw.rateCards) {
          await prisma.rateCard.upsert({
            where: { id: rc.id },
            update: rc,
            create: rc
          });
        }
        console.log(`✓ Restored ${raw.rateCards.length} rate cards from JSON`);
      }
    } catch (e) {
      console.error('Error during JSON restore:', e.message);
    } finally {
      await prisma.$disconnect();
    }
  } else {
    console.warn('Notice: No sqlite backup or json export found. Running prisma db push for clean state.');
  }
}

restore();
