<template>
  <div
    :class="[
      'fixed z-10 pointer-events-none flex justify-center items-center w-[60vw] h-[60vw] sm:w-[50vw] sm:h-[50vw] md:w-[32vw] md:h-[32vw] lg:w-[28vw] lg:h-[28vw]',
      positionClass,
      'transition-all duration-[1000ms] ease-in-out transform'
    ]"
    @click="handleMisclick"
  >
    <img
      src="/blob3.png"
      alt="Icoon blob ontdek jezelf"
      class="w-full h-full object-contain"
    />
    <div
      class="absolute flex flex-col items-center justify-center text-center p-3 sm:p-6 md:p-12 mt-2 sm:mt-8 md:mt-12 pointer-events-auto w-full max-w-[90%]"
    >
      <div class="font-bold text-white text-[4.5vw] sm:text-[3.5vw] md:text-[2vw] lg:text-[1.6rem] mb-3 sm:mb-0 pt-6">Beperk jezelf</div>
      <div class="hidden sm:block text-white mb-3 text-[3.5vw] sm:text-[2.5vw] md:text-[1.3vw] lg:text-[1.1rem]">
        Ervaar een website als een persoon met een beperking.
      </div>
      <a
        :href="linkUrl"
        target="_blank"
        rel="noopener noreferrer"
        @click.stop
        class="bg-white text-white p-2 rounded-full no-underline transition-all duration-200 hover:bg-gray-200 hover:scale-105 text-[3vw] sm:text-[2vw] md:text-[1.3vw] lg:text-[1.2rem]"
      >
        <IconArrow class="fill-secondary w-4 h-4 sm:w-7 sm:h-7" />
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
  "top-1/3 -right-8 sm:-right-6 md:-right-4 lg:-right-2 -translate-y-full", 
  "top-1/4 -right-8 sm:-right-6 md:-right-4 lg:-right-2 -translate-y-full", 
  "top-[80%] -right-8 sm:-right-6 md:-right-4 lg:-right-2 -translate-y-full", 
  "top-1/2 -right-8 sm:-right-6 md:-right-4 lg:-right-2 -translate-y-full", 
  "top-[100%] -right-8 sm:-right-6 md:-right-4 lg:-right-2 -translate-y-full", 
];

const currentPositionIndex = ref(0);

const positionClass = computed(() => {
  return positions[currentPositionIndex.value];
});

// Add overflow-x-hidden to body on mount to prevent horizontal scrolling
onMounted(() => {
  document.body.classList.add('overflow-x-hidden');
});

const handleMisclick = (event) => {
  // Only trigger if the click is not on the button (misclick)
  if (!event.target.closest("a")) {
    // Use Vue's reactivity system to update position
    currentPositionIndex.value = (currentPositionIndex.value + 1) % positions.length;
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
