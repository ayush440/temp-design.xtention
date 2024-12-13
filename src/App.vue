<template>
  <div class="min-h-0  bg-black text-white font-sans">
    <TheHeader />
    <router-view></router-view>
    <TheFooter />
  </div>
</template>

<script setup>
import { provide } from 'vue'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'

// Provide any global state or functions here
provide('appName', 'xtention Studio')
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

:root {
  --font-sans: 'Inter', sans-serif;
}

body {
  font-family: var(--font-sans);
  background-color: black;
  color: white;
}
</style>