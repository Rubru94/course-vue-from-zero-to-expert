<template>
  <div class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- <ChatBubble
        v-for="{ id, text, isOwn, image } in messages"
        :key="id"
        :message="text"
        :isOwn="isOwn"
        :image="image"
      ></ChatBubble> -->
      <!-- equal -->
      <ChatBubble v-for="message in messages" :key="message.id" v-bind="message"></ChatBubble>
    </div>
  </div>
</template>

<script setup lang="ts">
import ChatBubble from './ChatBubble.vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';

interface Props {
  messages: ChatMessage[];
}
defineProps<Props>();
</script>
