#!/usr/bin/env node
/**
 * Seeds resource-pages in Payload from hub items + programmatic SEO CSVs.
 * Requires CMS running with DATABASE_URI and PAYLOAD_SECRET in apps/cms/.env
 *
 *   pnpm cms:seed
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const dataDir = path.join(root, 'apps/resources/data/programmatic-seo')

const apiUrl = process.env.PAYLOAD_API_URL || 'http://localhost:3002/api'
const apiKey = process.env.PAYLOAD_API_KEY || ''

const hubPages = [
  {
    urlPath: '',
    title: 'Hiring Resources and Templates',
    pageType: 'hub',
    description:
      'Free hiring resources, interview kits, and HR templates to help teams hire better and faster.',
    h1: 'Hiring Resources and Templates',
    status: 'published',
  },
  {
    urlPath: 'ai-job-description',
    title: 'AI Job Description Generator',
    pageType: 'generator',
    description: 'Generate optimized job descriptions that attract qualified candidates.',
    status: 'published',
  },
  {
    urlPath: 'ai-interview-kit',
    title: 'AI Interview Kit Generator',
    pageType: 'generator',
    description: 'Build structured interview kits with role-specific questions and scorecards.',
    status: 'published',
  },
  {
    urlPath: 'job-description-templates',
    title: 'Job Description Templates',
    pageType: 'template-category',
    description: 'Browse hiring-ready templates for common roles and departments.',
    status: 'published',
  },
  {
    urlPath: 'offer-letter-templates',
    title: 'Offer Letter Templates',
    pageType: 'template-category',
    description: 'Use editable offer letter formats to speed up candidate close workflows.',
    status: 'published',
  },
  {
    urlPath: 'policy-templates',
    title: 'Policy Templates',
    pageType: 'template-category',
    description: 'Access policy templates to standardize HR communication and operations.',
    status: 'published',
  },
  {
    urlPath: 'rejection-letter-templates',
    title: 'Rejection Letter Templates',
    pageType: 'template-category',
    description:
      'Streamline your rejection process with our collection of rejection letter templates.',
    status: 'published',
  },
  {
    urlPath: 'interview-letter-templates',
    title: 'Interview Letter Templates',
    pageType: 'template-category',
    description:
      'Streamline your interview process with our collection of interview letter templates.',
    status: 'published',
  },
  {
    urlPath: 'email-templates',
    title: 'Email Templates',
    pageType: 'template-category',
    description:
      'Use ready-to-send hiring email templates for outreach, interviews, and follow-ups.',
    status: 'published',
  },
]

function parseCsvRow(line) {
  const out = []
  let cur = ''
  let inQuotes = false
  for (let i = 0; i < line.length; i++) {
    const ch = line[i]
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') {
        cur += '"'
        i++
      } else {
        inQuotes = !inQuotes
      }
      continue
    }
    if (ch === ',' && !inQuotes) {
      out.push(cur)
      cur = ''
      continue
    }
    cur += ch
  }
  out.push(cur)
  return out
}

function readCsv(filename) {
  const raw = fs.readFileSync(path.join(dataDir, filename), 'utf8').trim()
  const lines = raw.split(/\r?\n/)
  const header = parseCsvRow(lines[0])
  return lines.slice(1).filter(Boolean).map((line) => {
    const cols = parseCsvRow(line)
    const row = {}
    header.forEach((key, i) => {
      row[key] = cols[i] ?? ''
    })
    return row
  })
}

const programmatic = [
  ...readCsv('sh_industry_pages.csv'),
  ...readCsv('sh_usecase_pages.csv'),
].map((row) => ({
  urlPath: row.slug,
  title: row.meta_title,
  pageType: 'programmatic',
  description: row.meta_desc,
  h1: row.h1,
  status: 'published',
}))

const allPages = [...hubPages, ...programmatic]

const headers = { 'Content-Type': 'application/json' }
if (apiKey) headers.Authorization = `users API-Key ${apiKey}`

async function upsert(page) {
  const params = new URLSearchParams({
    'where[urlPath][equals]': page.urlPath,
    limit: '1',
  })
  const existingRes = await fetch(`${apiUrl}/resource-pages?${params}`, { headers })
  if (!existingRes.ok) {
    throw new Error(`List failed (${existingRes.status}): ${await existingRes.text()}`)
  }
  const existing = await existingRes.json()
  const doc = existing.docs?.[0]
  if (doc?.id) {
    const patchRes = await fetch(`${apiUrl}/resource-pages/${doc.id}`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify(page),
    })
    if (!patchRes.ok) throw new Error(`Patch ${page.urlPath}: ${await patchRes.text()}`)
    return 'updated'
  }
  const createRes = await fetch(`${apiUrl}/resource-pages`, {
    method: 'POST',
    headers,
    body: JSON.stringify(page),
  })
  if (!createRes.ok) throw new Error(`Create ${page.urlPath}: ${await createRes.text()}`)
  return 'created'
}

let created = 0
let updated = 0
for (const page of allPages) {
  const result = await upsert(page)
  if (result === 'created') created++
  else updated++
  console.log(`${result}: ${page.urlPath || '(hub)'}`)
}
console.log(`Done. ${created} created, ${updated} updated.`)
