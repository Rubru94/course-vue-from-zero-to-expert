<template>
  <h2>BaseCounter</h2>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>

    <div>
      <button @click="counter++">+1</button>
      <button @click="counter--">-1</button>
    </div>
  </section>
  <hr />
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

interface Props {
  value?: number;
}
const props = defineProps<Props>();

const counter = ref(props.value ?? 10); // if value is not required we should handle possible undefined
const squareCounter = computed(() => Math.pow(counter.value, 2));
</script>
