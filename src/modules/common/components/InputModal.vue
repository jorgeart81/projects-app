<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  open: boolean
  title: string
  placeholder?: string
  subTitle?: string
}

defineProps<Props>()

const emits = defineEmits<{
  close: [void]
  value: [text: string]
}>()

const inputValue = ref('')
const inputRef = ref<HTMLInputElement | null>(null)

const submitValue = () => {
  if (!inputValue.value) {
    inputRef.value?.focus()
    return
  }

  emits('value', inputValue.value.trim())
  emits('close')

  inputValue.value = ''
}
</script>

<template>
  <dialog class="modal" :open="open">
    <div class="modal-box">
      <h3 class="font-bold text-lg">{{ title }}</h3>
      <p v-if="subTitle" class="py-4">{{ subTitle }}</p>

      <div class="modal-action">
        <form method="dialog" @submit.prevent="submitValue" class="w-full flex flex-col gap-5">
          <input
            type="text"
            :placeholder="placeholder ?? 'Nombre del proyecto'"
            class="input input-bordered input-primary w-full flex-1 p-3"
            ref="inputRef"
            v-model="inputValue"
          />
          <!-- if there is a button in form, it will close the modal -->
          <div class="flex justify-end gap-4">
            <button @click="$emit('close')" class="btn">Cerrar</button>
            <button type="submit" class="btn btn-primary">Aceptar</button>
          </div>
        </form>
      </div>
    </div>
  </dialog>

  <div
    v-if="open"
    class="modal-backdrop fixed top-0 left-0 z-10 bg-black opacity-50 w-screen h-screen"
  ></div>
</template>
