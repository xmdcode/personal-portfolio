import GetRowLabel from '@/components/Payload/GetRowLabel'
import type { GlobalConfig } from 'payload'

const HeaderData: GlobalConfig = {
  slug: 'Header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navLinks',
      label: 'Nav links',
      type: 'array',
      required: true,
      labels: { singular: 'Nav Link', plural: 'Nav Links' },
      fields: [
        { name: 'label', label: 'Label', type: 'text' },
        { name: 'link', label: 'Link', type: 'text' },
      ],
      // admin: {
      //   initCollapsed: true,
      //   components: {
      //     RowLabel: GetRowLabel,
      //   },
      // },
    },
    {
      name: 'socialLinks',
      label: 'Social links',
      type: 'array',
      required: true,
      labels: { singular: 'Social Link', plural: 'Social Links' },
      fields: [
        { name: 'label', label: 'Label', type: 'text' },
        { name: 'link', label: 'Link', type: 'text' },
      ],
      // admin: {
      //   initCollapsed: false,
      //   components: {
      //     RowLabel: GetRowLabel,
      //   },
      // },
    },
  ],
}

export default HeaderData
