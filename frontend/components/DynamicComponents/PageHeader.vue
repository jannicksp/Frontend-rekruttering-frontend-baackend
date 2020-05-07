<template>
  <div class="page-header">
    <h3>PageHeader Grid component</h3>
    <h2>{{content.Title}}</h2>
    <h2>{{content.Content}}</h2>
    <pre>
      {{content}}
    </pre>
  </div>
</template>

<script>
export default {
  props: {
      content: {
        type: Object,
        default: function () {
          return {}
        }
      },
  },
}
</script>

<style scoped>
:root {
  --page-header-bg: deeppink;
}
.page-header {
  background: var(--page-header-bg);
}

</style>
