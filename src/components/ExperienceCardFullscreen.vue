<script setup lang="ts">
import { type ExperienceResponseItem } from '@classes/experience'
import { computed } from 'vue'
import Tag from './Tag.vue'
import type TagType from '@classes/tag'

const props = defineProps<{
  experience: ExperienceResponseItem
}>()

// https://stackoverflow.com/questions/3552461/how-do-i-format-a-date-in-javascript
const period = computed(function () {
  const fromOptions: Intl.DateTimeFormatOptions =
    props.experience.from.length > 4 ? { year: 'numeric', month: 'long' } : { year: 'numeric' }
  const toOptions: Intl.DateTimeFormatOptions =
    props.experience.to.length > 4 ? { year: 'numeric', month: 'long' } : { year: 'numeric' }

  return `${new Date(props.experience.from).toLocaleDateString('sv-SE', fromOptions)} - ${new Date(props.experience.to)?.toLocaleDateString('sv-SE', toOptions)}`
})

const sortedTags = (tags: TagType[]) => {
  return tags.sort((a: TagType, b: TagType) => b.level - a.level)
}

const description = computed(function () {
  return props.experience.description.length !== 0
    ? props.experience.description
    : props.experience.tldr
})
</script>

<template>
  <div class="fullscreen-container">
    <div class="experience-card-container">
      <div class="experience-header">
        <h2 class="experience-card-title">{{ experience.title }}</h2>
      </div>
      <div class="details">
        <p style="padding-right: 15px">{{ experience.orgName }}</p>
        <p>
          {{ period }}
        </p>
      </div>
      <div class="tags">
        <div class="tag" v-for="tag in sortedTags(experience.tags)" :key="tag.id">
          <Tag :tag="tag" />
        </div>
      </div>
      <p class="description">{{ description }}</p>
      <div v-if="experience.projects.length > 0" class="projects-container">
        <h3 class="project-title">Projekt</h3>
        <div v-for="project in experience.projects" :key="project.id">
          <h4>{{ project.name }}</h4>
          <p class="description">{{ project.description }}</p>
          <div v-if="project.imagepaths.length > 0" class="project-images-container">
            <img
              v-for="imagePath in project.imagepaths"
              :src="`/src/assets/images/${imagePath.path}`"
              :key="imagePath.path"
              class="project-image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '@css/main.css';

.experience-header {
  background-color: white;
  width: 100%;
  padding-top: 75px;
}

.tags {
  margin: 10px 0px 20px 0px;
}
.tag {
  display: inline-flex;
  flex-direction: row;
}

.fullscreen-container {
  height: 100vh;
  width: 100%;
}

.experience-card-container {
  position: relative;
  width: 100%;
  max-width: 800px;
  height: 100%;
  padding: 0px 40px 10px 40px;
  border-bottom: solid 1px rgb(216, 216, 216);
  margin: auto;
  margin-bottom: 20px;
  background-color: rgba(255, 255, 255, 1);
  overflow: auto;
}

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
  font-size: x-large;
}

.project-image {
  max-height: 500px;
  max-width: 100%;
}

.description {
  text-align: justify;
  margin-bottom: 25px;
}

.project-images-container {
  margin-bottom: 25px;
}

.project-title {
  color: var(--text-purple);
}
</style>
