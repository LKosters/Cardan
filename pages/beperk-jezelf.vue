<template>
  <div>
    <BlockTextImage
      title="Beperk jezelf."
      description="Ontdek hoe het is om met een beperking te leven. Door jezelf bewust te beperken, ervaar je de uitdagingen waar mensen met een handicap dagelijks mee te maken hebben. Deze ervaring opent je ogen voor de obstakels in onze samenleving en helpt je begrip te ontwikkelen voor mensen met een beperking."
      image="/images/beperk-jezelf.png"
    />
    <BlockDivider />
    <BlockLimitations />
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "Beperk jezelf | Cardan",
  meta: [
    {
      name: "description",
      content: "Ervaar hoe het is om met een beperking te leven",
    },
  ],
});
</script>
