<template>
    <div class="group relative overflow-hidden rounded-2xl">
      <img 
        :src="image" 
        :alt="title" 
        class="w-full h-auto transition-transform duration-500 group-hover:scale-105"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div class="absolute bottom-0 left-0 p-8">
          <h3 class="text-2xl font-bold mb-2">{{ title }}</h3>
          <p class="text-gray-200">{{ description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: String,
    description: String,
    image: String
  })
  </script>