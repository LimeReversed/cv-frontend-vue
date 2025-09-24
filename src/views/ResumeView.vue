<script setup lang="ts">
import ExperienceCard from '@/components/ExperienceCard.vue'
import { jobExperience, education } from '@/objects/experience'
import { ref } from 'vue'

const experience = ref(jobExperience)
const educationRef = ref(education)
</script>

<template>
  <main>
    <h1>Erfarenheter</h1>
    <ExperienceCard v-for="ex in experience" :key="ex.title" :experience="ex" />
    <h1>Utbildning</h1>
    <ExperienceCard v-for="ed in educationRef" :key="ed.title" :experience="ed" />
  </main>
</template>

<style scoped>
main {
  width: 100%;
  padding: 75px 0px 0px 0px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  /* background-image: url('/src/assets/images/white-brick-wall.jpg'); */
  background-color: rgba(255, 255, 255, 0.8);
  background-blend-mode: lighten;
}

h1 {
  padding-bottom: 20px;
}
</style>
