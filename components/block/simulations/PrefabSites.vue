<template>
  <section class="container py-16">
    <h2 class="text-2xl font-bold mb-2">Of pak één van onze prefab websites</h2>
    <p class="mb-6 text-gray-700">
      Hieronder staan website opties om in te laden voor de simulatie. Dit zijn
      fictieve websites speciaal ontworpen voor onze simulaties.
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(site, index) in prefabSites"
        :key="index"
        class="border rounded-md overflow-hidden shadow-sm hover:shadow-md transition"
      >
        <div class="h-48 bg-gray-200 relative overflow-hidden">
          <img
            :src="site.imageUrl"
            :alt="site.title"
            class="w-full h-full object-cover"
          />
          <div
            v-if="site.showOverlay"
            class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center"
          >
            <h3 class="text-white text-2xl font-serif">{{ site.title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const prefabSites = ref([
  {
    title: 'maison feature',
    imageUrl: '/placeholder.svg?height=200&width=400',
    showOverlay: true
  },
  {
    title: 'Poinsettia',
    imageUrl: '/placeholder.svg?height=200&width=400',
    showOverlay: false
  }
])
</script>
