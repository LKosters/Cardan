<template>
  <div :class="filter">
    <BlockFlowerStoreHome v-if="page === 'home'" />
    <BlockFlowerStoreProducts v-if="page === 'products'" />
    <div
      v-if="filter === 'choker'"
      class="fixed inset-0 bg-black pointer-events-none"
      :style="`
          mask: radial-gradient(circle at center, transparent ${(100 * (100 - intensity)) / 50}px, black ${(220 * (100 - intensity)) / 50}px);
          webkitmask: radial-gradient(
            circle at center,
            transparent ${(100 * (100 - intensity)) / 50}px,
            black ${(220 * (100 - intensity)) / 50}px
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

<script lang="ts" setup>
const props = defineProps({
  page: {
    type: String,
    required: false,
    default: "home",
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
  filter: hue-rotate(calc(180deg * v-bind(intensity) / 50))
    saturate(calc(1.5 * v-bind(intensity) / 50));
}

.blue-yellow {
  filter: hue-rotate(calc(90deg * v-bind(intensity) / 50))
    saturate(calc(1.2 * v-bind(intensity) / 50));
}

.choker {
}

.blurred {
  filter: blur(calc(2px * v-bind(intensity) / 50));
}

.stains {
  filter: contrast(calc(0.8 * v-bind(intensity) / 50))
    brightness(calc(1.2 * v-bind(intensity) / 50));
}

.stain {
  position: fixed;
  background: black;
  border-radius: 50%;
  opacity: 0.85;
  pointer-events: none;
  z-index: 10;
}
</style>
