import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import { schemaTypes } from '@/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'stage-revolution-cms',

  projectId: '31qsdg20',
  dataset: 'production',

  basePath: '/admin',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
