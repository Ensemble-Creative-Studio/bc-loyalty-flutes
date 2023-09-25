export default {
  type: "document",
  name: "qrcode",

  i18n: true,
  title: "QR Code",
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
      name: "code",
      type: "array",
      title: "Choix QR Code",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "titre",
              type: "string",
              title: "Titre QR code",
            },
            {
              name: "text",
              type: "text",
              title: "Texte QR code",
            },
            {
              name: "buttonUrl",
              type: "url",
              title: 'url du bouton "obtenir votre nft buffet crampon"',
            },
            {
              name: "buttonCertificat",
              type: "string",
              title: 'Texte du bouton "obtenir votre nft buffet crampon"',
            },
          ],
        },
      ],
    },
    {
      name: "titreCarte",
      type: "string",
      title: "Titre Carte ",
    },
    {
      name: "image",
      type: "image",
      title: "Image Carte",
    },
    {
      name: "avantageCarte",
      type: "array",
      title: "Avantages NFT",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "titre",
              type: "string",
              title: "Points d'avantages",
            },
          ],
        },
      ],
    },
    {
      name: "petitePhrase",
      type: "string",
      title: "Disclamer ",
    },
  ],
};
