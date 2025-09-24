<script setup lang="ts">
import Experience from '@/classes/experience'
import { computed } from 'vue'
import Tag from './Tag.vue'

const props = defineProps<{
  experience: Experience
}>()

// const expanded = ref(true)
// const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
// https://stackoverflow.com/questions/3552461/how-do-i-format-a-date-in-javascript
// Why can't I use options from here?
// Have options member in experience-class to controll if month should show?
// Visa mer behöver vara en knapp, med pil ner.

const period = computed(function () {
  return `${props.experience.from.toLocaleDateString('sv-SE', { year: 'numeric', month: 'long' })} - ${props.experience.to?.toLocaleDateString('sv-SE', { year: 'numeric', month: 'long' })}`
})
</script>

<template>
  <div class="experience-card-container">
    <h2 class="experience-card-title">{{ experience.title }}</h2>
    <div class="details">
      <p style="padding-right: 15px">{{ experience.orgName }}</p>
      <p>
        {{ period }}
      </p>
    </div>
    <p>{{ experience.tldr }}</p>
    <div class="tags">
      <div class="tag" v-for="tag in experience.tags" :key="tag.name">
        <Tag :tag="tag" />
      </div>
    </div>
    <!-- <div v-if="expanded">
      <p>{{ experience.description }}</p>
      <h3>Project</h3>
      <div v-for="project in experience.projects" :key="project.name">
        <h4>{{ project.name }}</h4>
        <p>{{ project.description }}</p>
        <img
          v-for="imagePath in project.imagepaths"
          :key="imagePath"
          :src="`/src/assets/images/${imagePath}`"
          class="project-image"
        />
      </div>
    </div> -->
  </div>
</template>

<style scoped>
@import '../assets/main.css';

.tags {
  margin: 10px 0px 20px 0px;
}
.tag {
  display: inline-flex;
  flex-direction: row;
}

.experience-card-container {
  position: relative;
  width: 100%;
  max-width: 800px;
  /* margin-bottom: 0px; */
  /* border-bottom: 1px solid gainsboro; */
  padding: 0px 40px 10px 40px;
}

/* .container::after {
  content: '';
  position: absolute;
  width: 40%;
  height: 1px;
  background-color: gainsboro;
  left: 25%;
  bottom: 0px;
} */

/* .border {
  margin: auto;
  width: 100px;
  border-bottom: 1px solid gainsboro;
} */

.details {
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  font-weight: bold;
}

.experience-card-title {
  color: var(--text-purple);
}

.project-image {
  max-height: 300px;
}
</style>
