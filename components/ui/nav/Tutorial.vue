<template>
  <div
    v-if="step < tutorial.length"
    class="gap-2 absolute top-0 left-0 w-max h-max bg-white rounded-lg p-4 md:-translate-x-[calc(100%+50px)] -translate-y-[calc(100%+150px)] md:-translate-y-[calc(100%+50px)] max-w-[300px]"
  >
    <h2 v-if="step === 0" class="text-xl font-bold mb-2">Tutorial</h2>
    <h3 class="text-lg font-bold mb-2">{{ tutorial[step].title }}</h3>
    <p class="text-sm mb-2" v-if="tutorial[step].description">
      {{ tutorial[step].description }}
    </p>
    <div class="flex items-center gap-2">
      <div class="flex items-center gap-2">
        <div
          v-for="(urmom, index) in tutorial.length"
          :key="index"
          :class="{ '!bg-secondary': index === step }"
          class="size-4 bg-primary-alt rounded-full"
        ></div>
      </div>
      <button class="btn-primary ml-2 cursor-pointer text-sm" @click="invokeStep(step + 1)">
        Volgende
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(["step"]);
const step = ref(0);

const invokeStep = (value: number) => {
  step.value = value;
  emit("step", value);
};

const tutorial = ref([
  {
    title: "Kleurblindheid filters",
    description: "Kies een filter om de kleurblindheid te simuleren.",
  },
  {
    title: "Visuele beperkingen",
    description: "Kies een filter om de visuele beperkingen te simuleren.",
  },
  {
    title: "Terug naar home",
    description: "Klik op de home knop om terug te gaan naar de home pagina.",
  },
  {
    title: "Wissen",
    description: "Klik op de wissen knop om de filters te verwijderen.",
  },
  {
    title: "Intensiteit",
    description:
      "Kies een intensiteit om de filters te versterken of verzwakken.",
  },
]);
</script>
