import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

import { v4 as uuidv4 } from 'uuid'
import type { Project } from '../interfaces/project.interface'

const initialLoad = (): Project[] => {
  return [
    {
      id: uuidv4(),
      name: 'Project_1',
      tasks: []
    },
    {
      id: uuidv4(),
      name: 'Project_2',
      tasks: []
    }
  ]
}

export const useProjectsStore = defineStore('projects', () => {
  const projects = ref<Project[]>(initialLoad())

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
