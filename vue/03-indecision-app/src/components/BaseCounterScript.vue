<template>
  <h2>Traditional component - BaseCounterScript</h2>
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

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    value: { type: Number, required: true }
  },
  setup(props) {
    const counter = ref(props.value);
    const squareCounter = computed(() => Math.pow(counter.value, 2));

    return {
      counter,
      squareCounter
    };
  }
});
</script>
