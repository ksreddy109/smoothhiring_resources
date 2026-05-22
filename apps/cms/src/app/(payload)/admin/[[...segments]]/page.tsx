import { RootPage, generatePageMetadata } from '@payloadcms/next/views'
import type { SanitizedConfig } from 'payload'
import { importMap } from '../importMap.js'

type Args = {
  params: Promise<{ segments: string[] }>
  searchParams: Promise<{ [key: string]: string | string[] }>
}

const config = (): Promise<SanitizedConfig> =>
  import('@payload-config').then((mod) => mod.default as unknown as SanitizedConfig)

export const generateMetadata = ({ params, searchParams }: Args) =>
  generatePageMetadata({ config: config(), params, searchParams })

export default function Page({ params, searchParams }: Args) {
  return RootPage({ config: config(), params, searchParams, importMap })
}
