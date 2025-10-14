import { computed, ref } from 'vue'
import type { ComputedRef, Ref } from 'vue'
import { defineStore } from 'pinia'
import { type ExperienceResponseItem } from '@/classes/experience'
import Tag from '@/classes/tag'

export const experienceStore = defineStore('experience', () => {
  const jobs: Ref<ExperienceResponseItem[]> = ref([])
  const education: Ref<ExperienceResponseItem[]> = ref([])
  const hobbies: Ref<ExperienceResponseItem[]> = ref([])
  const allTags: Ref<Tag[]> = ref([])

  const extractTags = (experience: ExperienceResponseItem[]) => {
    const result: Tag[] = []
    const seen = new Set()

    experience.forEach((ex) => {
      ex.tags.forEach((tag) => {
        if (!seen.has(tag.name)) {
          seen.add(tag.name)
          result.push(new Tag(tag.id, tag.name, tag.level, tag.category))
        }
      })
    })

    result.sort((a: Tag, b: Tag) => b.level - a.level)

    return result
  }

  // Maybe be a list so it can be sorted
  const tagsShown = ref(new Set())

  const checkTag = (tag: Tag) => {
    tagsShown.value.add(tag)
  }

  const uncheckTag = (tag: Tag) => {
    tagsShown.value.delete(tag)
  }

  const tagsByCategory: ComputedRef<Map<string, Tag[]>> = computed(() => {
    const map = new Map<string, Tag[]>()

    allTags.value.forEach((tag: Tag) => {
      if (!map.has(tag.category)) {
        map.set(tag.category, [tag])
      } else {
        map.get(tag.category)?.push(tag)
      }
    })

    return map
  })

  async function loadAll() {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_PATH}experience`, {
        method: 'GET',
        headers: {
          // Authorization: `Bearer ${tokenObject.idToken}`
        },
      })

      const responseData = await response.json()

      allTags.value = extractTags(responseData)

      responseData.map((data: ExperienceResponseItem) => {
        const experience: ExperienceResponseItem = data

        if (experience.type === 'Job') {
          jobs.value.push(experience)
        } else if (experience.type === 'Hobbies') {
          hobbies.value.push(experience)
        } else if (experience.type === 'Education') {
          education.value.push(experience)
        }
      })
    } catch (err) {
      console.log(err)
    }
  }

  return {
    jobs,
    education,
    hobbies,
    loadAll,
    allTags,
    tagsByCategory,
    tagsShown,
    checkTag,
    uncheckTag,
  }
})
