<script setup lang="ts">
import { ref, watch } from 'vue'

import BreadCrums from '@/modules/common/components/BreadCrums.vue'
import { useProjectsStore } from '../store/projects.store'
import type { Project } from '../interfaces/project.interface'

interface Props {
  id: string
}

const props = defineProps<Props>()
const projectStore = useProjectsStore()
const project = ref<Project | null>()

watch(
  () => props.id,
  (id) => {
    project.value = projectStore.projectList.find((p) => p.id === id)
  },
  { immediate: true }
)
</script>

<template>
  <div class="overflow-x-auto w-full">
    <BreadCrums :name="project?.name" />
    <h1 class="text-3xl">{{ id }}</h1>
  </div>
</template>
