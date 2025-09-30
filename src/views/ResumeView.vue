<script setup lang="ts">
import ExperienceCard from '@/components/ExperienceCard.vue'

import { experienceStore } from '../stores/experience'

const store = experienceStore()
</script>

<template>
  <main>
    <h1>Erfarenheter</h1>
    <ExperienceCard v-for="ex in store.jobs" :key="ex.title" :experience="ex" />
    <h1>Utbildning</h1>
    <ExperienceCard v-for="ed in store.education" :key="ed.title" :experience="ed" />
  </main>
</template>

<style scoped>
main {
  width: 100%;
  padding: 75px 0px 0px 0px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  background-blend-mode: lighten;
}

h1 {
  padding-bottom: 20px;
}
</style>
