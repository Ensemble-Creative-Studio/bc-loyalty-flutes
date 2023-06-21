export default {
    type: "document",
    name: "nft",
  
    i18n: true,
    title: "NFT",
    initialValue: {
      __i18n_lang: "fr",
    },
    i18n: {
      base: "fr",
      languages: ["fr", "en"],
      fieldNames: {
        lang: "__i18n_lang",
        references: "__i18n_refs",
        baseReference: "__i18n_base",
      },
    },
    fields: [
      {
        name: "titre",
        type: "string",
        title: "Titre",
      },
      {
        name: "text",
        type: "string",
        title: "Texte",
      },
  
      {
        name: "etapes",
        type: "array",
        title: "Etapes",
        of: [
          {
            type: "object",
            fields: [
              {
                name: "image",
                type: "image",
                title: "Image",
              },
              {
                name: "titre",
                type: "string",
                title: "Titre avantage",
              },
            
            ],
          },
        ],
      },
  

    ],
  };
  