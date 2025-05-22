<template>
  <section class="container pb-60 pt-20">
    <div class="md:w-[50%]">
      <h1 class="text-3xl font-bold mb-2">
        Kies uw eigen website om in te laden als simulatie
      </h1>
      <p class="mb-6 text-gray-700">
        Met deze optie start de simulatie op uw eigen website, om de meest
        realistische ervaring te creëren tijdens de simulatie. Vul hieronder de
        website URL in.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 w-full">
        <div class="flex flex-col">
          <input
            v-model="websiteUrl"
            @blur="validateUrl"
            class="md:w-[300px] input"
            :class="{ 'border-red-500': urlError }"
            type="text"
            placeholder="Website URL..."
          />
          <span v-if="urlError" class="text-red-500 text-sm mt-1">{{ urlError }}</span>
          <span v-else class="text-gray-500 text-sm mt-1">Voer een volledige URL in, bijvoorbeeld:<br>https://www.voorbeeld.nl</span>
        </div>
        <button @click="visitWebsite" class="btn-primary h-max">
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
const urlError = ref("");

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

function validateUrl() {
  if (!websiteUrl.value) {
    urlError.value = "Vul een website URL in";
    return false;
  }

  try {
    const url = new URL(websiteUrl.value);
    if (url.protocol !== "https:" && url.protocol !== "http:") {
      urlError.value = "URL moet beginnen met http:// of https://";
      return false;
    }
    urlError.value = "";
    return true;
  } catch {
    urlError.value = "Gebruik een geldige website URL";
    return false;
  }
}

function visitWebsite() {
  if (validateUrl()) {
    updateRecentUrls(websiteUrl.value);
    navigateTo(`/eigen-site?website=${websiteUrl.value}`);
  }
}
</script>
