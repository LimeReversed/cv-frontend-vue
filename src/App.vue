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
    <div class="wrapper">
      <div class="blur"></div>
    </div>

    <RouterView />
  </div>
</template>

<style scoped>
.header {
  background-image: url('/src/assets/images/Hong Kong.webp');
  background-position: center;
  background-size: cover;
  height: 400px;
  width: 100%;
}

.wrapper {
  width: 100%;
  backdrop-filter: blur(20px);
  background: rgba(212, 203, 217, 0.363);
  position: sticky;
  margin-top: -100px;
  top: 0;
  border-top: 1px solid rgb(126, 122, 130);
  border-bottom: 1px solid rgb(126, 122, 130);
  z-index: 999;
}

.blur {
  width: 100%;
  padding: 30px;
  height: 100px;
}

.header-bottom {
  display: inline-flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
}
</style>
