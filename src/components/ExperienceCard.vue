<script setup lang="ts">
import { type ExperienceResponseItem } from '@/classes/experience'
import { computed } from 'vue'
import Tag from './Tag.vue'
import type TagType from '@/classes/tag'

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
    <p class="tldr">{{ experience.tldr }}</p>
    <div class="tags">
      <div class="tag" v-for="tag in sortedTags(experience.tags)" :key="tag.id">
        <Tag :tag="tag" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '@css/main.css';

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
  padding: 0px 40px 10px 40px;
  border-bottom: solid 1px rgb(216, 216, 216);
  margin-bottom: 20px;
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
}

.project-image {
  max-height: 300px;
}

.tldr {
  text-align: justify;
}
</style>
