  <!-- pages/index.vue -->
<template>
  <main>
    <!-- Hero Section -->
    <section class="py-16 container">
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 class="text-3xl md:text-4xl font-bold mb-4">
            {{ title }}
          </h1>
          <p class="text-gray-700 mb-6">
            {{ description }}
          </p>
        </div>
        <div class="relative h-64 md:h-80">
          <img
            :src="image"
            :alt="title"
            class="object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: String,
  description: String,
  image: String,
});
</script>
