<template>
  <div class="fixed top-1/2 w-[18vw] h-[18vw] z-10 right-5 pointer-events-none flex justify-center items-center">
    <img src="/blob.png" alt="Icoon blob ontdek jezelf" class="w-full h-full object-contain" />
    <div class="absolute flex flex-col items-center justify-center text-center p-4 mr-2 pointer-events-auto">
      <div class="font-bold text-white blob-text-size">Ontdek jezelf</div>
      <div class="text-white mb-2 blob-text-size-small">Ervaar een website als een persoon met een beperking.</div>
      <a :href="linkUrl" target="_blank" rel="noopener noreferrer" 
          class="bg-white text-white p-2 rounded-full no-underline transition-all duration-200 
                hover:bg-gray-200 hover:scale-105 blob-button-size">
        <IconArrow class="fill-secondary"/>
      </a>
    </div>
  </div>
</template>

<script setup>
import IconArrow from '~/components/icon/arrow/index.vue';

defineProps({
  linkUrl: {
    type: String,
    default: 'https://example.com'
  }
});
</script>

<style scoped>
.blob-text-size {
  font-size: clamp(1rem, 1.5vw, 1.5rem);
}

.blob-text-size-small {
  font-size: clamp(0.625rem, 1vw, 0.875rem);
}

.blob-button-size {
  font-size: clamp(0.75rem, 1vw, 1rem);
}
</style> 