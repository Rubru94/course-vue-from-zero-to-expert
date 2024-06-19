import type { ChatMessage } from '@/interfaces/chat-message.interface';
import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import type { YesNoResponse } from '@/interfaces/yes-no-response';
import { sleep } from '@/helpers/sleep';

export const useChat = () => {
  const messages = ref<ChatMessage[]>([]);

  const getApiResponse = async (): Promise<YesNoResponse> => {
    const resp = await fetch('https://yesno.wtf/api');
    return (await resp.json()) as YesNoResponse;
  };

  const onMessage = async (text: string) => {
    if (text.length === 0) return;

    messages.value.push({
      id: uuidv4(),
      text,
      isOwn: true
    });

    if (!text.endsWith('?')) return;
    await sleep(1.5);
    const { answer, image } = await getApiResponse();

    messages.value.push({
      id: uuidv4(),
      text: answer,
      isOwn: false,
      image
    });
  };

  return {
    // Properties
    messages,
    // Methods
    onMessage
  };
};
