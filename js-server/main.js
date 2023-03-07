import { MeiliSearch } from 'meilisearch'
import movies from './json/movies.json' assert {type: 'json'}

const client = new MeiliSearch({ host: 'http://localhost:7700' })
/* client.index('movies').addDocuments(movies)
  .then((res) => console.log(res)) */

client.index('movies').search('botman').then((res) => console.log(res))
