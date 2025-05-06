<template>
  <section class="py-16">
    <div class="container">
      <h2 class="text-3xl font-bold mb-4">Soorten beperkingen.</h2>
      <p class="text-gray-700 mb-12 max-w-3xl">
        Inzicht in verschillende beperkingen helpt ons inclusieve oplossingen te
        ontwikkelen. Door deze beperkingen te begrijpen, kunnen we een
        toegankelijkere omgeving creëren waarin iedereen gelijkwaardig kan
        participeren, ongeacht hun uitdagingen.
      </p>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        <BlockLimitationsCard
          v-for="(limitation, index) in limitations"
          :key="index"
          v-bind="limitation"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const limitations = [
  {
    title: "Visuele beperkingen",
    description:
      "Ervaar verschillende visuele beperkingen, waaronder kleurenblindheid, kokervisie en verminderd zicht.",
    image: "/limitations/image1.png",
  },
  {
    title: "Auditieve beperkingen",
    description:
      "Leer over gehoorverlies, doofheid en andere auditieve beperkingen die de communicatie kunnen beïnvloeden.",
    image: "/limitations/image2.png",
  },
  {
    title: "Cognitieve beperkingen",
    description:
      "Begrijp hoe aandoeningen zoals ADHD, autisme en dementie de informatieverwerking kunnen beïnvloeden.",
    image: "/limitations/image3.png",
  },
  {
    title: "Motorische beperkingen",
    description:
      "Ontdek hoe mensen met mobiliteitsproblemen en fysieke beperkingen navigeren en interacteren met hun omgeving.",
    image: "/limitations/image4.png",
  },
  {
    title: "Lees- en leerstoornissen",
    description:
      "Verken uitdagingen zoals dyslexie en dyscalculie, en hoe deze het leren en verwerken van informatie beïnvloeden.",
    image: "/limitations/image5.png",
  },
];
</script>
