<template>
  <h1>Vue app</h1>
  <hr />

  <!-- : equal to write v-bind -->
  <BaseCounter :value="5" />
  <BaseCounterScript :value="5" />
  <BaseCounterScriptFancy :value="5" />
</template>

<script lang="ts" setup>
import BaseCounter from './components/BaseCounter.vue';
import BaseCounterScript from './components/BaseCounterScript.vue';
import BaseCounterScriptFancy from './components/base-counter-script-fancy/BaseCounterScriptFancy.vue';
</script>

<style scoped>
/* scoped --> applies only to this component */
h1 {
  color: rgb(0, 156, 117);
}
</style>
