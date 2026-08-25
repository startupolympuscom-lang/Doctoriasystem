import 'dotenv/config'
import pg from 'pg'

const { Pool } = pg

const connectionString = process.env.DATABASE_URL
if (!connectionString) {
  throw new Error('DATABASE_URL is not set — copy .env.example to .env and fill it in.')
}

const isLocal = /localhost|127\.0\.0\.1/.test(connectionString)

export const pool = new Pool({
  connectionString,
  ssl: isLocal ? false : { rejectUnauthorized: false },
  max: 5,
})

pool.on('error', (err) => {
  console.error('Unexpected Postgres pool error:', err)
})
