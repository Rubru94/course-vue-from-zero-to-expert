<template>
  <!-- Example Message -->
  <div v-if="isOwn" class="flex justify-end">
    <div class="bg-blue-200 text-black p-2 rounded-lg max-w-xs">{{ text }}</div>
  </div>

  <!-- Example Received Message -->
  <div v-else class="flex">
    <div class="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
      <span class="capitalize">{{ text }}</span>
      <img v-if="image" :src="image" alt="YesNoImage" class="w-50 h-50 object-cover rounded-md" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  text: string;
  isOwn: boolean;
  image?: string;
}
defineProps<Props>();
</script>
