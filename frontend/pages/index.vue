<template>
  <div>

    <div class="uk-section">
      <div class="uk-container uk-container-large">
        <h1>Hello fra frontpage mand!🍆</h1>
      <div v-for="component in article.Dynamic" :key="component.__typename">
        <componentResolver :content="component" />
      </div>

      <pre>
        {{article}}

      </pre>
      </div>
    </div>

  </div>
</template>

<script>
import articleQuery from '~/apollo/queries/article/article';
import componentResolver from '~/components/ComponentResolver.vue';

export default {
  components: {
    componentResolver,
  },
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
