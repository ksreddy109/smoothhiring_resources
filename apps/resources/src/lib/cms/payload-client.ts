export type CmsSeoMeta = {
  title?: string | null
  description?: string | null
  image?: string | number | { url?: string } | null
}

export type CmsResourcePage = {
  urlPath: string
  title?: string
  description?: string
  h1?: string
  subheadline?: string
  meta?: CmsSeoMeta
}

type PayloadListResponse<T> = {
  docs: T[]
}

type PayloadResourceDoc = {
  urlPath: string
  title?: string
  description?: string
  h1?: string
  subheadline?: string
  status?: string
  meta?: CmsSeoMeta
}

function normalizeUrlPath(path: string): string {
  return path.replace(/^\/+|\/+$/g, '')
}

function pathKeyFromSegments(path: string[]): string {
  return normalizeUrlPath(path.join('/'))
}

let cachedByPath: Map<string, CmsResourcePage> | null | undefined

function mapDoc(doc: PayloadResourceDoc): CmsResourcePage {
  return {
    urlPath: normalizeUrlPath(doc.urlPath ?? ''),
    title: doc.title,
    description: doc.description,
    h1: doc.h1,
    subheadline: doc.subheadline,
    meta: doc.meta,
  }
}

export async function loadCmsResourcePages(): Promise<Map<string, CmsResourcePage>> {
  if (cachedByPath !== undefined) {
    return cachedByPath ?? new Map()
  }

  const apiUrl = process.env.PAYLOAD_API_URL
  if (!apiUrl) {
    cachedByPath = null
    return new Map()
  }

  const headers: Record<string, string> = { 'Content-Type': 'application/json' }
  const apiKey = process.env.PAYLOAD_API_KEY
  if (apiKey) {
    headers.Authorization = `users API-Key ${apiKey}`
  }

  try {
    const params = new URLSearchParams({
      limit: '500',
      depth: '1',
      'where[status][equals]': 'published',
    })
    const res = await fetch(`${apiUrl}/resource-pages?${params}`, {
      headers,
      next: { revalidate: false },
    })
    if (!res.ok) {
      cachedByPath = null
      return new Map()
    }
    const json = (await res.json()) as PayloadListResponse<PayloadResourceDoc>
    const map = new Map<string, CmsResourcePage>()
    for (const doc of json.docs ?? []) {
      const page = mapDoc(doc)
      map.set(page.urlPath, page)
    }
    cachedByPath = map
    return map
  } catch {
    cachedByPath = null
    return new Map()
  }
}

export async function getCmsResourcePage(path: string[]): Promise<CmsResourcePage | undefined> {
  const map = await loadCmsResourcePages()
  return map.get(pathKeyFromSegments(path))
}

export function resetCmsResourcePageCache(): void {
  cachedByPath = undefined
}
