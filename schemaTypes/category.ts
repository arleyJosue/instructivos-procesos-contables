import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Categorías',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
    }),
  ],
})
