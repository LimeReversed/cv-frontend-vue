import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import { type ExperienceResponseItem } from '@/classes/experience'

export const experienceStore = defineStore('experience', () => {
  const jobs: Ref<ExperienceResponseItem[]> = ref([])
  const education: Ref<ExperienceResponseItem[]> = ref([])
  const hobbies: Ref<ExperienceResponseItem[]> = ref([])

  async function loadAll() {
    try {
      const response = await fetch(`${process.env.BACKENT_PATH}experience`, {
        method: 'GET',
        headers: {
          // Authorization: `Bearer ${tokenObject.idToken}`
        },
      })

      const responseData = await response.json()

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

  return { jobs, education, hobbies, loadAll }
})
