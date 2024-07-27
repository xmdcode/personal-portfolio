import type { CollectionConfig } from 'payload'

export const Articles: CollectionConfig = {
  slug: 'articles',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'title',
      label: 'Article Title',
      type: 'text',
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
    },
    {
      name: 'image',
      label: 'Article Image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'dscr_small',
      label: 'Article Short Description',
      type: 'textarea',
    },
    {
      name: 'dscr_big',
      label: 'Article Big Description',
      type: 'textarea',
    },
  ],
}
