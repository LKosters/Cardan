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
          class="md:w-[300px] input"
          type="text"
          placeholder="Website URL..."
        />
        <button @click="visitWebsite" class="btn-primary">
          Bezoek website
        </button>
      </div>
      <div v-if="recentUrls.length > 0" class="mt-4">
        <p class="text-sm text-gray-600 mb-2">Recente websites:</p>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="url in recentUrls"
            :key="url"
            @click="useRecentUrl(url)"
            class="text-left text-blue-600 hover:text-blue-800 btn-secondary w-max"
          >
            {{ url }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const websiteUrl = ref("");
const recentUrls = ref<string[]>([]);

onMounted(() => {
  const stored = localStorage.getItem("recentWebsiteUrls");
  if (stored) {
    recentUrls.value = JSON.parse(stored);
  }
});

function useRecentUrl(url: string) {
  websiteUrl.value = url;
}

function updateRecentUrls(url: string) {
  const urls = new Set([url, ...recentUrls.value]);
  recentUrls.value = Array.from(urls).slice(0, 3);
  localStorage.setItem("recentWebsiteUrls", JSON.stringify(recentUrls.value));
}

function visitWebsite() {
  if (websiteUrl.value) {
    const url = new URL(websiteUrl.value);
    if (url.protocol) {
      updateRecentUrls(websiteUrl.value);
      navigateTo(`/eigen-site?website=${websiteUrl.value}`);
    }
  }
}
</script>
