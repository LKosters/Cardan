<template>
  <div class="relative">
    <StickyBlob/>
    <section class="hero py-16">
      <div
        class="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8"
      >
        <div class="md:w-1/2 space-y-6">
          <h1 class="text-4xl font-bold text-gray-800">
            Jouw partners in<br />
            digitale toegankelijkheid
          </h1>
          <p class="text-gray-700">
            Samen met jou maken wij de hele wereld digitaal toegankelijk en
            inclusief. Deze branches helpen wij met het borgen van digitale
            toegankelijkheid:
          </p>

          <div class="space-y-4 mt-6">
            <div class="flex items-center gap-2">
              <IconBuilding class="fill-secondary" />
              <span class="underline underline-offset-4">Overheid</span>
            </div>
            <div class="flex items-center gap-2">
              <IconEarth class="fill-secondary" />
              <span class="underline underline-offset-4">Bedrijven</span>
            </div>
            <div class="flex items-center gap-2">
              <IconCode class="fill-secondary" />
              <span class="underline underline-offset-4">Leveranciers</span>
            </div>
          </div>

          <button
            class="bg-[#0a8a4a] text-white px-6 py-3 rounded hover:bg-[#077a40] transition-colors"
          >
            Word nu digitaal toegankelijk
          </button>
        </div>

        <div class="md:w-1/2">
          <img
            src="/cardanners_1.avif"
            alt="Cardan Team"
            class="w-full h-full object-cover rounded-4xl"
          />
        </div>
      </div>
    </section>

    <!--Banner -->
    <div class="bg-secondary-alt py-4 px-4">
      <div class="container">
        <div
          class="mx-auto flex flex-wrap justify-center md:justify-between gap-4 text-sm"
        >
          <div class="flex items-center gap-2">
            <IconCheck class="h-4 w-4 text-secondary" />
            <span>WCAG 2.2 onderzoeken</span>
          </div>
          <div class="flex items-center gap-2">
            <IconCheck class="h-4 w-4 text-secondary" />
            <span
              >Rapport voor <strong>toegankelijkheidsverklaring</strong></span
            >
          </div>
          <div class="flex items-center gap-2">
            <IconCheck class="h-4 w-4 text-secondary" />
            <span>Ga voor <strong>Waarmerk drempelvrij.nl</strong></span>
          </div>
          <div class="flex items-center gap-2">
            <IconCheck class="h-4 w-4 text-secondary" />
            <span
              >Alle hulp bij de <strong>European Acessibility Act</strong></span
            >
          </div>
        </div>
      </div>
    </div>
    <!-- Help Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">
          Hoe kunnen wij jou helpen?
        </h2>
        <!-- Content would go here -->
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import StickyBlob from "~/components/StickyBlob.vue";
</script>
