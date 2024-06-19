import type { ChatMessage } from '@/interfaces/chat-message.interface';
import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';

export const useChat = () => {
  const messages = ref<ChatMessage[]>([]);

  const onMessage = (text: string) => {
    messages.value.push({
      id: uuidv4(),
      text,
      isOwn: true
    });
  };

  return {
    // Properties
    messages,
    // Methods
    onMessage
  };
};
