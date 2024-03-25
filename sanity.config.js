
import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import { visionTool } from "@sanity/vision"
import { schemaTypes } from "./schemas"
import {apiVersion, dataset, projectId} from './sanity/env'
import {withDocumentI18nPlugin, getDocumentList} from '@sanity/document-internationalization'
import { dashboardTool } from "@sanity/dashboard";
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify";
import {schema} from './sanity/schema'
// Define the actions that should be available for singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"])

// Define the singleton document types
const singletonTypes = new Set(["header"])

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,

  plugins:withDocumentI18nPlugin( [
    deskTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
              S.listItem()
              .title("Hero")
              .id("hero")
              .child(
                // Instead of rendering a list of documents, we render a single
                // document, specifying the `documentId` manually to ensure
                // that we're editing the single instance of the document
                S.document()
                  .schemaType("hero")
                  .documentId("hero")
              ),
              S.listItem()
              .title("Passport")
              .id("passport")
              .child(
                // Instead of rendering a list of documents, we render a single
                // document, specifying the `documentId` manually to ensure
                // that we're editing the single instance of the document
                S.document()
                  .schemaType("passport")
                  .documentId("passport")
              ),
              S.listItem()
              .title("Avantages")
              .id("avantages")
              .child(
                // Instead of rendering a list of documents, we render a single
                // document, specifying the `documentId` manually to ensure
                // that we're editing the single instance of the document
                S.document()
                  .schemaType("avantages")
                  .documentId("avantages")
              ),
              S.listItem()
              .title("NFT")
              .id("nft")
              .child(
                // Instead of rendering a list of documents, we render a single
                // document, specifying the `documentId` manually to ensure
                // that we're editing the single instance of the document
                S.document()
                  .schemaType("nft")
                  .documentId("nft")
              ),
              S.listItem()
              .title("QR Code")
              .id("qrcode")
              .child(
                // Instead of rendering a list of documents, we render a single
                // document, specifying the `documentId` manually to ensure
                // that we're editing the single instance of the document
                S.document()
                  .schemaType("qrcode")
                  .documentId("qrcode")
              ),
              S.listItem()
              .title("Video Footer")
              .id("videoFooter")
              .child(
                // Instead of rendering a list of documents, we render a single
                // document, specifying the `documentId` manually to ensure
                // that we're editing the single instance of the document
                S.document()
                  .schemaType("videoFooter")
                  .documentId("videoFooter")
              ),
              S.listItem()
              .title("Footer")
              .id("footer")
              .child(
                // Instead of rendering a list of documents, we render a single
                // document, specifying the `documentId` manually to ensure
                // that we're editing the single instance of the document
                S.document()
                  .schemaType("footer")
                  .documentId("footer")
              ),
              S.divider(),
              S.listItem()
              .title("Overlay")
              .id("overlay")
              .child(
                // Instead of rendering a list of documents, we render a single
                // document, specifying the `documentId` manually to ensure
                // that we're editing the single instance of the document
                S.document()
                  .schemaType("overlay")
                  .documentId("overlay")
              ),
              S.divider(),
            // Regular document types
            S.documentTypeListItem("pageFooter").title("Pages légales"),
            // S.documentTypeListItem("author").title("Authors"),
          ]),
    }),
    visionTool(),
    dashboardTool({
      widgets: [
        netlifyWidget({
            title: 'My Netlify deploys',
            sites: [
           
              {
                // title: 'BC - Loyalty',
                // apiId: '7dd58f6f-bc1e-4120-b5c9-f0cd38dc3d3c',
                // buildHookId: '64c7d4e7c9caf116fe130458',
                // name: 'zingy-dango-613832.netlify',
                // url:'https://zingy-dango-613832.netlify.app/'
              }
            ]
        })
      ]
    }),
  ], {
    // .. your i18n config, example:
    languages: ['fr', 'en', 'de','ja'],
  }),

  schema: {
    types: schemaTypes,

    // Filter out singleton types from the global “New document” menu options
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
})
