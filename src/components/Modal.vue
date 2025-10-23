<script setup lang="ts">
const props = defineProps<{
  title: string
}>()
</script>

<template>
  <div class="modal">
    <div class="modal-header">
      <div class="title-container">
        <p>{{ props.title }}</p>
      </div>
      <button class="x-button-container" @click="$emit('close')">
        <p>X</p>
      </button>
    </div>
    <slot></slot>
  </div>
</template>

<style>
/* Removes the scrollbar for the main site, leaving room for scrolling the modal only */
#app:has(.modal) {
  overflow: hidden;
  height: 100vh;
}
</style>

<style scoped>
@import '@css/main.css';

.modal-header {
  height: 50px;
  width: 100%;
  display: flex;
  background-color: white;
}

.title-container,
.x-button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: white;
}

.title-container {
  width: 90%;
}

.x-button-container {
  width: 10%;
  cursor: pointer;
  padding: 0px 20px;
}

.title-container p {
  font-size: x-large;
}

.x-button-container:hover {
  background-color: black;
  color: white;
}

.x-button-container:active {
  background-color: black;
  color: white;
}

.x-button-container p {
  font-size: x-large;
}

.modal {
  position: fixed;
  z-index: 9999;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  overflow: auto;
}
</style>
