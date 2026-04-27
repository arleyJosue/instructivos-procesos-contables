import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'instructivo',
  title: 'Instructivos',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título del Instructivo',
      type: 'string',
      description: 'Escribe el nombre del proceso contable (ej: Conciliación Bancaria)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Contenido del Instructivo',
      type: 'blockContent',
      description: 'Aquí va todo el desarrollo: pasos, listas, imágenes internas y enlaces.',
    }),
     defineField({
      name: 'slug',
      title: 'Slug / URL',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      description: 'Haz clic en "Generate" para crear la URL amigable.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'reference',
      to: [{type: 'category'}],
      description: 'Selecciona el área contable correspondiente.',
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagen de Portada',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Fecha de Publicación',
      type: 'datetime',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author ? `por ${author}` : 'Sin autor'}
    },
  },
})