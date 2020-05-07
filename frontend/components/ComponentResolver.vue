<template>
<div>
  <component
    v-if="component"
    :is="component"
    :content="content" />
  </div>
</template>
​
<script>
const components = {
  PageHeader: () => import('@/components/DynamicComponents/PageHeader'),
  Stack: () => import('@/components/DynamicComponents/Stack'),
  Technology: () => import('@/components/DynamicComponents/Technology'),
  Minitest: () => import('@/components/DynamicComponents/Minitest'),
  Culture: () => import('@/components/DynamicComponents/Culture'),
  Jobs: () => import('@/components/DynamicComponents/Jobs'),
};
export default {
  components,
  props: {
      content: {
        type: Object,
        default: function () {
          return {}
        }
      },
  },
  computed: {
    component() {
      if (components[this.componentName]) {
        return this.componentName;
      }

      console.error('component was not found');
      return false;
    },
    componentName(){
      return this.content.__typename.replace('ComponentRows','');
    },
  },
};
</script>
