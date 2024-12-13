<template>
  <div ref="sectionRef" class="bg-black min-h-0 ">
    <div class="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 2xl:mx-64">
      <div class="bg-[#111111] rounded-2xl sm:rounded-3xl md:rounded-[40px] p-6 sm:p-8 md:p-12 lg:p-16">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 md:gap-16">
          <!-- Payroll Feature -->
          <div class="space-y-4 animate-feature">
            <div class="w-8 h-8 sm:w-10 sm:h-10 text-[#6AD5C3]">
              <DollarSign class="w-full h-full" />
            </div>
            <h3 class="text-white text-xl sm:text-2xl font-light">A "payroll" that makes sense</h3>
            <p class="text-gray-400 text-base sm:text-lg">
              Say goodbye to absurd salaries, bonuses, vacations, and sick days.
            </p>
          </div>

          <!-- Available Spots Feature -->
          <div class="space-y-4 animate-feature">
            <div class="w-8 h-8 sm:w-10 sm:h-10 text-[#6AD5C3]">
              <Users class="w-full h-full" />
            </div>
            <h3 class="text-white text-xl sm:text-2xl font-light">Few available spots</h3>
            <p class="text-gray-400 text-base sm:text-lg">
              We keep our clients list short so you get that special treatment.
            </p>
          </div>

          <!-- Unlimited Brands Feature -->
          <div class="space-y-4 animate-feature">
            <div class="w-8 h-8 sm:w-10 sm:h-10 text-[#6AD5C3]">
              <Infinity class="w-full h-full" />
            </div>
            <h3 class="text-white text-xl sm:text-2xl font-light">Unlimited brands</h3>
            <p class="text-gray-400 text-base sm:text-lg">
              Only one monthly fee for streamlining your designs across all your businesses.
            </p>
          </div>

          <!-- No Meetings Feature -->
          <div class="space-y-4 animate-feature">
            <div class="w-8 h-8 sm:w-10 sm:h-10 text-[#6AD5C3]">
              <XCircle class="w-full h-full" />
            </div>
            <h3 class="text-white text-xl sm:text-2xl font-light">No (useless) meetings</h3>
            <p class="text-gray-400 text-base sm:text-lg">
              We handle everything efficiently on Slack, in your dedicated chat — no meetings to waste your time.
            </p>
          </div>

          <!-- No Contracts Feature -->
          <div class="space-y-4 animate-feature">
            <div class="w-8 h-8 sm:w-10 sm:h-10 text-[#6AD5C3]">
              <FileText class="w-full h-full" />
            </div>
            <h3 class="text-white text-xl sm:text-2xl font-light">No need for contracts</h3>
            <p class="text-gray-400 text-base sm:text-lg">
              Begin immediately, retain full copyright control over your designs, and forget about tricky contract terms.
            </p>
          </div>

          <!-- Tools Feature -->
          <div class="space-y-4 animate-feature">
            <div class="w-8 h-8 sm:w-10 sm:h-10 text-[#6AD5C3]">
              <Laptop class="w-full h-full" />
            </div>
            <h3 class="text-white text-xl sm:text-2xl font-light">Tools you know and love</h3>
            <p class="text-gray-400 text-base sm:text-lg">
              We use Figma and the Adobe Creative Suite, Slack to deliver you the best results.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { DollarSign, Users, Infinity, XCircle, FileText, Laptop } from 'lucide-vue-next'
import { gsap } from 'gsap'

const sectionRef = ref(null)
const hasAnimated = ref(false)

const animateFeatures = () => {
  if (hasAnimated.value) return

  const features = sectionRef.value.querySelectorAll('.animate-feature')
  gsap.set(features, { y: 50, opacity: 0 })
  gsap.to(features, {
    y: 0,
    opacity: 1,
    duration: 0.8,
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
        animateFeatures()
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
.animate-feature {
  opacity: 0;
  transform: translateY(50px);
}
</style>