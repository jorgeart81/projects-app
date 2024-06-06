<script setup lang="ts">
import TopMenu from '@/modules/common/components/TopMenu.vue'
import SideMenu from '@/modules/projects/components/SideMenu.vue'
</script>

<template>
  <div class="flex flex-col">
    <!-- Top menu -->
    <top-menu />
    <main>
      <!-- Sidemenu -->
      <side-menu />

      <router-view />
    </main>
  </div>
</template>
