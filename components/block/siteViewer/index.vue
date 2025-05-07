<template>
  <div :class="filter" style="position: relative; background: black;">
    <iframe
      :src="url"
      title="Website Preview"
      class="h-screen w-screen"
      sandbox="allow-same-origin allow-scripts"
    />
    <div
    v-if="filter === 'choker'"
    class="absolute inset-0 bg-black pointer-events-none"
    style="
      mask: radial-gradient(circle at center, transparent 100px, black 220px);
      WebkitMask: radial-gradient(circle at center, transparent 100px, black 220px);
    "
                  ></div>
    <div v-if="filter === 'stains'">
      <div class="stain" style="top: 35%; left: 35%; width: 220px; height: 220px;"></div>
      <div class="stain" style="top: 60%; left: 60%; width: 200px; height: 200px;"></div>
      <div class="stain" style="top: 40%; left: 65%; width: 190px; height: 190px;"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  url: {
    type: String,
    required: true,
  },
  filter: {
    type: String,
    required: false,
  },
});
</script>

<style scoped>
.pink-blue {
  filter: hue-rotate(180deg) saturate(1.5);
}

.blue-yellow {
  filter: hue-rotate(90deg) saturate(1.2);
}

.choker {
}

.blurred {
  filter: blur(2px);
}

.stains {
  filter: contrast(0.8) brightness(1.2);
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