import { ref, onMounted, onUnmounted } from "vue";

export default function useScroll() {
  const scrollY = ref(0);

  const updateScroll = () => {
    scrollY.value = window.scrollY || window.pageYOffset;
  };

  onMounted(() => {
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", updateScroll);
  });

  return {
    scrollY,
  };
}
