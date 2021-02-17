import React from 'react'
import { Entity } from 'react-drupal-layout-builder'
import layoutSections from './components/sections/layoutSections'
import blockCatalog from './components/blocks/blockCatalog'
import formatterList from './components/formatters/formatterList'
import 'react-drupal-layout-builder/dist/index.css'

const App = () => {
  const params = {
    api: {
      baseUrl: 'http://drupal_react.local',
      settings: {}
    },
    catalog: {
      sections: layoutSections,
      blocks: blockCatalog,
      formatters: formatterList
    }
  };
  const entity = {
    entityType: 'node',
    bundle: 'page',
    uuid: '06682711-1b4b-4387-8c89-2ef056dc7c28'
  };
  return (
    <Entity params={params} properties={entity} />
  )
}

export default App
