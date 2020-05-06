import cache from './cache'

export default function(ctx) {
  return {
    httpEndpoint: `http://localhost:1337/graphql`,
    cache
  }
}
