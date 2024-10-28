import { HeroSection } from '@/blocks/Atoms/HeroSection'
import { RelationCollectionSection } from '@/blocks/RelationCollectionSection'
import type { CollectionConfig } from 'payload'

const Pages: CollectionConfig = {
  slug: 'pages',
  // admin: {
  //   useAsTitle: 'name',
  // },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
    },
    {
      name: 'layout', // required
      type: 'blocks', // required
      minRows: 1,
      maxRows: 20,
      blocks: [HeroSection, RelationCollectionSection],
    },
  ],
}

export default Pages
