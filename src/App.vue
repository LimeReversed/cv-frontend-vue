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
    <header>
      <div class="header-top"></div>
    </header>
    <RouterView />
  </div>
</template>

<style scoped>
header {
  width: 100%;
  position: relative;
  overflow: hidden;
}

.header-top {
  background-color: rgb(41, 41, 41);
  height: 150px;
  width: 100%;
}

.header-middle {
  position: absolute;
  width: 105%;
  height: 300px;
  background-image: url('/src/assets/Purple.png');
  rotate: -3deg;
  top: 30px;
  right: -10px;
}

.header-bottom {
  display: inline-flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
}

.header-bottom-left {
  width: 300px;
  height: 100%;
  background-color: rgb(238, 238, 238);
}

.header-bottom-right {
  width: 100%;
  height: 100%;
  background-image: url('/src/assets/Orange.png');
  /* background-size: contain; */
  background-position: 100% -150%;
}

/* .content {
  display: inline-flex;
  flex-direction: row;
  flex: 1;
}

.content-left {
  width: 300px;
  height: 100%;
  background-color: rgb(238, 238, 238);
}

.content-right {
  width: 100%;
  height: 100%;
} */

.app-container {
  height: 100%;
  width: 100%;
}
</style>
