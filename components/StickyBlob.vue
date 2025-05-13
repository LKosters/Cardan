<template>
  <div
    v-if="isVisible"
    :class="[
      'fixed z-10 pointer-events-none flex justify-center items-center w-[60vw] h-[60vw] sm:w-[50vw] sm:h-[50vw] md:w-[32vw] md:h-[32vw] lg:w-[25vw] lg:h-[25vw]',
      positionClass,
      'transition-all duration-[1000ms] ease-in-out transform',
    ]"
    @click="handleMisclick"
  >
    <button
      @click.stop="closeBlob"
      class="absolute top-0 right-[20%] top-[25%] sm:hidden z-20 bg-white/90 rounded-full w-6 h-6 flex items-center justify-center pointer-events-auto shadow-md transform -translate-y-2"
      aria-label="Close"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="text-secondary"
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
    <img
      src="/blob4.png"
      alt="Icoon blob ontdek jezelf"
      class="w-full h-full object-contain"
    />
    <div
      class="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-auto"
      style="width: 70%; height: 70%; margin: auto; transform: translateY(15%);"
    >
      <div
        class="font-bold text-white text-[clamp(1rem,3vw,1.6rem)] mb-1 sm:mb-2"
      >
        Beperk jezelf
      </div>
      <p
        class="hidden sm:block text-white mb-2 text-[clamp(0.75rem,1.5vw,1rem)]"
      >
        Ervaar een website als een persoon met een beperking.
      </p>
      <a
        :href="linkUrl"
        target="_blank"
        rel="noopener noreferrer"
        @click.stop
        class="bg-white text-white p-2 rounded-full no-underline transition-all duration-200 hover:bg-gray-200 hover:scale-105"
      >
        <IconArrow class="fill-secondary w-4 h-4 sm:w-6 sm:h-6" />
      </a>
    </div>
  </div>
</template>

<script setup>
import IconArrow from "~/components/icon/arrow/index.vue";
import { ref, computed, onMounted } from "vue";

defineProps({
  linkUrl: {
    type: String,
    default: "/beperk-jezelf",
  },
});

// Simplified, consistent positions
const positions = [
  "top-[70%] -right-8 sm:-right-6 md:-right-4 lg:-right-2 -translate-y-full",
  "top-[60%] -right-8 sm:-right-6 md:-right-4 lg:-right-2 -translate-y-full",
  "top-[80%] -right-8 sm:-right-6 md:-right-4 lg:-right-2 -translate-y-full",
  "top-[40%] -right-8 sm:-right-6 md:-right-4 lg:-right-2 -translate-y-full",
  "top-[100%] -right-8 sm:-right-6 md:-right-4 lg:-right-2 -translate-y-full",
];

const currentPositionIndex = ref(0);

const positionClass = computed(() => {
  return positions[currentPositionIndex.value];
});

const isVisible = ref(true);

// Add overflow-x-hidden to body on mount to prevent horizontal scrolling
onMounted(() => {
  document.body.classList.add("overflow-x-hidden");
});

const closeBlob = () => {
  isVisible.value = false;
};

const handleMisclick = (event) => {
  // Only trigger if the click is not on the button (misclick)
  if (!event.target.closest("a") && !event.target.closest("button")) {
    // Use Vue's reactivity system to update position
    currentPositionIndex.value =
      (currentPositionIndex.value + 1) % positions.length;
  }
};
</script>

<style scoped>
/* Add CSS transitions for smoother animation */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.duration-1000 {
  transition-duration: 1000ms;
}
</style>
