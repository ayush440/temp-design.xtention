<template>
  <footer ref="footerRef" class="bg-black pt-32 pb-16 px-6 relative">
    <!-- Background Image with Fade -->
    <div class="absolute inset-0 w-full h-full overflow-hidden">
      <div class="relative w-full h-full max-w-[1200px] mx-auto">
        <img 
          src="../assets/images/footer.png"
          alt="Background"
          class="animate-element"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
      </div>
    </div>

    <!-- Footer Content Box -->
    <div class="max-w-7xl mx-auto relative z-20 mt-36 animate-element">
      <div class="bg-neutral-900/30 rounded-3xl border border-neutral-800/50 shadow-2xl backdrop-blur-md overflow-hidden">
        <div class="p-12 md:p-16 ">
          <div class="grid grid-cols-1 md:grid-cols-5 gap-12">
            <!-- Discovery Call Section -->
            <div class="space-y-4 animate-element">
              <Instagram class="w-5 h-5 text-[#6AD5C3]" />
              <h3 class="text-white text-lg font-medium">Want to make sure we're the right fit? Book a discovery call!</h3>
              <p class="text-neutral-500">Find out how you can up your design game, forever.</p>
              <div class="space-y-3 mt-6">
                <a href="#book" class="inline-flex items-center px-6 py-3 bg-[#6AD5C3] text-black font-medium rounded-full hover:bg-white transition-colors">
                  Book a call
                  <ArrowRight class="ml-2 w-4 h-4" />
                </a>
                <a href="#plans" class="block w-fit px-6 py-3 text-white font-medium rounded-full bg-black/40 border border-neutral-800 hover:bg-black/60 transition-colors">
                  See our plans
                </a>
              </div>
            </div>

            <!-- Navigation -->
            <div class="space-y-4 animate-element">
              <LayoutGrid class="w-5 h-5 text-[#6AD5C3]" />
              <h3 class="text-white text-lg font-medium">Navigation</h3>
              <nav class="space-y-3">
                <a v-for="link in navigationLinks" 
                   :key="link"
                   href="#" 
                   class="block text-neutral-500 hover:text-white transition-colors">
                  {{ link }}
                </a>
              </nav>
            </div>

            <!-- Legal Info -->
            <div class="space-y-4 animate-element">
              <FileText class="w-5 h-5 text-[#6AD5C3]" />
              <h3 class="text-white text-lg font-medium">Legal Info</h3>
              <nav class="space-y-3">
                <a v-for="link in legalLinks" 
                   :key="link"
                   href="#" 
                   class="block text-neutral-500 hover:text-white transition-colors">
                  {{ link }}
                </a>
              </nav>
            </div>

            <!-- Contact -->
            <div class="space-y-4 animate-element">
              <AtSign class="w-5 h-5 text-[#6AD5C3]" />
              <h3 class="text-white text-lg font-medium">Contact us</h3>
              <a href="mailto:contact@xtention.studio" class="block text-neutral-500 hover:text-white transition-colors">
                contact@xtention.studio
              </a>
              <div class="space-y-3 mt-4">
                <a href="#book" class="block w-fit px-6 py-2 text-white font-medium rounded-full bg-black/40 border border-neutral-800 hover:bg-black/60 transition-colors">
                  Book a call
                </a>
                <a href="#chat" class="block w-fit px-6 py-2 text-white font-medium rounded-full bg-black/40 border border-neutral-800 hover:bg-black/60 transition-colors">
                  Chat with us
                </a>
              </div>
            </div>

            <!-- Made By -->
            <div class="space-y-4 animate-element">
              <Heart class="w-5 h-5 text-[#6AD5C3]" />
              <h3 class="text-white text-lg font-medium">Made by Xtention</h3>
              <a href="mailto:razvan@xtention.studio" class="block text-neutral-500 hover:text-white transition-colors">
                razvan@xtention.studio
              </a>
              <a href="https://twitter.com/xtention" 
                 class="inline-flex items-center px-6 py-2 text-white font-medium rounded-full bg-black/40 border border-neutral-800 hover:bg-black/60 transition-colors">
                Follow on <Twitter class="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>

          <!-- Scroll to Top -->
          <div class="flex justify-end mt-16 animate-element">
            <button 
              @click="scrollToTop"
              class="p-4 rounded-full bg-black/40 border border-neutral-800 hover:bg-black/60 transition-colors"
            >
              <ArrowUp class="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowRight, ArrowUp, Instagram, LayoutGrid, FileText, AtSign, Heart, Twitter } from 'lucide-vue-next'
import { gsap } from 'gsap'

const footerRef = ref(null)
const hasAnimated = ref(false)

const navigationLinks = [
  'Log in',
  'Subscribe',
  'Our work',
  'Features',
  'Scope of work',
  'Plans',
  'FAQs'
]

const legalLinks = [
  'Terms & Conditions',
  'Privacy Policy'
]

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const animateElements = () => {
  if (hasAnimated.value) return

  const elements = footerRef.value.querySelectorAll('.animate-element')
  gsap.set(elements, { y: 50, opacity: 0 })
  gsap.to(elements, {
    y: 0,
    opacity: 1,
    duration: 3,
    stagger: 0.1,
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

  if (footerRef.value) {
    observer.observe(footerRef.value)
  }

  onUnmounted(() => {
    observer.disconnect()
  })
})
</script>

<style scoped>
.text-neutral-900 {
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.animate-element {
  opacity: 0;
  transform: translateY(50px);
}
</style>