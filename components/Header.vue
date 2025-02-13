<template>
  <header class="fixed z-50 w-full flex items-center justify-between p-5 text-x select-none">
    
    <nuxt-link to="/" class="flex items-center gap-2 text-2xl" @click="scrollToSection(0, true)">
      <!-- <img height="50" width="61" src="/logo.png" alt="Biltmore Litho Logo" /> -->
    </nuxt-link>
    
  </header>
</template>

<script setup>
const store = useStore()
const emits = defineEmits(['scrollToSection'])
let darkMode = computed(() => store.darkMode)
const toggleDarkMode = store.toggleDarkMode

function scrollToSection(id, force = false) {
  emits('scrollToSection', id, force)
}
</script>