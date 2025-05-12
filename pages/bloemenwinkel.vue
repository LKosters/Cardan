<template>
  <BlockFlowerStore
    :filter="route.query.filter"
    :intensity="route.query.intensity"
  />
</template>

<script setup lang="ts">
definePageMeta({
  layout: "simulation",
});

useHead({
  title: "Bloemenwinkel | Cardan",
  meta: [
    {
      name: "description",
      content: "Ervaar hoe het is om met een beperking te leven",
    },
  ],
});

const route = useRoute();
</script>

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
