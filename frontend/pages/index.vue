<template>
  <div>

    <div class="uk-section">
      <div class="uk-container uk-container-large">
        <h1>Hello fra frontpage mand!🍆</h1>
      <div v-for="component in article.Dynamic" :key="component.__typename">
        <h2>{{component.__typename}}</h2>
      </div>


      <pre>
      {{article}}

      </pre>
      </div>
    </div>

  </div>
</template>

<script>
import articleQuery from '~/apollo/queries/article/article'

export default {
  data() {
    return {
      article: {},
    }
  },
  apollo: {
    article: {
      prefetch: true,
      query: articleQuery,
      variables() {
        return { id: 1 };
      }
    }
  }
}

</script>
