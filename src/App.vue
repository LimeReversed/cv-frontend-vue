<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { experienceStore } from './stores/experience'

onMounted(() => {
  const store = experienceStore()
  store.loadAll()
})
</script>
<template>
  <div class="app-container">
    <header class="header"></header>
    <div class="bar">
      <div class="bar-left">
        <img src="/src/assets/images/pfp.png" id="profile-picture" />
        <p>Emil Rundberg</p>
      </div>
      <div class="menu">
        <div class="menu-item">
          <p>Home</p>
        </div>
        <div class="menu-item">
          <p>Design</p>
        </div>
        <div class="menu-item">
          <p>Guest Book</p>
        </div>
      </div>
    </div>

    <RouterView />
  </div>
</template>

<style scoped>
@import '@css/main.css';

.header {
  background-image: url('/src/assets/images/Hong Kong.webp');
  background-position: center;
  background-size: cover;
  height: 400px;
  width: 100%;
}

.bar {
  --bar-height: 100px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  backdrop-filter: blur(20px);
  background: rgba(94, 89, 99, 0.5);
  position: sticky;
  margin-top: calc(var(--bar-height) * -1);
  top: 0px;
  border-top: 1px solid var(--color-bar-border);
  border-bottom: 1px solid var(--color-bar-border);
  z-index: 1000;
  height: var(--bar-height);
}

.bar-left {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.bar-left p {
  font-size: xx-large;
  color: white;
}

#profile-picture {
  height: calc(var(--bar-height) - 20px);
  margin: 10px 30px 10px 10px;
  border: 5px solid white;
  border-radius: 50%;
}

.menu {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu-item {
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 15px;
  margin-right: 30px;
  font-weight: bold;
  cursor: default;
}

.menu-item:first-child {
  cursor: pointer;
}

.menu-item p {
  color: rgb(163, 163, 163);
}

.menu-item:first-child p {
  color: rgba(73, 59, 74, 0.8);
}

@media (max-width: 750px) {
  .menu-item {
    display: none;
  }
}
</style>
