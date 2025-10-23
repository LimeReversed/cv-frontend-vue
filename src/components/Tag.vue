<script setup lang="ts">
import Tag from '@/classes/tag'
import { onMounted, ref } from 'vue'

const props = defineProps<{
  tag: Tag
}>()

const tagStyle = ref('style-beginner')

onMounted(() => {
  if (props.tag.level === 1 || props.tag.level === 2) {
    tagStyle.value = 'style-beginner'
  } else if (props.tag.level === 3 || props.tag.level === 4) {
    tagStyle.value = 'style-ok'
  } else if (props.tag.level === 5 || props.tag.level === 6) {
    tagStyle.value = 'style-confident'
  }
})
</script>

<template>
  <div :class="['tag-container', tagStyle]">
    <p class="tag-text">{{ tag.name }}</p>
  </div>
</template>

<style scoped>
@import '@css/main.css';

.tag-container {
  --container-height: 35px;

  height: var(--container-height);
  padding: 0px 15px;
  margin: 0px 5px 5px 0px;
  /* background-color: gainsboro; */
  border-radius: 5px;
}

.tag-text {
  line-height: var(--container-height);
  font-size: smaller;
  text-align: center;
}

.style-confident {
  background-color: var(--color-confident-tag);
}

.style-ok {
  background-color: var(--color-ok-tag);
}

.style-beginner {
  background-color: var(--color-beginner-tag);
}
</style>
