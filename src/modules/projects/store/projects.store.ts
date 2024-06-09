import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

import { useLocalStorage } from '@vueuse/core'
import { v4 as uuidv4 } from 'uuid'
import type { Project } from '../interfaces/project.interface'

export const useProjectsStore = defineStore('projects', () => {
  const projects = ref(useLocalStorage<Project[]>('projects', []))
  const project = ref<Project | undefined>()

  const addProject = (name: string) => {
    if (!name || name.length === 0) return

    projects.value.push({ id: uuidv4(), name, tasks: [] })
  }

  const projectById = (id: string) => {
    project.value = projects.value.find((p) => p.id === id)
  }

  const addTaskProject = (taskName: string) => {
    if (taskName.trim().length === 0) return
    if (!project.value) return

    project.value?.tasks.push({
      id: uuidv4(),
      name: taskName
    })

    projects.value.map((p) => {
      p.id === project.value?.id ? { ...project.value } : p
    })
  }

  const toogleTask = (taskId: string) => {
    if (!project.value) return

    const task = project.value.tasks.find((t) => t.id === taskId)
    if (!task) return

    task.completeAt = task.completeAt ? undefined : new Date()
  }

  const completionTasks = (project: Project) => {
    const total = project.tasks.length
    const completed = project.tasks.filter((t) => t.completeAt).length
    const completion = total === 0 ? 0 : (completed * 100) / total

    return {
      id: project.id,
      name: project.name,
      taskCount: total,
      completion: Math.round(completion)
    }
  }

  return {
    // Properties
    projects,

    // Getters
    projectList: computed(() => [...projects.value]),
    noProjects: computed(() => projects.value.length === 0),
    currentProject: computed(() => project.value),
    projectsWithCompletion: computed(() =>
      projects.value.map((project) => completionTasks(project))
    ),

    // Actions
    addProject,
    projectById,
    addTaskProject,
    toogleTask
  }
})
