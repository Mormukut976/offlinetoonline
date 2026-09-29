const fs = require('fs');
const path = require('path');

const targetDb = path.join(__dirname, '../prisma/dev.db');
const latestDb = path.join(__dirname, '../backups/latest-db-backup.sqlite');
const seedDb = path.join(__dirname, '../prisma/seed.db');

const backupSource = fs.existsSync(latestDb) ? latestDb : (fs.existsSync(seedDb) ? seedDb : null);

if (backupSource) {
  fs.copyFileSync(backupSource, targetDb);
  console.log('✓ Database successfully restored from:', backupSource);
} else {
  console.error('Error: No backup file found to restore.');
}
