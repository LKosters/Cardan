<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="transform translate-y-2 opacity-0"
    enter-to-class="transform translate-y-0 opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="transform translate-y-0 opacity-100"
    leave-to-class="transform translate-y-2 opacity-0"
  >
    <div
      v-if="isVisible"
      class="text-black fixed bottom-24 right-5 bg-secondary-alt px-4 py-2 rounded-lg shadow-lg z-50"
    >
      {{ message }}
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { useToast } from "~/composables/useToast";

const { isVisible, message } = useToast();
</script>
