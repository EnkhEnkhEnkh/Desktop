import {defineField, defineType} from 'sanity'

export default defineType({
   name: 'category',
   title: 'Categories',
   type: 'document',
   fields: [
      {
         name: 'name',
         type: 'string',
         title: 'Category name',
         validation: rule=> rule.required(),
      },
      {
         name: 'availability',
         type: 'array',
         title: 'Availability',
         of: [{ type: 'string' }],
         options: {
            list: [
               { title: '24/7', value: '24/7' },
               { title: 'Morning Only', value: 'morning' },
            ],
         },
      },
      {
         name: 'image',
         type: 'image',
         title: 'image of the categories',
         validation: rule=> rule.required(),
      }
   ],
})
