<template>
  <section ref="sectionRef" class="min-h-full bg-black relative overflow-hidden ">
    <!-- Background Image -->
    <div class="absolute inset-0 bg-cover bg-center z-0" style="background-image: url('/src/assets/images/Lines.png');"></div>
    
    <!-- Vignette Overlay -->
    <div class="absolute inset-0 z-0 bg-gradient-to-tl from-black via-black/50 to-transparent"></div>

    <!-- Content Container -->
    <div class="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 z-10">
      <div class="space-y-12">
        <!-- Main Heading -->
        <h1 class="text-white text-5xl md:text-7xl font-bold max-w-4xl mt-20 leading-tight">
          <span class="block animate-text">Your all-in-one</span>
          <span class="block animate-text">design solution under</span>
          <span class="block text-[#6AD5C3] animate-text">one subscription.</span>
        </h1>

        <!-- Testimonial -->
        <div class="flex items-center space-x-4 max-w-2xl animate-text">
          <div class="flex items-center">
            <div class="relative">
              <img 
                src="../assets/images/test.jpg" 
                alt="Avatar" 
                class="w-5 h-5 rounded-full border-2 border-gray-700"
              />
              <div class="absolute -right-1 -bottom-1 bg-white p-1 rounded-full">
                <div class="w-4 h-4 bg-gray-900 rounded-full"></div>
              </div>
            </div>
          </div>
          <div class="flex-1">
            <blockquote class="text-white text-lg">
              "They absolutely crush all requests. Every design has been spot on!"
            </blockquote>
            <cite class="text-gray-500 text-sm block mt-2">
              Octav Cretu, Managing Partner @ Nexus Media
            </cite>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="flex items-center space-x-8 animate-text">
          <a 
            href="#plans" 
            class="inline-flex items-center px-8 py-3 bg-[#6AD5C3] text-black font-semibold rounded-full hover:bg-white transition-colors"
          >
            See plans
            <ArrowRight class="ml-2 w-5 h-5" />
          </a>
          
          <div class="flex items-center space-x-2">
            <div class="w-2 h-2 bg-[#6AD5C3] rounded-full"></div>
            <span class="text-white">2 spots available</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowRight } from 'lucide-vue-next'
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

const sectionRef = ref(null)
let observer = null

const animateElements = () => {
  const animatedElements = sectionRef.value.querySelectorAll('.animate-text')
  gsap.set(animatedElements, { y: 100, opacity: 0 })
  gsap.to(animatedElements, {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out'
  })
}

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateElements()
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1 })

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.animate-text {
  opacity: 0;
  transform: translateY(100px);
}
</style>