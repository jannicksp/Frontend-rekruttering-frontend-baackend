import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory'

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: {
    __schema: {
      types: [] // no types provided
    }
  }
})

export default new InMemoryCache({
  fragmentMatcher
})
