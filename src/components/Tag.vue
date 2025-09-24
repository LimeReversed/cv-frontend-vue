<script setup lang="ts">
import Tag from '@/classes/tag'

defineProps<{
  tag: Tag
}>()
</script>

<template>
  <div class="tag-container">
    <p class="tag-text">{{ tag.name }}</p>
  </div>
</template>

<style scoped>
@import '../assets/main.css';

.tag-container {
  --container-height: 35px;

  height: var(--container-height);
  padding: 0px 15px;
  margin: 0px 5px 5px 0px;
  background-color: gainsboro;
  border-radius: 5px;
}

.tag-text {
  line-height: var(--container-height);
  font-size: smaller;
  text-align: center;
}
</style>
