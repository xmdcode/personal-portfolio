import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'title',
      label: 'Name',
      type: 'text',
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
    },
    {
      name: 'link',
      label: 'link',
      type: 'text',
    },
    {
      name: 'image',
      label: 'Project Image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
