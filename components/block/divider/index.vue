<template>
  <div :class="reverse ? 'rotate-180' : ''" class="relative h-16 md:h-24">
    <svg
      class="w-[300px] md:w-[557px] h-[53px] md:h-[98px]"
      viewBox="0 0 557 98"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0.0603027H470.976C477.645 0.0603027 483.052 5.46705 483.052 12.1366V27.8358C483.052 34.5054 477.645 39.9121 470.976 39.9121H0V0.0603027Z"
        fill="#DEECE2"
      />
      <path
        d="M477.553 2.21982L551.708 63.9253C556.834 68.1913 557.532 75.8057 553.266 80.9325L543.224 93.0002C538.958 98.127 531.344 98.8247 526.217 94.5586L452.062 32.8532L477.553 2.21982Z"
        fill="#DEECE2"
      />
    </svg>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  reverse?: boolean;
}>();
</script>
