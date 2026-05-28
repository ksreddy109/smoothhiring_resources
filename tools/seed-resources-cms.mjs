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
    title: 'Free Hiring Resources, Templates & AI Tools',
    pageType: 'hub',
    description:
      'Free job description templates, interview kits, offer letters & AI generators. Practical hiring resources for recruiters — Free Trial, no credit card required.',
    h1: 'Free Hiring Resources, Templates & AI Tools',
    status: 'published',
  },
  {
    urlPath: 'ai-job-description',
    title: 'Free AI Job Description Generator',
    pageType: 'generator',
    description:
      "Use SmoothHiring's free AI job description generator to create optimized, inclusive job descriptions in seconds. Attract qualified candidates — Free Trial.",
    h1: 'Free AI Job Description Generator',
    status: 'published',
  },
  {
    urlPath: 'ai-interview-kit',
    title: 'Free AI Interview Kit Generator — Questions & Scorecards',
    pageType: 'generator',
    description:
      "Use SmoothHiring's free AI interview kit generator to build structured interview kits with role-specific questions and scorecards in seconds.",
    h1: 'Free AI Interview Kit Generator',
    status: 'published',
  },
  {
    urlPath: 'job-description-templates',
    title: 'Free Job Description Templates & Examples for Every Role',
    pageType: 'template-category',
    description:
      'Browse free job description templates and examples for 100+ roles. Copy, customize, and post hiring-ready job descriptions in minutes.',
    status: 'published',
  },
  {
    urlPath: 'offer-letter-templates',
    title: 'Free Offer Letter Templates & Examples',
    pageType: 'template-category',
    description:
      'Free, editable offer letter templates and examples for every role and employment type. Copy, customize, and send a professional job offer letter in minutes.',
    status: 'published',
  },
  {
    urlPath: 'policy-templates',
    title: 'Free HR Policy Templates & Examples',
    pageType: 'template-category',
    description:
      'Free HR policy templates and examples — PTO, remote work, code of conduct, and more. Download, customize, and standardize your company policies in minutes.',
    status: 'published',
  },
  {
    urlPath: 'rejection-letter-templates',
    title: 'Candidate Rejection Email & Letter Templates (Free)',
    pageType: 'template-category',
    description:
      'Free candidate rejection email and letter templates for every stage of hiring — from application to final interview. Reject candidates professionally and kindly in minutes. No sign-up required.',
    status: 'published',
  },
  {
    urlPath: 'interview-letter-templates',
    title: 'Interview Invitation Email Templates (Free)',
    pageType: 'template-category',
    description:
      'Free interview invitation email templates for phone, video, panel, and in-person interviews. Invite candidates professionally and schedule faster — copy, customize, and send.',
    status: 'published',
  },
  {
    urlPath: 'email-templates',
    title: 'Free Recruiting & Hiring Email Templates',
    pageType: 'template-category',
    description:
      'Free recruiting and hiring email templates for every stage — candidate outreach, interview invitations, follow-ups, offers, and rejections. Copy, customize, and send in seconds.',
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
