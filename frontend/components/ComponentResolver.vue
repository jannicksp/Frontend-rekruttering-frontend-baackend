<template>
  <div>
    <component :is="component" v-if="component" :content="content" />
  </div>
</template>

<script>
const components = {
  PageHeader: () => import('@/components/DynamicComponents/PageHeader'),
  Stack: () => import('@/components/DynamicComponents/Stack'),
  Technology: () => import('@/components/DynamicComponents/Technology'),
  Minitest: () => import('@/components/DynamicComponents/Minitest'),
  Culture: () => import('@/components/DynamicComponents/Culture')
  // Jobs: () => import('@/components/DynamicComponents/Jobs')
}
export default {
  components,
  props: {
    content: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    component() {
      if (components[this.componentName]) {
        return this.componentName
      }

      return false
    },
    componentName() {
      return this.content.__typename.replace('ComponentRows', '')
    }
  }
}
</script>
