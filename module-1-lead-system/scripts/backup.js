const fs = require('fs');
const path = require('path');
const sqlite3 = require('sqlite3');

const sourceDb = path.join(__dirname, '../prisma/dev.db');
const backupDir = path.join(__dirname, '../backups');

if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
const backupDbPath = path.join(backupDir, `db-backup-${timestamp}.sqlite`);
const latestDbPath = path.join(backupDir, 'latest-db-backup.sqlite');

if (fs.existsSync(sourceDb)) {
  fs.copyFileSync(sourceDb, backupDbPath);
  fs.copyFileSync(sourceDb, latestDbPath);
  console.log('✓ SQLite database backed up to:', backupDbPath);
  console.log('✓ Latest backup updated at:', latestDbPath);
} else {
  console.error('Error: Source database does not exist at:', sourceDb);
}
