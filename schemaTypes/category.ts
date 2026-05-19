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
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title', // Se autogenera basándose en el campo 'title'
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(), // Opcional: Obliga a que siempre exista
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
    }),
  ],
})
