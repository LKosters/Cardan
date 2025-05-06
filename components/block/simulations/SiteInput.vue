<template>
  <section class="container py-16">
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
        type="text"
        placeholder="Website URL..."
        class="flex-grow px-4 py-2 border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <button
        class="px-6 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-800 transition"
      >
        Bezoek website
      </button>
    </div>
  </section>
</template>

<script lang="ts" setup></script>
