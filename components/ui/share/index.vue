<template>
  <div
    class="group flex items-center p-5 bg-secondary-alt rounded-full shadow-lg fixed bottom-14 right-14 cursor-pointer hover:bg-secondary duration-300"
    @click="copyUrl"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-6 group-hover:stroke-white"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
      />
    </svg>
  </div>
  <UiToast />
</template>

<script lang="ts" setup>
const { showToast } = useToast();

const copyUrl = () => {
  navigator.clipboard.writeText(window.location.href);
  showToast("Link gekopieerd");
};
</script>
