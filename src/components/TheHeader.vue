<template>
    <header class="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <nav class="container mx-auto px-4 py-4 flex items-center justify-between">
        <router-link to="/" class="flex items-center">
  <img 
    src="/public/logo.svg" 
    alt="Xtention Crew Logo" 
    class="h-10 w-auto" 
  />
</router-link>

        
        <div class="hidden md:flex items-center space-x-8">
          <router-link v-for="item in menuItems" 
            :key="item.path" 
            :to="item.path"
            class="text-sm text-gray-300 hover:text-white transition-colors"
          >
            {{ item.name }}
          </router-link>
        </div>
  
        <div class="flex items-center space-x-4">
         
          <button class="px-4 py-2 text-sm bg-[#6AD5C3] text-black rounded-full hover:bg-white transition-colors">
            Schedule a call
          </button>
        </div>
      </nav>
    </header>
  </template>
  
  <script setup>
  const menuItems = [
    { name: 'Our work', path: '/work' },
    { name: 'Features', path: '/features' },
    { name: 'Scope of work', path: '/scope' },
    { name: 'Plans', path: '/plans' },
    { name: 'FAQs', path: '/faqs' },
  ]
  </script>