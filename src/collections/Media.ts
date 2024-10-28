import type { CollectionConfig } from 'payload'

const Media: CollectionConfig = {
  slug: 'media',

  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    disableLocalStorage: true,
    formatOptions: {
      format: 'webp',
    },
  },
}
export default Media
