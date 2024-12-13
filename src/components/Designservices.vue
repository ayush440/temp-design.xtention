<template>
  <div ref="sectionRef" class=" bg-black px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto pt-20 pb-16">
      <h1 class="text-5xl md:text-5xl mb-16">
        <span class="text-[#6AD5C3]">The solution</span>
        <span class="text-white"> to all your design needs.</span>
      </h1>

      <div ref="boxRef" class="bg-[#111] rounded-3xl p-8 sm:p-12 md:p-16 max-w-auto mx-auto">
        <div class="grid gap-4">
          <!-- Top Row -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="bg-[#1c1c1c] rounded-xl p-6 hover:bg-[#252525] transition-colors cursor-pointer flex items-center gap-3 animate-icon">
              <CircleIcon class="w-6 h-6 text-[#6AD5C3]" />
              <span class="text-white text-lg">Logos</span>
            </div>
            
            <div class="bg-[#1c1c1c] rounded-xl p-6 hover:bg-[#252525] transition-colors cursor-pointer flex items-center gap-3 animate-icon">
              <BookOpenIcon class="w-6 h-6 text-[#6AD5C3]" />
              <span class="text-white text-lg">Brand Guidelines</span>
            </div>
            
            <div class="bg-[#1c1c1c] rounded-xl p-6 hover:bg-[#252525] transition-colors cursor-pointer flex items-center gap-3 animate-icon">
              <LayoutIcon class="w-6 h-6 text-[#6AD5C3]" />
              <span class="text-white text-lg">Landing Pages & Web</span>
            </div>
            
            <div class="bg-[#1c1c1c] rounded-xl p-6 hover:bg-[#252525] transition-colors cursor-pointer flex items-center gap-3 animate-icon">
              <BoxIcon class="w-6 h-6 text-[#6AD5C3]" />
              <span class="text-white text-lg">Digital Products</span>
            </div>
          </div>

          <!-- Middle Row -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="bg-[#1c1c1c] rounded-xl p-6 hover:bg-[#252525] transition-colors cursor-pointer flex items-center gap-3 animate-icon">
              <SmartphoneIcon class="w-6 h-6 text-[#6AD5C3]" />
              <span class="text-white text-lg">Mobile Apps</span>
            </div>
            
            <div class="bg-[#1c1c1c] rounded-xl p-6 hover:bg-[#252525] transition-colors cursor-pointer flex items-center gap-3 animate-icon">
              <InstagramIcon class="w-6 h-6 text-[#6AD5C3]" />
              <span class="text-white text-lg">Social Media</span>
            </div>
            
            <div class="bg-[#1c1c1c] rounded-xl p-6 hover:bg-[#252525] transition-colors cursor-pointer flex items-center gap-3 animate-icon">
              <PresentationIcon class="w-6 h-6 text-[#6AD5C3]" />
              <span class="text-white text-lg">Pitch Decks</span>
            </div>
            
            <div class="bg-[#1c1c1c] rounded-xl p-6 hover:bg-[#252525] transition-colors cursor-pointer flex items-center gap-3 animate-icon">
              <PrinterIcon class="w-6 h-6 text-[#6AD5C3]" />
              <span class="text-white text-lg">Print Design</span>
            </div>
          </div>

          <!-- Bottom Row -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="bg-[#1c1c1c] rounded-xl p-6 hover:bg-[#252525] transition-colors cursor-pointer flex items-center gap-3 lg:col-start-2 animate-icon">
              <TrophyIcon class="w-6 h-6 text-[#6AD5C3]" />
              <span class="text-white text-lg">Sports Graphics</span>
            </div>
            
            <div class="bg-[#1c1c1c] rounded-xl p-6 hover:bg-[#252525] transition-colors cursor-pointer flex items-center gap-3 animate-icon">
              <MailIcon class="w-6 h-6 text-[#6AD5C3]" />
              <span class="text-white text-lg">Email Templates</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  Circle as CircleIcon,
  BookOpen as BookOpenIcon,
  Layout as LayoutIcon,
  Box as BoxIcon,
  Smartphone as SmartphoneIcon,
  Instagram as InstagramIcon,
  Presentation as PresentationIcon,
  Printer as PrinterIcon,
  Trophy as TrophyIcon,
  Mail as MailIcon
} from 'lucide-vue-next'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const boxRef = ref(null)

onMounted(() => {
  // Initialize GSAP animations
  const icons = gsap.utils.toArray('.animate-icon')
  
  // Set initial state for icons
  gsap.set(icons, {
    y: 50,
    opacity: 0
  })

  // Create scroll trigger for the main box
  ScrollTrigger.create({
    trigger: boxRef.value,
    start: 'top bottom-=100',
    onEnter: () => {
      // Animate icons when box enters viewport
      gsap.to(icons, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      })
    },
    onLeaveBack: () => {
      // Reset animations when scrolling back up
      gsap.to(icons, {
        y: 50,
        opacity: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: 'power2.in'
      })
    }
  })
})

onUnmounted(() => {
  // Clean up all ScrollTrigger instances
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})
</script>

<style scoped>
/* No initial hiding in CSS to prevent flash of invisible content */
</style>