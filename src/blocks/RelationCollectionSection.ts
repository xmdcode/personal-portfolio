import { Block } from 'payload'

export const RelationCollectionSection: Block = {
  slug: 'relationcollectionsection', // required
  // imageURL: 'https://google.com/path/to/image.jpg',
  // imageAltText: 'A nice thumbnail image to show what this block looks like',
  interfaceName: 'Relation Collection Section', // optional
  fields: [
    // required
    {
      name: 'relation',
      label: 'Relation to Collection(Add collection slug)',
      type: 'text',
    },
  ],
}
