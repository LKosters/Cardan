<template>
  <div>
    <UiSlider v-model="sliderValue" />
    <BlockSimulations />
  </div>
</template>

<script lang="ts" setup>
const sliderValue = ref(50);
useHead({
  title: "Kies website | Cardan",
  meta: [
    {
      name: "description",
      content: "Ervaar hoe het is om met een beperking te leven",
    },
  ],
});
</script>
