export default {
    type: 'document',
    name: 'videoFooter',
  
    i18n: true,
    title: 'Video Footer',
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
        title: 'Texte',
      },
      {
        name: 'url',
        type: 'url',
        title: 'Video URL',
      },
      {
        name: "image",
        type: "image",
        title: "Poster video",
      },
    ],
  }
  