import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'item',
  title: 'Items',
  type: 'document',
  fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Item name',
        validation: rule=> rule.required(),
    },
    {
        name: 'description',
        type: 'string',
        title: 'Description',
        validation: rule=> rule.max(200),
    },
    {
      name: 'image', 
      type: 'image',
      title: 'Image of the dish',
      validation: rule=> rule.required(),
    },
    {
      name: 'prices',
      title: 'Prices',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'size',
              title: 'Size',
              type: 'string', 
            },
            {
              name: 'price',
              title: 'Price',
              type: 'number', 
              validation: (rule) => rule.required().min(0),
            },
          ],
        },
      ],
      validation: rule => rule.min(1),
    },
    {
      name: 'subcategory',
      type: 'reference',
      to: [{ type: 'subcategory' }],
      title: 'Subcategory',
      validation: rule=> rule.required(),
    },
    {
      name: 'quantity',
      type: 'number',
      title: 'Stock Quantity',
      description: 'How much of this item is left',
      validation: (rule) =>
        rule
          .required()
          .min(0)
          .error('Quantity must be a non-negative number'),
    }
  ]
})
