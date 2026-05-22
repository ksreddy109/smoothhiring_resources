import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { seoPlugin } from '@payloadcms/plugin-seo'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { ResourcePages } from './collections/ResourcePages'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: '— SmoothHiring Resources CMS',
    },
  },
  collections: [Users, Media, ResourcePages],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'fallback-secret-change-in-production',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  plugins: [
    seoPlugin({
      collections: ['resource-pages'],
      uploadsCollection: 'media',
      generateTitle: ({ doc }) => {
        const title = doc?.title as string | undefined
        return title ? `${title} — SmoothHiring Resources` : 'SmoothHiring Resources'
      },
      generateDescription: ({ doc }) => (doc?.description as string | undefined) || '',
      generateURL: ({ doc }) => {
        const base = process.env.RESOURCES_PUBLIC_URL || 'https://resources.smoothhiring.com'
        const urlPath = (doc?.urlPath as string | undefined) ?? ''
        const segment = urlPath ? `${urlPath}/` : ''
        return `${base}/resources/${segment}`
      },
    }),
  ],
  cors: [
    process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3002',
    process.env.RESOURCES_URL || 'http://localhost:3000',
  ],
  csrf: [
    process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3002',
    process.env.RESOURCES_URL || 'http://localhost:3000',
  ],
})
