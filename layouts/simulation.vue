<template>
  <div class="min-h-screen w-screen overflow-x-hidden relative">
    <slot />
    <UiNav />
    <div class="hidden lg:block">
      <UiShare />
    </div>
  </div>
</template>

<script lang="ts" setup></script>
