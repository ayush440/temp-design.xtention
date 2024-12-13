<template>
    <main class="pt-24">
      <section class="container mx-auto px-4 py-12">
        <h1 class="text-4xl font-bold mb-8">Scope of Work</h1>
        <div class="grid md:grid-cols-2 gap-8">
          <div v-for="(scope, index) in scopeOfWork" :key="index" class="bg-zinc-900 p-6 rounded-lg">
            <h2 class="text-2xl font-bold mb-4">{{ scope.title }}</h2>
            <ul class="list-disc list-inside space-y-2">
              <li v-for="(item, itemIndex) in scope.items" :key="itemIndex">{{ item }}</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  </template>
  
  <script setup>
  const scopeOfWork = [
    {
      title: 'Web Design',
      items: ['Landing pages', 'Website redesigns', 'E-commerce sites', 'Responsive layouts']
    },
    {
      title: 'UI/UX Design',
      items: ['User interface design', 'User experience optimization', 'Wireframing', 'Prototyping']
    },
    {
      title: 'Branding',
      items: ['Logo design', 'Brand identity', 'Style guides', 'Brand collateral']
    },
    {
      title: 'App Design',
      items: ['Mobile app UI', 'Desktop application interfaces', 'Cross-platform design']
    }
  ]
  </script>