<template>
  <section class="container pb-20">
    <div class="md:w-[50%]">
      <h2 class="text-2xl font-bold mb-2">
        Of pak één van onze prefab websites
      </h2>
      <p class="mb-6 text-gray-700">
        Hieronder staan website opties om in te laden voor de simulatie. Dit
        zijn fictieve websites speciaal ontworpen voor onze simulaties.
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <a
        v-for="(site, index) in prefabSites"
        :key="index"
        :href="site.link"
        class="rounded-md overflow-hidden shadow-lg hover:shadow-md transition group"
      >
        <div class="h-48 bg-gray-200 relative overflow-hidden">
          <img
            :src="site.imageUrl"
            :alt="site.title"
            class="w-full h-full object-cover group-hover:scale-110 duration-300 transition"
          />
          <div
            v-if="site.showOverlay"
            class="absolute inset-0 bg-black/0 flex items-center justify-center"
          >
            <h3 class="text-white text-3xl font-serif">{{ site.title }}</h3>
          </div>
        </div>
      </a>
    </div>
  </section>
</template>

<script lang="ts" setup>
const prefabSites = ref([
  {
    title: "Bloemenwinkel",
    imageUrl: "/flowers/thumbnail.jpg",
    showOverlay: true,
    link: "/bloemenwinkel",
  },
]);
</script>
