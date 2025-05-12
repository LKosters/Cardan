<template>
    <div
        class="absolute inset-0 bg-black pointer-events-none"
        :style="`
          mask: radial-gradient(circle at center, transparent ${100 * (100 - intensity) / 50}px, black ${220 * (100 - intensity) / 50}px);
          webkitmask: radial-gradient(
            circle at center,
            transparent ${100 * (100 - intensity) / 50}px,
            black ${220 * (100 - intensity) / 50}px
          );
        `"
      ></div>
</template>

<script lang="ts" setup>
</script>
