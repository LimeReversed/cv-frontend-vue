<script setup lang="ts">
import type Tag from '@/classes/tag'
import { onMounted, type Ref, ref } from 'vue'
import { experienceStore } from '../stores/experience'

const props = defineProps<{
  name: string
  tags: Tag[]
}>()

const show: Ref<boolean> = ref(false)
const store = experienceStore()
</script>

<template>
  <div class="drop-down-button-container" @mouseover="show = true" @mouseleave="show = false">
    <div class="drop-down-button" @click="show = !show">
      <p class="category-name">{{ props.name }}</p>
      <p v-if="show">▲</p>
      <p v-if="!show">▼</p>
    </div>
    <transition name="slide-fade">
      <div v-if="show" class="drop-down-container">
        <div class="drop-down">
          <div v-for="tag in tags" :key="tag.name" class="item">
            <p>{{ tag.name }}</p>
            <label class="container">
              <input
                type="checkbox"
                :checked="store.tagsShown.has(tag)"
                @click="store.tagsShown.has(tag) ? store.uncheckTag(tag) : store.checkTag(tag)"
              />
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
@import '../assets/main.css';

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

.drop-down-button-container {
  --button-height: 35px;
  --border-radius: 15px;
  height: 100%;
  margin: 20px 10px;
  border-radius: var(--border-radius);
  background-color: rgba(255, 255, 255, 0.7);
  position: relative;
  cursor: pointer;
}

.drop-down-button {
  width: 100%;
  height: var(--button-height);
  padding: 0px 15px;
  display: inline-flex;
  justify-content: center;
}

.drop-down-button p {
  margin-left: 20px;
  line-height: var(--button-height);
  font-weight: bold;
  color: rgba(73, 59, 74, 0.7);
  width: 20%;
  text-align: center;
}

.drop-down-button .category-name {
  color: rgba(73, 59, 74, 0.9);
  width: 80%;
}

input[type='checkbox'] {
  width: 20px;
  height: 20px;
}

.drop-down-container {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.drop-down {
  width: 200px;
  background-color: rgba(255, 255, 255, 0.95);
  border: solid 0.5px gainsboro;
  border-radius: var(--border-radius);
  margin-top: calc(var(--button-height) + 10px);
}

.item {
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 25px;
}

.item p {
  font-weight: normal;
}

/* Customize the label (the container) */
.container {
  position: relative;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  height: 25px;
  width: 25px;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border: solid 1px gainsboro;
  border-radius: 5px;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #f7e7ff;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #9521f3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
