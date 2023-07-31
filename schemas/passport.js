export default {
  type: "document",
  name: "passport",

  i18n: true,
  title: "Passport",
  initialValue: {
    __i18n_lang: "fr",
  },
  i18n: {
    base: "fr",
    languages: ['fr','en','de','ja'],
    fieldNames: {
      lang: "__i18n_lang",
      references: "__i18n_refs",
      baseReference: "__i18n_base",
    },
  },
  fields: [
    {
      name: "image",
      type: "image",
      title: "Image",
    },
    {
      name: "titre",
      type: "string",
      title: "Un passeport digital pour votre clarinette",
    },
    {
      name: "text",
      type: "text",
      title: "Text",
    },

    {
      name: "buttonUrl",
      type: "url",
      title: 'url du bouton "Obtenez votre certificat d’authenticité"',
    },
    {
      name: "buttonCertificat",
      type: "string",
      title: 'Texte du bouton "Obtenez votre certificat d’authenticité"',
    },
  ],
};
