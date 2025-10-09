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
    <header class="header">
      <div class="wrapper">
        <div class="blur"></div>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style scoped>
.app-container {
  width: 100%;
  background-image: url('/src/assets/images/lights.png');
  background-size: 125%;
  background-position: bottom right;
  display: inline-flex;
  align-items: center;
  flex-direction: column;
}

.header {
  height: 300px;
  width: 100%;
}

.wrapper {
  width: 100%;
  backdrop-filter: blur(6px);
  background: rgba(212, 203, 217, 0.363);
  position: fixed;
  top: 0;
  border-bottom: 1px solid rgb(126, 122, 130);
  z-index: 999;
}

.blur {
  width: 100%;
  padding: 30px;
  min-height: 100px;
}

.header-bottom {
  display: inline-flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
}
</style>
