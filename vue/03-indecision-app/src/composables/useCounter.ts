import { computed, ref } from 'vue';

export const useCounter = (initial: number = 10) => {
  const counter = ref(initial); // if value is not required we should handle possible undefined
  const squareCounter = computed(() => Math.pow(counter.value, 2));

  return {
    counter,
    squareCounter
  };
  // if return array set 'return [] as const' to ensure the order of the elements
};
