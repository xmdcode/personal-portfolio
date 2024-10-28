import { lexicalEditor } from '@payloadcms/richtext-lexical'
// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import { s3Storage } from '@payloadcms/storage-s3'
import nodemailer from 'nodemailer'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
// import { cloudStorage } from '@payloadcms/plugin-cloud-storage'
// import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { HeaderData } from './globals/HeaderData'
import { Projects } from './collections/Projects'
import { Articles } from './collections/Articles'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Media, Pages, Projects, Articles],
  globals: [HeaderData],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    s3Storage({
      disableLocalStorage: true,
      collections: {
        media: {
          disableLocalStorage: true,
          prefix: 'media',
          disablePayloadAccessControl: true,
          generateFileURL: (args) => {
            return `${process.env.CLOUFLARE_FILE_URL}/${args.prefix}/${args.filename}`
          },
        },
      },
      bucket: process.env.CLOUDFLARE_BUCKET ?? '',
      config: {
        endpoint: process.env.CLOUDFLARE_ENDPOINT,
        credentials: {
          accessKeyId: process.env.CLOUDFLARE_ACCESS_KEY_ID ?? '',
          secretAccessKey: process.env.CLOUDFLARE_SECRET_ACCESS_KEY ?? '',
        },
        region: 'auto',
        forcePathStyle: true,

        // ... Other S3 configuration
      },
    }),
  ],
  // email: nodemailerAdapter({
  //   defaultFromAddress: 'webxmdev@gmail.com',
  //   defaultFromName: 'XMDCode',
  //   // Nodemailer transportOptions
  //   transport: nodemailer.createTransport({
  //     host: process.env.SMTP_HOST,
  //     port: 465,
  //     secure: true,
  //     auth: {
  //       user: process.env.SMTP_USER,
  //       pass: process.env.SMTP_PASS,
  //     },
  //   }),

  // }),
})
