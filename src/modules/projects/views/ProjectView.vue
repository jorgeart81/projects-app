<script setup lang="ts">
import { ref, watch } from 'vue';

import BreadCrumbs from '@/modules/common/components/BreadCrumbs.vue';
import { useRouter } from 'vue-router';
import { useProjectsStore } from '../store/projects.store';

interface Props {
  id: string
}

const router = useRouter()
const props = defineProps<Props>()
const projectStore = useProjectsStore()

const newTask = ref('')

watch(
  () => props.id,
  (id) => {
    projectStore.projectById(id)
    if (!projectStore.currentProject) {
      router.replace('/')
    }
  },
  { immediate: true }
)

const addTask = () => {
  projectStore.addTaskProject(newTask.value.trim())
  newTask.value = ''
}
</script>

<template>
  <div class="overflow-x-auto w-full">
    <section class="mt-2">
      <bread-crumbs :name="projectStore.currentProject?.name" />
    </section>

    <section class="mt-2">
      <div class="overflow-x-auto">
        <table class="table">
          <thead>
            <tr>
              <th class="w-14">Completada</th>
              <th>Tarea</th>
              <th>Completada en</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="task in projectStore.currentProject?.tasks" :key="task.id" class="hover">
              <th>
                <input
                  type="checkbox"
                  :checked="!!task.completeAt"
                  @change="projectStore.toogleTask(task.id)"
                  class="checkbox checkbox-primary"
                />
              </th>
              <td>{{ task.name }}</td>
              <td>{{ task.completeAt }}</td>
            </tr>
            <tr class="hover">
              <th></th>
              <td>
                <input
                  type="text"
                  placeholder="Nueva tarea"
                  v-model="newTask"
                  @keyup.enter="addTask"
                  class="input input-primary w-full opacity-60 transition-all hover:opacity-100 focus:opacity-100"
                />
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
