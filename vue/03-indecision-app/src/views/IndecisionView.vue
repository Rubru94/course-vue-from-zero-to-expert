<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Rosa Meltrozzo</span>
    </div>

    <ChatMessages :messages="messages" />
    <MessageBox @send-message="onMessage($event)" />
  </div>
</template>

<script setup lang="ts">
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';

const messages = ref<ChatMessage[]>([
  {
    id: uuidv4(),
    text: 'Hello world !!!',
    isOwn: true
  },
  {
    id: uuidv4(),
    text: 'ok',
    isOwn: false
    // image: 'https://yesno.wtf/assets/yes/12-e4f57c8f172c51fdd983c2837349f853.gif'
  }
]);

const onMessage = (text: string) => {
  messages.value.push({
    id: uuidv4(),
    text,
    isOwn: true
  });
};
</script>
