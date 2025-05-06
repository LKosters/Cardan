<template>
    <div class="bg-secondary-alt rounded-lg overflow-hidden h-full flex flex-col">
      <div class="relative h-48">
        <img 
          :src="image"
          :alt="title" 
          fill 
          class="object-cover w-full h-full" 
        />
      </div>
      <div class="p-4 flex-1 flex flex-col">
        <h3 class="font-bold text-lg mb-2">{{ title }}</h3>
        <p class="text-sm text-gray-700 flex-1">{{ description }}</p>
        <div class="mt-4">
          <button class="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
            <span class="sr-only">Meer informatie over {{ title }}</span>+
          </button>
        </div>
      </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    title: String,
    description: String,
    image: String
})
</script>
