// import {defineField, defineType} from 'sanity'

export default {
  name: 'subcategory',
  title: 'Subcategory',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: rule=> rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
      validation: rule=> rule.max(200),
    },
    {
      name: 'type',
      title: 'Category',
      validation: rule=> rule.required(),
      type: 'reference',
      to: [{type: 'category'}]
    },
  ]
}

/*{
      name: 'inputTypes',
      type: 'array',
      title: 'Input Types',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'inputType',
              type: 'string',
              title: 'Input Type',
              options: {
                list: [
                  { title: 'Size (e.g., L, XL)', value: 'size' },
                  { title: 'Measurement (e.g., ml)', value: 'measurement' },
                  { title: 'Count (e.g., 1, 2)', value: 'count' },
                ],
              },
            },
            {
              name: 'options',
              type: 'array',
              title: 'Options',
              description: 'Options for this input type',
              of: [{ type: 'string' }], // E.g., ["L", "XL"], ["100 ml", "200 ml"], etc.
            },
          ],
        },
      ],
    }, */
