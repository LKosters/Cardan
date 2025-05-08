<template>
  <div
    :id="id"
    role="tooltip"
    class="bg-white rounded-[10px] px-[10px] py-[5px] absolute w-max translate-x-[30px] -translate-y-[50%]"
  >
    {{ text }}
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  text: String,
  id: {
    type: String,
    required: true,
  },
});
</script>
