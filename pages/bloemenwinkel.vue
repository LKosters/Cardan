<template>
  <div :class="route.query.filter">
    <BlockFlowerStore />
    <div
      v-if="route.query.filter === 'choker'"
      class="absolute inset-0 bg-black pointer-events-none"
      :style="`
        mask: radial-gradient(circle at center, transparent ${100 * (100 - route.query.intensity) / 50}px, black ${220 * (100 - route.query.intensity) / 50}px);
        webkitmask: radial-gradient(
          circle at center,
          transparent ${100 * (100 - intensity) / 50}px,
          black ${220 * (100 - intensity) / 50}px
        );
      `"
    ></div>
    <div v-if="filter === 'stains'">
      <div
        class="stain"
        style="top: 35%; left: 35%; width: 220px; height: 220px"
      ></div>
      <div
        class="stain"
        style="top: 60%; left: 60%; width: 200px; height: 200px"
      ></div>
      <div
        class="stain"
        style="top: 40%; left: 65%; width: 190px; height: 190px"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "simulation",
});

const route = useRoute();

const props = defineProps({
  url: {
    type: String,
    required: true,
  },
  filter: {
    type: String,
    required: false,
  },
  intensity: {
    type: Number,
    default: 50,
  },
});
</script>

<style scoped>
.pink-blue {
  filter: hue-rotate(calc(180deg * v-bind(intensity) / 50)) saturate(calc(1.5 * v-bind(intensity) / 50));
}

.blue-yellow {
  filter: hue-rotate(calc(90deg * v-bind(intensity) / 50)) saturate(calc(1.2 * v-bind(intensity) / 50));
}

.choker {
}

.blurred {
  filter: blur(calc(2px * v-bind(intensity) / 50));
}

.stains {
  filter: contrast(calc(0.8 * v-bind(intensity) / 50)) brightness(calc(1.2 * v-bind(intensity) / 50));
}

.stain {
  position: absolute;
  background: black;
  border-radius: 50%;
  opacity: 0.85;
  pointer-events: none;
  z-index: 10;
}
</style>

<style scoped>
/* Custom styles */
.Bloemenwinkel-homepage {
  font-family: "Arial", sans-serif;
}

/* Hide scrollbar for the carousels */
.flex.overflow-x-auto {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

.flex.overflow-x-auto::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}
</style>
