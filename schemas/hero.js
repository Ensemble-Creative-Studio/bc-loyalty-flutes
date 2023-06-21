export default {
    type: 'document',
    name: 'hero',
  
    i18n: true,
    title: 'Hero',
    initialValue: {
      __i18n_lang: 'fr',
    },
    i18n: {
      base: 'fr',
      languages: ['fr', 'en'],
      fieldNames: {
        lang: '__i18n_lang',
        references: '__i18n_refs',
        baseReference: '__i18n_base',
      },
    },
    fields: [
      {
        name: 'herotext',
        type: 'string',
        title: 'Obtenez votre certificat de proprité numérique',
      },
      {
        name: 'url',
        type: 'url',
        title: 'Video URL',
      },

    ],
  }
  