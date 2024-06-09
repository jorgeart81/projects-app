<script setup lang="ts">
import { ref } from 'vue'

import CustomModal from '@/modules/common/components/CustomModal.vue'
import InputModal from '@/modules/common/components/InputModal.vue'
import AddCircle from '@/modules/common/icons/AddCircle.vue'
import FabButton from '../components/FabButton.vue'
import { useProjectsStore } from '../store/projects.store'

const isOpenModal = ref(false)
const isOpenCustomModal = ref(false)

const projectStore = useProjectsStore()
</script>

<template>
  <div class="overflow-x-auto w-full">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Proyectos</th>
          <th>Tareas</th>
          <th>Avance</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(project, index) in projectStore.projectsWithCompletion"
          :key="project.id"
          class="hover"
        >
          <th>{{ index + 1 }}</th>
          <td>{{ project.name }}</td>
          <td>{{ project.taskCount }}</td>
          <td>
            <progress
              class="progress progress-primary w-56"
              :value="project.completion"
              max="100"
            ></progress>
            {{ `${project.completion} %` }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <input-modal
    :open="isOpenModal"
    @close="isOpenModal = false"
    @value="projectStore.addProject"
    placeholder="Ingrese el nombre del proyecto"
    title="Nuevo Proyecto"
    sub-title="Dale un nombre único a tu proyecto"
  />
  <fab-button position="bottom-right" @click="isOpenModal = true">
    <AddCircle />
  </fab-button>

  <custom-modal :open="isOpenCustomModal">
    <template #header>
      <h3 class="font-bold text-lg">Hello!</h3>
    </template>
    <template #body>
      <p class="py-4">Press ESC key or click the button below to close</p>
    </template>
    <template #actions>
      <button @click="isOpenCustomModal = false" class="btn">Cerrar</button>
      <button class="btn btn-primary">Aceptar</button>
    </template>
  </custom-modal>

  <fab-button position="bottom-left" @click="isOpenCustomModal = true">
    <AddCircle />
  </fab-button>
</template>
