<template>
  <BlockFlowerStore
    page="home"
    :filter="route.query.filter"
    :intensity="route.query.intensity"
  />
</template>

<script setup lang="ts">
definePageMeta({
  layout: "simulation",
});

useHead({
  title: "Bloemenwinkel home | Cardan",
  meta: [
    {
      name: "description",
      content: "Ervaar hoe het is om met een beperking te leven",
    },
  ],
});

const route = useRoute();
</script>
