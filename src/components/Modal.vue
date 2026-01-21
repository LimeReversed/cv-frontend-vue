<script setup lang="ts"></script>

<template>
  <div class="modal">
    <button class="x-button-container" @click="$emit('close')">
      <p>X</p>
    </button>
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

.x-button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: white;
  border-radius: 5px;
  border: black 1px solid;
  position: fixed;
  top: 5px;
  right: 5px;
  z-index: 9999;
}

.x-button-container {
  cursor: pointer;
  padding: 20px 30px;
}

.title-container p {
  font-size: x-large;
}

.x-button-container:hover {
  background-color: rgb(142, 0, 0);
  color: white;
}

.x-button-container:active {
  background-color: rgb(142, 0, 0);
  color: white;
}

.x-button-container p {
  font-size: x-large;
}

.modal {
  position: fixed;
  z-index: 9998;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
}
</style>
