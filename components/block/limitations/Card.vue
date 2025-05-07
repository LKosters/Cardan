<template>
  <a
    :href="link"
    class="bg-secondary-alt rounded-lg overflow-hidden h-full flex flex-col"
  >
    <div class="relative h-48">
      <img :src="image" :alt="title" fill class="object-cover w-full h-full" />
    </div>
    <div class="p-4 flex-1 flex flex-col">
      <h3 class="font-bold text-lg mb-2 h-14 line-clamp-2 overflow-hidden">
        {{ title }}
      </h3>
      <p class="text-sm text-gray-700 flex-1">{{ description }}</p>
      <div class="mt-4">
        <button
          class="bg-secondary text-white rounded-full w-8 h-8 flex items-center justify-center"
        >
          <span class="sr-only">Meer informatie over {{ title }}</span
          ><IconArrow :size="16" />
        </button>
      </div>
    </div>
  </a>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: String,
  description: String,
  image: String,
  link: String,
});
</script>
