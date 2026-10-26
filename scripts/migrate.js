#!/usr/bin/env node
/**
 * OudGuide database migration runner.
 *
 * Runs SQL migration files in `packages/db/migrations/` in alphanumeric order.
 * Tracks applied migrations in the `og_private.schema_migrations` table.
 *
 * Usage:
 *   DATABASE_URL=postgres://... node scripts/migrate.js
 *   pnpm db:migrate
 */

import { readdirSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import pg from 'pg';

const __dirname = dirname(fileURLToPath(import.meta.url));
const migrationsDir = join(__dirname, '../packages/db/migrations');

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.log('ℹ️  DATABASE_URL is not set. Skipping migrations (in-memory mode).');
  process.exit(0);
}

const { Client } = pg;
const client = new Client({
  connectionString,
  ssl:
    connectionString.includes('localhost') || connectionString.includes('127.0.0.1')
      ? undefined
      : { rejectUnauthorized: false },
});

async function run() {
  await client.connect();
  console.log('Connected to database for migration.');

  // Ensure base schemas and migration tracking table exist
  await client.query(`
    CREATE SCHEMA IF NOT EXISTS og;
    CREATE SCHEMA IF NOT EXISTS og_private;
    CREATE TABLE IF NOT EXISTS og_private.schema_migrations (
      filename text PRIMARY KEY,
      applied_at timestamptz NOT NULL DEFAULT now()
    );
  `);

  const appliedRes = await client.query(
    'SELECT filename FROM og_private.schema_migrations ORDER BY filename ASC'
  );
  const applied = new Set(appliedRes.rows.map((r) => r.filename));

  const files = readdirSync(migrationsDir)
    .filter((f) => f.endsWith('.sql'))
    .sort();

  for (const file of files) {
    if (applied.has(file)) {
      console.log(`⏩  Already applied: ${file}`);
      continue;
    }

    console.log(`▶️  Applying: ${file}...`);
    const sql = readFileSync(join(migrationsDir, file), 'utf8');

    await client.query(sql);
    await client.query(
      'INSERT INTO og_private.schema_migrations (filename) VALUES ($1)',
      [file]
    );
    console.log(`✅  Applied: ${file}`);
  }

  console.log('✨ All migrations up to date.');
  await client.end();
}

run().catch((err) => {
  console.error('❌ Migration failed:', err);
  process.exit(1);
});
