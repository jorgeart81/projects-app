import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

import { v4 as uuidv4 } from 'uuid'
import { useLocalStorage } from '@vueuse/core'
import type { Project } from '../interfaces/project.interface'

export const useProjectsStore = defineStore('projects', () => {
  const projects = ref(useLocalStorage<Project[]>('projects', []))

  const addProject = (name: string) => {
    if (!name || name.length === 0) return

    projects.value.push({ id: uuidv4(), name, tasks: [] })
  }

  return {
    // Properties
    // projects,

    // Getters
    projectList: computed(() => [...projects.value]),

    // Actions

    addProject
  }
})
