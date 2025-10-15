<script setup lang="ts">
import ExperienceCard from '@/components/ExperienceCard.vue'
import { experienceStore } from '../stores/experience'
import TagComponent from '@/components/Tag.vue'

const store = experienceStore()
</script>

<template>
  <main>
    <div class="level-indicator-container">
      <div class="level-indicator-item">
        <div class="confident-indicator"></div>
        <p>Självsäker</p>
      </div>
      <div class="level-indicator-item">
        <div class="ok-indicator"></div>
        <p>OK</p>
      </div>
      <div class="level-indicator-item">
        <div class="beginner-indicator"></div>
        <p>Nybörjare</p>
      </div>
    </div>
    <div class="tag-list-container">
      <div v-for="tag in store.filteredTags" :key="tag.name" class="tag-list-item">
        <TagComponent :tag="tag" />
      </div>
    </div>
    <h1 v-if="store.filteredJobs.length > 0">Erfarenheter</h1>
    <ExperienceCard v-for="ex in store.filteredJobs" :key="ex.title" :experience="ex" />
    <h1 v-if="store.filteredEducation.length > 0">Utbildning</h1>
    <ExperienceCard v-for="ed in store.filteredEducation" :key="ed.title" :experience="ed" />
    <h1 v-if="store.filteredHobbies.length > 0">Hobbies</h1>
    <ExperienceCard v-for="hobby in store.filteredHobbies" :key="hobby.title" :experience="hobby" />
  </main>
</template>

<style scoped>
@import '../assets/main.css';

main {
  width: 100%;
  min-width: 450px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255);
}

.tag-list-container {
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  max-width: 1024px;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

.level-indicator-container {
  display: inline-flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  max-width: 1024px;
  padding: 50px 0px 25px 0px;
}

.level-indicator-item {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
}

.confident-indicator {
  background-color: var(--color-confident-tag);
  width: 200%;
  height: 35px;
  border-radius: 10px;
}

.ok-indicator {
  background-color: var(--color-ok-tag);
  width: 200%;
  height: 35px;
  margin: 0px 35px;
  border-radius: 10px;
}

.beginner-indicator {
  background-color: var(--color-beginner-tag);
  width: 200%;
  height: 35px;
  border-radius: 10px;
}

h1 {
  padding-bottom: 20px;
}
</style>
