<template>
  <div ref="sectionRef" class="bg-black min-h-0 my-20 ">
    <div class="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 2xl:mx-64">
      <h1 class="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-8 sm:mb-12 md:mb-16 animate-element">
        Discover our pricing<br class="hidden sm:block" />
        and <span class="text-[#6AD5C3]">get started today.</span>
      </h1>

      <div class="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
        <!-- Monthly Plan Card -->
        <div class="lg:col-span-2 bg-[#111111] rounded-3xl p-6 sm:p-8 relative overflow-hidden animate-element">
          <!-- Grid Pattern Background -->
          <div class="absolute inset-0 grid grid-cols-4 sm:grid-cols-8 gap-4 opacity-20">
            <div v-for="i in 64" :key="i" class="border-t border-l border-gray-700"></div>
          </div>
          
          <!-- Content -->
          <div class="relative z-10">
            <div class="inline-flex items-center bg-[#1A1A1A] rounded-full px-3 py-1 sm:px-4 sm:py-2 mb-6 sm:mb-8">
              <div class="w-2 h-2 bg-[#6AD5C3] rounded-full mr-2"></div>
              <span class="text-white text-xs sm:text-sm">2 spots available</span>
            </div>

            <h2 class="text-white text-2xl sm:text-3xl mb-2">Monthly</h2>
            <div class="text-white text-4xl sm:text-5xl font-light mb-4">$2,490 <span class="text-lg sm:text-xl text-gray-400">/mo</span></div>
            <p class="text-gray-400 mb-6 sm:mb-8">Ideal for startups with an ongoing demand for design services.</p>

            <div class="flex flex-col sm:flex-row gap-4 mb-6 sm:mb-8">
              <button class="bg-[#6AD5C3] hover:bg-white transition-colors duration-300 text-black rounded-full px-6 py-3 flex items-center justify-center">
                Subscribe
                <ArrowRight class="ml-2 w-4 h-4" />
              </button>
              <button class="bg-[#1A1A1A] hover:bg-[#222] transition-colors duration-300 text-white rounded-full px-6 py-3">
                Book a call
              </button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div v-for="(feature, index) in monthlyFeatures" :key="index" class="flex items-center text-gray-400">
                <Star class="w-4 h-4 mr-2 flex-shrink-0" />
                <span class="text-sm sm:text-base">{{ feature }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Custom Plan Card -->
        <div class="lg:col-span-3 space-y-6">
          <div class="bg-[#111111] rounded-3xl p-6 sm:p-8 animate-element">
            <h2 class="text-[#6AD5C3] text-2xl sm:text-3xl mb-4">Custom</h2>
            <p class="text-gray-400 mb-6">Ideal for startups with project-based design needs.</p>
            
            <button class="bg-[#1A1A1A] hover:bg-[#222] transition-colors duration-300 text-white rounded-full px-6 py-3 mb-6">
              Book a call
            </button>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div v-for="(feature, index) in customFeatures" :key="index" class="flex items-center text-gray-400">
                <Star class="w-4 h-4 mr-2 flex-shrink-0" />
                <span class="text-sm sm:text-base">{{ feature }}</span>
              </div>
            </div>
          </div>

          <!-- Framer Add-on Card -->
          <div class="bg-[#111111] rounded-3xl p-6 sm:p-8 animate-element">
            <div class="inline-block bg-[#1A1A1A] rounded-full px-3 py-1 sm:px-4 sm:py-2 text-gray-400 text-xs sm:text-sm mb-4">
              Add-on
            </div>
            
            <h2 class="text-[#6AD5C3] text-2xl sm:text-3xl mb-4">Framer development</h2>
            <div class="text-white text-2xl sm:text-3xl mb-6">+$500 <span class="text-lg sm:text-xl text-gray-400">/mo</span></div>

            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button class="bg-[#6AD5C3] hover:bg-white transition-colors duration-300 text-black rounded-full px-6 py-3 flex items-center">
                Subscribe
                <ArrowRight class="ml-2 w-4 h-4" />
              </button>
              <p class="text-gray-400 text-sm sm:text-base">Framer website development + 3 free months of Pro annual subscription.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Referral Card -->
      
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowRight, Star } from 'lucide-vue-next'
import { gsap } from 'gsap'

const sectionRef = ref(null)
const hasAnimated = ref(false)

const monthlyFeatures = [
  'Unlimited requests',
  'Unlimited revisions',
  '~48 hour delivery',
  'Pause or cancel anytime',
  'Unlimited brands',
  'Managed via Slack',
  'Invite your team',
  'Versatile services'
]

const customFeatures = [
  'Custom pricing',
  'Fast delivery',
  '3 revisions',
  'Managed via Slack'
]

const animateElements = () => {
  if (hasAnimated.value) return

  const elements = sectionRef.value.querySelectorAll('.animate-element')
  gsap.set(elements, { y: 50, opacity: 0 })
  gsap.to(elements, {
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out',
    onComplete: () => {
      hasAnimated.value = true
    }
  })
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !hasAnimated.value) {
        animateElements()
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1 })

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }

  onUnmounted(() => {
    observer.disconnect()
  })
})
</script>

<style scoped>
.animate-element {
  opacity: 0;
  transform: translateY(50px);
}
</style>