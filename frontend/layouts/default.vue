<template>
  <div>
    <the-header />
    <nuxt />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from '~/components/globals/TheHeader.vue';
import TheFooter from '~/components/globals/TheFooter.vue';

export default {
  components: {
    TheHeader,
    TheFooter,
  }
}
</script>
