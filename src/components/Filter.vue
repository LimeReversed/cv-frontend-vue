<script setup lang="ts">
import DropDownFilter from './DropDownFilter.vue'
import { experienceStore } from '../stores/experience'

const store = experienceStore()
</script>

<template>
  <div class="filter-container">
    <DropDownFilter
      v-for="tagKeyValue in store.tagsByCategory"
      :key="tagKeyValue[0]"
      :name="tagKeyValue[0]"
      :tags="tagKeyValue[1]"
    />
  </div>
</template>

<style scoped>
@import '../assets/main.css';

.filter-container {
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.drop-down-button {
  margin: 20px 30px;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.7);
  height: 35px;
  width: 200px;
}
</style>
