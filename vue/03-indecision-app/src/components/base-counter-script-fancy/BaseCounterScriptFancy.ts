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
