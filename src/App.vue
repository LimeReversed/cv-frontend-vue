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
      <div class="header-top">
        <div class="blurr-test"></div>
      </div>
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

.blurr-test {
  width: 100%;
  height: 50px;
  backdrop-filter: blur(10px);
}

.header-top {
  /* background-color: rgb(41, 41, 41); */
  height: 150px;
  width: 100%;
  background-image: url('/src/assets/images/Purple.png');
}

.header-middle {
  position: absolute;
  width: 105%;
  height: 300px;

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
