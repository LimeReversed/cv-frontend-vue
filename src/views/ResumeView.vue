<script setup lang="ts">
import ExperienceCard from '@/components/ExperienceCard.vue'
import { experienceStore } from '../stores/experience'
import TagComponent from '@/components/Tag.vue'
import Filter from '@/components/Filter.vue'
import Modal from '@/components/Modal.vue'
import ExperienceCardFullscreen from '@/components/ExperienceCardFullscreen.vue'
import type { ExperienceResponseItem } from '@/classes/experience'
import { type Ref, ref } from 'vue'

const store = experienceStore()
const currentExperience: Ref<ExperienceResponseItem> = ref({} as ExperienceResponseItem)
const showFullscreen: Ref<boolean> = ref(false)

const cardClicked = (experience: ExperienceResponseItem) => {
  currentExperience.value = experience
  showFullscreen.value = true
}
</script>

<template>
  <main>
    <Modal v-if="showFullscreen" @close="showFullscreen = false">
      <ExperienceCardFullscreen :experience="currentExperience" />
    </Modal>
    <Filter />
    <div class="intro">
      <p>
        Jag byggde den här sidan med
        <a target="_blank" href="https://github.com/LimeReversed/cv-frontend-vue"
          >Vue som frontend</a
        >
        och
        <a target="_blank" href="https://github.com/LimeReversed/cv-backend-csharp"
          >C# som backend</a
        >. Klicka på länkarna för att komma till respektive repository.
      </p>
    </div>
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
      <div v-for="tag in store.filteredTags" :key="tag.id" class="tag-list-item">
        <TagComponent :tag="tag" />
      </div>
    </div>
    <h1 v-if="store.filteredJobs.length > 0">Erfarenheter</h1>
    <ExperienceCard
      v-for="ex in store.filteredJobs"
      :key="ex.title"
      :experience="ex"
      @click="cardClicked(ex)"
    />
    <h1 v-if="store.filteredEducation.length > 0">Utbildning</h1>
    <ExperienceCard
      v-for="ed in store.filteredEducation"
      :key="ed.title"
      :experience="ed"
      @click="cardClicked(ed)"
    />
    <h1 v-if="store.filteredHobbies.length > 0">Hobbies</h1>
    <ExperienceCard
      v-for="hobby in store.filteredHobbies"
      :key="hobby.title"
      :experience="hobby"
      @click="cardClicked(hobby)"
    />
  </main>
</template>

<style scoped>
@import '@css/main.css';

main {
  width: 100%;
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
  padding: 25px 0px 25px 0px;
}

.level-indicator-item {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
}

.confident-indicator {
  background-color: var(--color-confident-tag);
  width: 100%;
  height: 35px;
  border-radius: 10px;
}

.ok-indicator {
  background-color: var(--color-ok-tag);
  width: 100%;
  height: 35px;
  margin: 0px 35px;
  border-radius: 10px;
}

.beginner-indicator {
  background-color: var(--color-beginner-tag);
  width: 100%;
  height: 35px;
  border-radius: 10px;
}

.intro {
  padding: 50px 25px 25px 25px;
}
</style>
