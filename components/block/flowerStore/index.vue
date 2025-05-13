<template>
  <div :class="filter">
    <BlockFlowerStoreHome v-if="page === 'home'" />
    <BlockFlowerStoreProducts v-if="page === 'products'" />
    <div
      v-if="filter === 'choker'"
      class="z-10 fixed inset-0 bg-black pointer-events-none"
      :style="`
          mask: radial-gradient(circle at center, transparent ${(100 * (100 - intensity)) / 50}px, black ${(220 * (100 - intensity)) / 50}px);
          webkitmask: radial-gradient(
            circle at center,
            transparent ${(100 * (100 - intensity)) / 50}px,
            black ${(220 * (100 - intensity)) / 50}px
          );
        `"
    ></div>
    <div class="fixed z-0 left-0 top-0 w-screen h-screen" v-if="filter === 'stains'">
      <div
        v-for="(stain, index) in stains"
        :key="index"
        class="stain z-0"
        :style="{
          top: `${stain.top}%`,
          left: `${stain.left}%`,
          width: `${stain.size}px`,
          height: `${stain.size}px`
        }"
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

const stains = computed(() => {
  const count = Math.floor(props.intensity / 10);
  return Array.from({ length: count }, () => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 50 + 150 + (props.intensity * 2)
  }));
});
</script>

<style scoped>
.pink-blue {
  filter: brightness(calc(1 - (0.1 * v-bind(intensity) / 100))) 
    contrast(calc(1 + (0.1 * v-bind(intensity) / 100))) 
    sepia(calc(0.2 * v-bind(intensity) / 100)) 
    saturate(calc(1 - (0.2 * v-bind(intensity) / 100))) 
    hue-rotate(calc(180deg * v-bind(intensity) / 100));
}

.blue-yellow {
  filter: brightness(calc(1 - (0.1 * v-bind(intensity) / 100))) 
    contrast(calc(1 + (0.1 * v-bind(intensity) / 100))) 
    sepia(calc(0.2 * v-bind(intensity) / 100)) 
    saturate(calc(1 - (0.2 * v-bind(intensity) / 100))) 
    hue-rotate(calc(90deg * v-bind(intensity) / 100));
}

.choker {
}

.blurred {
  filter: blur(calc(2px * v-bind(intensity) / 50));
}

.stains {
  filter: none;
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
