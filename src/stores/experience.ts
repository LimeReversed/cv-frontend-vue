import { computed, ref } from 'vue'
import type { ComputedRef, Ref } from 'vue'
import { defineStore } from 'pinia'
import { type ExperienceResponseItem } from '@/classes/experience'
import Tag from '@/classes/tag'

export const experienceStore = defineStore('experience', () => {
  /* STATE */
  const tags: Ref<Tag[]> = ref([])
  const tagsToShow: Ref<Set<string>> = ref(new Set<string>())
  const jobs: Ref<ExperienceResponseItem[]> = ref([])
  const education: Ref<ExperienceResponseItem[]> = ref([])
  const hobbies: Ref<ExperienceResponseItem[]> = ref([])

  /* GETTTERS */
  const filteredTags: ComputedRef<Tag[]> = computed(() =>
    tagsToShow.value.size === 0
      ? tags.value
      : tags.value.filter((tag) => tagsToShow.value.has(tag.name)),
  )

  const tagsByCategory: ComputedRef<Map<string, Tag[]>> = computed(() => {
    const map = new Map<string, Tag[]>()

    tags.value.forEach((tag: Tag) => {
      if (!map.has(tag.category)) {
        map.set(tag.category, [tag])
      } else {
        map.get(tag.category)?.push(tag)
      }
    })

    return map
  })

  const filteredJobs: ComputedRef<ExperienceResponseItem[]> = computed(() => {
    return tagsToShow.value.size === 0
      ? jobs.value
      : jobs.value.filter((job) => {
          return job.tags.some((tag) => tagsToShow.value.has(tag.name))
        })
  })

  const filteredEducation: ComputedRef<ExperienceResponseItem[]> = computed(() => {
    return tagsToShow.value.size === 0
      ? education.value
      : education.value.filter((education) => {
          return education.tags.some((tag) => tagsToShow.value.has(tag.name))
        })
  })

  const filteredHobbies: ComputedRef<ExperienceResponseItem[]> = computed(() => {
    return tagsToShow.value.size === 0
      ? hobbies.value
      : hobbies.value.filter((hobby) => {
          return hobby.tags.some((tag) => tagsToShow.value.has(tag.name))
        })
  })

  /* ACTIONS */
  const checkTag = (tag: Tag) => {
    tagsToShow.value.add(tag.name)
  }

  const uncheckTag = (tag: Tag) => {
    tagsToShow.value.delete(tag.name)
  }

  async function loadAll() {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_PATH}experience`, {
        method: 'GET',
        headers: {
          // Authorization: `Bearer ${tokenObject.idToken}`
        },
      })

      const responseData = await response.json()

      tags.value = extractTags(responseData)

      responseData.map((data: ExperienceResponseItem) => {
        const experience: ExperienceResponseItem = data

        if (experience.type === 'Job') {
          jobs.value.push(experience)
        } else if (experience.type === 'Hobby') {
          hobbies.value.push(experience)
        } else if (experience.type === 'Education') {
          education.value.push(experience)
        }
      })

      jobs.value.sort((a, b) => b.from.localeCompare(a.from))
      hobbies.value.sort((a, b) => b.from.localeCompare(a.from))
      education.value.sort((a, b) => b.from.localeCompare(a.from))
    } catch (err) {
      console.log(err)
    }
  }

  /* HELPERS */
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

  return {
    jobs,
    filteredJobs,
    education,
    filteredEducation,
    hobbies,
    filteredHobbies,
    loadAll,
    tags,
    tagsByCategory,
    filteredTags,
    checkTag,
    uncheckTag,
    tagsToShow,
  }
})
