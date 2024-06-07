<script setup lang="ts">
interface Props {
  open?: boolean
}

withDefaults(defineProps<Props>(), {
  open: false
})
</script>

<template>
  <dialog id="my_modal_1" class="modal" :open="open">
    <div class="modal-box">
      <slot name="header" />

      <div>
        <slot name="body" />
      </div>

      <div class="modal-action">
        <slot name="actions" />
      </div>
    </div>
  </dialog>

  <div
    v-if="open"
    class="modal-backdrop fixed top-0 left-0 z-10 bg-black opacity-50 w-screen h-screen"
  ></div>
</template>
