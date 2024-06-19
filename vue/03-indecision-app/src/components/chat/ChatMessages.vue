<template>
  <div class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->
      <ChatBubble :isOwn="true" message="Hello world" />
      <ChatBubble
        :isOwn="false"
        message="Yes"
        image="https://yesno.wtf/assets/yes/12-e4f57c8f172c51fdd983c2837349f853.gif"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ChatBubble from './ChatBubble.vue';
</script>
