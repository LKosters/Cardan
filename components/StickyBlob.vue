<template>
  <div
    :class="[
      'fixed w-[22vw] h-[22vw] z-10 pointer-events-none flex justify-center items-center transition-all duration-300',
      positionClass,
    ]"
    @click="handleMisclick"
  >
    <img
      src="/blob2.png"
      alt="Icoon blob ontdek jezelf"
      class="w-full h-full object-contain"
    />
    <div
      class="absolute flex flex-col items-center justify-center text-center p-12 mt-6 pointer-events-auto"
    >
      <div class="font-bold text-white blob-text-size">Ontdek jezelf</div>
      <div class="text-white mb-2 blob-text-size-small">
        Ervaar een website als een persoon met een beperking.
      </div>
      <a
        :href="linkUrl"
        target="_blank"
        rel="noopener noreferrer"
        @click.stop
        class="bg-white text-white p-2 rounded-full no-underline transition-all duration-200 hover:bg-gray-200 hover:scale-105 blob-button-size"
      >
        <IconArrow class="fill-secondary" />
      </a>
    </div>
  </div>
</template>

<script setup>
import IconArrow from "~/components/icon/arrow/index.vue";
import { ref, computed } from "vue";

defineProps({
  linkUrl: {
    type: String,
    default: "https://example.com",
  },
});

const positions = [
  "top-1/2 right-5",
  "top-1/3 right-10",
  "top-2/3 right-8",
  "top-1/4 right-12",
  "top-3/4 right-6",
];

const currentPositionIndex = ref(0);

const positionClass = computed(() => {
  return positions[currentPositionIndex.value];
});

const handleMisclick = (event) => {
  // Only trigger if the click is not on the button (misclick)
  if (!event.target.closest("a")) {
    // Move to next position in the array
    currentPositionIndex.value =
      (currentPositionIndex.value + 1) % positions.length;
  }
};
</script>

<style scoped>
.blob-text-size {
  font-size: clamp(1rem, 1.5vw, 1.5rem);
}

.blob-text-size-small {
  font-size: clamp(0.625rem, 1vw, 0.875rem);
}

.blob-button-size {
  font-size: clamp(0.75rem, 1vw, 1rem);
}
</style>
