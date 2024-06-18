<template>
  <h2>BaseCounter</h2>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>

    <div>
      <button class="btn" @click="counter++">+1</button>
      <button class="btn" @click="counter--">-1</button>
    </div>
  </section>
  <hr />
</template>

<script lang="ts" setup>
import { useCounter } from '../composables/useCounter';

interface Props {
  value?: number;
}
const props = defineProps<Props>();

const { counter, squareCounter } = useCounter(props.value);
</script>

<style scoped>
.btn {
  @apply p-2 mr-2 bg-blue-500 rounded hover:bg-blue-600;
}
</style>
