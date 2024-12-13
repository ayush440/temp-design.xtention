<template>
    <main class="pt-24">
      <section class="container mx-auto px-4 py-12">
        <h1 class="text-4xl font-bold mb-8">Our Work</h1>
        <PortfolioGrid :showAll="true" />
      </section>
    </main>
  </template>
  
  <script setup>
  import PortfolioGrid from '../components/PortfolioGrid.vue'
  </script>