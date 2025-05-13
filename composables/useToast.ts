import { ref } from "vue";

const isVisible = ref(false);
const message = ref("");

export const useToast = () => {
  const showToast = (msg: string) => {
    message.value = msg;
    isVisible.value = true;
    setTimeout(() => {
      isVisible.value = false;
    }, 2000);
  };

  return {
    isVisible,
    message,
    showToast,
  };
};
