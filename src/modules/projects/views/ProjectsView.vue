<script setup lang="ts">
import { ref } from 'vue'

import AddCircle from '@/modules/common/icons/AddCircle.vue'
import FabButton from '../components/FabButton.vue'
import InputModal from '@/modules/common/components/InputModal.vue'
import CustomModal from '@/modules/common/components/CustomModal.vue'

const isOpenModal = ref(false)
const isOpenCustomModal = ref(false)

const onNewValue = (projectName: string) => {
  console.log({ projectName })
}
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
        <tr class="hover">
          <th>2</th>
          <td>Hart Hagerty</td>
          <td>Desktop Support Technician</td>
          <td>Purple</td>
        </tr>
      </tbody>
    </table>
  </div>

  <input-modal
    :open="isOpenModal"
    @close="isOpenModal = false"
    @value="onNewValue"
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
