<template>
  <section class="container py-20">
    <div class="md:w-[50%]">
      <h1 class="text-3xl font-bold mb-2">
        Kies uw eigen website om in te laden als simulatie
      </h1>
      <p class="mb-6 text-gray-700">
        Met deze optie start de simulatie op uw eigen website, om de meest
        realistische ervaring te creëren tijdens de simulatie. Vul hieronder de
        website URL in.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 max-w-lg">
        <input
          v-model="websiteUrl"
          class="md:w-[300px]"
          type="text"
          placeholder="Website URL..."
        />
        <button @click="visitWebsite" class="btn-primary">
          Bezoek website
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const websiteUrl = ref("");

function visitWebsite() {
  if (websiteUrl.value) {
    // check if the url is valid
    const url = new URL(websiteUrl.value);
    if (url.protocol) {
      navigateTo(`/eigen-site?website=${websiteUrl.value}`);
    }
  }
}
</script>
