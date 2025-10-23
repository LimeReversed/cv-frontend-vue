<script setup lang="ts">
import DropDownFilter from './DropDownFilter.vue'
import { experienceStore } from '../stores/experience'
import { ref, type Ref } from 'vue'
import Modal from './Modal.vue'

const store = experienceStore()

const show: Ref<boolean> = ref(false)
</script>

<template>
  <div class="filter-container">
    <div class="filter-button" @click="show = true">
      <p class="category-name">Filtrera</p>
      <p class="arrow"></p>
    </div>
    <div v-if="show" class="dropdown-container">
      <Modal title="Filtrera" @close="show = false">
        <DropDownFilter
          v-for="tagKeyValue in store.tagsByCategory"
          :key="tagKeyValue[0]"
          :name="tagKeyValue[0]"
          :tags="tagKeyValue[1]"
        />
      </Modal>
    </div>
  </div>

  <div class="filter-container-desktop">
    <DropDownFilter
      v-for="tagKeyValue in store.tagsByCategory"
      :key="tagKeyValue[0]"
      :name="tagKeyValue[0]"
      :tags="tagKeyValue[1]"
    />
  </div>
</template>

<style scoped>
@import '@css/main.css';

.filter-container-desktop {
  display: none;
}

.filter-container {
  display: flex;
}

.filter-container,
.filter-container-desktop {
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  border-bottom: solid 1px gainsboro;
}

.filter-button {
  background-color: white;
}

@media (min-width: 1024px) {
  .filter-container-desktop {
    flex-wrap: nowrap;
    display: flex;
  }

  .filter-container {
    display: none;
  }
}
</style>
