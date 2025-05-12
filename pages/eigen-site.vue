<template>
  <div>
    <BlockSiteViewer
      :url="website"
      :filter="route.query.filter"
      :intensity="route.query.intensity"
    />
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const website = route.query.website as string;

if (!website) {
  navigateTo("/kies-website");
}

definePageMeta({
  layout: "simulation",
});

useHead({
  title: "Eigen site | Cardan",
  meta: [{ name: "description", content: "Eigen site | Cardan" }],
});
</script>
