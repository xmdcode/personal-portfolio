import type { CollectionConfig } from 'payload'

const Projects: CollectionConfig = {
  slug: 'projects',
  // admin: {
  //   useAsTitle: 'name',
  // },
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
      required: true,
    },
    {
      name: 'preview_image',
      label: 'Project Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'icon',
      label: 'Icon',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}

export default Projects
