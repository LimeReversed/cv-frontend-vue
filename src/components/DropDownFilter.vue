<script setup lang="ts">
import type Tag from '@/classes/tag'
import { experienceStore } from '../stores/experience'
import CheckBox from './CheckBox.vue'

const props = defineProps<{
  name: string
  tags: Tag[]
}>()

const emit = defineEmits(['click', 'mouseenter', 'mouseleave'])
const store = experienceStore()

const clickHandler = () => {
  emit('click')
}
</script>

<template>
  <div class="button-container">
    <div class="filter-button" @click="clickHandler">
      <p class="category-name">{{ props.name }}</p>
      <p class="arrow"></p>
    </div>
    <div v-if="tags.length > 0" class="drop-down-container">
      <div class="drop-down">
        <div v-for="tag in tags" :key="tag.id" class="item">
          <p>{{ tag.name }}</p>
          <CheckBox
            :checked="store.tagsToShow.has(tag.id)"
            @click="store.tagsToShow.has(tag.id) ? store.uncheckTag(tag) : store.checkTag(tag)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '@css/main.css';

.button-container {
  --button-height: 35px;
  --border-radius: 15px;
  background-color: rgba(255, 255, 255, 1);
  position: relative;
  cursor: pointer;
}

.drop-down {
  width: 100%;
  background-color: rgba(255, 255, 255, 1);
  margin: 0px;
}

.item {
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 35px;
}

.item:nth-child(even) {
  background-color: rgb(244, 244, 244);
}

.item p {
  font-weight: normal;
}

/* Animation */
@keyframes showDropdown {
  from {
    top: 15px;
    opacity: 0;
  }
  to {
    top: 30px;
    opacity: 1;
  }
}

@keyframes hideDropdown {
  from {
    top: 30px;
    opacity: 1;
  }
  to {
    top: 15px;
    opacity: 0;
  }
}

@media (min-width: 1024px) {
  .button-container .drop-down-container {
    visibility: hidden;
    position: absolute;
    top: 30px;
    left: 0px;
    width: 225px;
    animation-name: hideDropdown;
    animation-duration: 0.3s;
    transition: all 0.3s ease;
  }

  .button-container:hover .drop-down-container {
    visibility: visible;
    animation-name: showDropdown;
    animation-duration: 0.3s;
  }

  .button-container {
    width: unset;
    height: 100%;
    z-index: 999;
  }

  .drop-down {
    background-color: rgba(255, 255, 255, 0.95);
    border: solid 0.5px gainsboro;
    border-radius: var(--border-radius);
    margin-top: calc(var(--button-height) + 10px);
    padding: 10px 0px;
  }

  .item:nth-child(even) {
    background-color: unset;
  }

  .item:first-child {
    padding: 10px 35px;
  }

  .item:last-child {
    padding: 10px 35px;
  }
}
</style>
