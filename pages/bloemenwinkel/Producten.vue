<template>
  <BlockFlowerStore
    page="products"
    :filter="route.query.filter"
    :intensity="route.query.intensity"
  />
</template>

<script setup lang="ts">
definePageMeta({
  layout: "simulation",
});

useHead({
  title: "Bloemenwinkel producten | Cardan",
  meta: [
    {
      name: "description",
      content: "Ervaar hoe het is om met een beperking te leven",
    },
  ],
});

const route = useRoute();
</script>
