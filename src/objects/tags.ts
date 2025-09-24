import { Tag, categories } from '@/classes/tag'

// Programspråk
// Platformar
// Ramverk

export const tags = {
  typescript: new Tag('Typescript', 6, categories.programLanguage),
  javascript: new Tag('Javascript', 5, categories.programLanguage),
  cSharp: new Tag('C#', 6, categories.programLanguage),
  kotlin: new Tag('Kotlin', 3, categories.programLanguage),
  php: new Tag('php', 4, categories.programLanguage),
  docker: new Tag('Docker', 4, categories.platforms),
  linux: new Tag('Linux', 5, categories.platforms),
  windows: new Tag('Windows', 6, categories.platforms),
  android: new Tag('Android', 6, categories.platforms),
  vue: new Tag('Vue', 5, categories.web),
  vueX: new Tag('VueX', 6, categories.web),
  react: new Tag('React', 4, categories.web),
  redux: new Tag('Redux', 4, categories.web),
  css: new Tag('CSS', 4, categories.web),
  scss: new Tag('SCSS', 5, categories.web),
  html: new Tag('HTML', 5, categories.web),
  sql: new Tag('SQL', 4, categories.database),
  sqlite: new Tag('SQLITE', 4, categories.database),
  graphql: new Tag('GraphQL', 1, categories.database),
  nativescriptVue: new Tag('Nativescript-Vue', 5, categories.smartPhone),
  reactNative: new Tag('React Native', 4, categories.smartPhone),
  androidStudio: new Tag('Android Studio', 5, categories.smartPhone),
  scrum: new Tag('Scrum', 5, categories.processes),
  git: new Tag('Git', 4, categories.processes),
}

export default tags
