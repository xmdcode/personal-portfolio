// import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical'
import type { CollectionConfig } from 'payload'

const Articles: CollectionConfig = {
  slug: 'articles',
  // admin: {
  //   useAsTitle: 'name',
  // },

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
    // {
    //   name: 'dscr',
    //   label: 'Article Big Description',
    //   type: 'richText',
    //   // Pass the Lexical editor here and override base settings as necessary
    //   editor: lexicalEditor({
    //     features: ({ defaultFeatures }) => [
    //       ...defaultFeatures,
    //       // The HTMLConverter Feature is the feature which manages the HTML serializers.
    //       // If you do not pass any arguments to it, it will use the default serializers.
    //       HTMLConverterFeature({}),
    //     ],
    //   }),
    // },
    // lexicalHTML('dscr', { name: 'dscr_html' }),
  ],
}

export default Articles
