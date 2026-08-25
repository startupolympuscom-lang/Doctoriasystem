import cors from 'cors'
import express from 'express'
import { pool } from './db.js'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json({ limit: '12mb' }))

app.get('/api/health', async (_req, res) => {
  try {
    await pool.query('select 1')
    res.json({ ok: true, db: 'connected' })
  } catch (err) {
    res.status(500).json({ ok: false, db: 'unreachable', error: err.message })
  }
})

// Create a simulation record.
app.post('/api/simulations', async (req, res) => {
  const {
    patientLabel = null,
    procedures = [],
    landmarkSummary = null,
    beforeImage,
    afterImage,
    faceChange = [],
    treatmentIntelligence = {},
  } = req.body || {}

  if (!beforeImage || !afterImage) {
    return res.status(400).json({ error: 'beforeImage and afterImage are required' })
  }
  if (!Array.isArray(procedures) || procedures.length === 0) {
    return res.status(400).json({ error: 'at least one procedure is required' })
  }

  try {
    const result = await pool.query(
      `INSERT INTO simulations
         (patient_label, procedures, landmark_summary, before_image, after_image, face_change, treatment_intelligence)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING id, created_at`,
      [
        patientLabel,
        JSON.stringify(procedures),
        landmarkSummary ? JSON.stringify(landmarkSummary) : null,
        beforeImage,
        afterImage,
        JSON.stringify(faceChange),
        JSON.stringify(treatmentIntelligence),
      ],
    )
    res.status(201).json(result.rows[0])
  } catch (err) {
    console.error('Failed to save simulation:', err)
    res.status(500).json({ error: 'Failed to save simulation' })
  }
})

// List recent simulations (thumbnails only — no full-res before/after payloads).
app.get('/api/simulations', async (req, res) => {
  const limit = Math.min(Number(req.query.limit) || 12, 50)
  try {
    const result = await pool.query(
      `SELECT id, created_at, patient_label, procedures, treatment_intelligence
       FROM simulations
       ORDER BY created_at DESC
       LIMIT $1`,
      [limit],
    )
    res.json(result.rows)
  } catch (err) {
    console.error('Failed to list simulations:', err)
    res.status(500).json({ error: 'Failed to list simulations' })
  }
})

// Fetch one simulation in full (including before/after images).
app.get('/api/simulations/:id', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM simulations WHERE id = $1', [req.params.id])
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Not found' })
    }
    res.json(result.rows[0])
  } catch (err) {
    console.error('Failed to fetch simulation:', err)
    res.status(500).json({ error: 'Failed to fetch simulation' })
  }
})

app.listen(PORT, () => {
  console.log(`SnanIA API listening on http://localhost:${PORT}`)
})
