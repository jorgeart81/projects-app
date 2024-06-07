<script setup lang="ts">
import AddCircle from '@/modules/common/icons/AddCircle.vue'
import FabButton from '../components/FabButton.vue'
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

    <fab-button
      @click="
        () => {
          console.log('click')
        }
      "
    >
      <AddCircle />
    </fab-button>
  </div>
</template>
