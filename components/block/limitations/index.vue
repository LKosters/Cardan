<template>
    <section class="py-16 px-4">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl font-bold mb-4">Soorten beperkingen.</h2>
        <p class="text-gray-700 mb-12 max-w-3xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum est et quam vestibulum, eget laculis
          magna feugiat. Sed vitae ante nec nulla faucibus malesuada eget nec quam. Donec arcu tellus, mattis a orci
          nec, facilisis dapibus nulla.
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
import { defineComponent, h } from 'vue'

interface LimitationProps {
  title: string
  description: string
  image: string
}

// Define the limitations data
const limitations = [
  {
    title: 'Visuele beperkingen',
    description: 'Een lichamelijke beperking betreft het functioneren van het lichaam.',
    image: '/limitations/image1.png'
  },
  {
    title: 'Zintuiglijke beperking',
    description: 'Een zintuiglijke beperking betreft het functioneren van de zintuigen.',
    image: '/limitations/image2.png'
  },
  {
    title: 'Verstandelijke beperking',
    description: 'Een verstandelijke beperking betreft het cognitief functioneren.',
    image: '/limitations/image3.png'
  },
  {
    title: 'Psychische beperking',
    description: 'Een psychische beperking betreft het psychisch functioneren.',
    image: '/limitations/image4.png'
  },
  {
    title: 'Meervoudige beperking',
    description: 'Een meervoudige beperking is een combinatie van verschillende beperkingen.',
    image: '/limitations/image5.png'
  }
]
</script>
