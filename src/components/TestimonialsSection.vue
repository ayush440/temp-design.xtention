<template>
  <div ref="sectionRef" class="min-h-0 bg-black p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
    <div class="mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16 2xl:mx-64 flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
      <!-- Left Column -->
      <div class="w-full lg:w-1/2 flex flex-col justify-between">
        <h1 class="text-white text-3xl sm:text-4xl md:text-5xl font-light mb-8 sm:mb-12 md:mb-16 animate-element">
          Your design journey in
          <span class="text-[#6AD5C3] block">three effortless steps.</span>
        </h1>

        <div class="space-y-4 sm:space-y-6 md:space-y-8">
          <div 
            v-for="(step, index) in steps" 
            :key="index"
            @click="selectedStep = index"
            :class="[ 
              'flex items-center gap-4 p-4 sm:p-6 rounded-xl sm:rounded-2xl cursor-pointer transition-all duration-300 animate-element', 
              selectedStep === index ? 'bg-[#111111]' : 'hover:bg-[#111111]/50' 
            ]"
          >
            <div class="flex-shrink-0 w-12 h-12 rounded-full bg-[#6AD5C3] flex items-center justify-center">
              <component 
                :is="step.icon" 
                class="w-6 h-6 text-black"
                :stroke-width="2.5"
              />
            </div>
            <p class="text-white text-base sm:text-lg">{{ step.text }}</p>
          </div>
        </div>
      </div>

      <!-- Right Column -->
      <div class="w-full lg:w-1/2 flex justify-center items-center bg-[#181818] rounded-3xl sm:rounded-3xl mt-8 lg:mt-0 animate-element overflow-hidden">
        <div class="w-full overflow-hidden flex justify-center items-center">
          <img 
            v-for="(image, index) in stepImages" 
            :key="index"
            :src="image"
            :alt="`Step ${index + 1}`"
            v-show="selectedStep === index"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Hash, MessageCircle, CheckCircle } from 'lucide-vue-next'
import { gsap } from 'gsap'

const selectedStep = ref(0)
const sectionRef = ref(null)
const hasAnimated = ref(false)

const steps = [
  {
    icon: Hash,
    text: 'Subscribe and get immediate access to an exclusive Slack channel, connecting you and your team with a dedicated designer.'
  },
  {
    icon: MessageCircle,
    text: "Start chatting about the work you need, and we'll get started right away."
  },
  {
    icon: CheckCircle,
    text: "Once your first request is finished, it's time for the next step: request a revision or move on to another task."
  }
]

const stepImages = [
  '/src/assets/images/test1.png',
  '/src/assets/images/test3.png',
  '/src/assets/images/test2.png',
]

const animateElements = () => {
  if (hasAnimated.value) return;

  const elements = sectionRef.value.querySelectorAll('.animate-element');
  gsap.set(elements, { y: 50, opacity: 0 });
  gsap.to(elements, {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out',
    onComplete: () => {
      hasAnimated.value = true;
    }
  });
};

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !hasAnimated.value) {
        animateElements();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }

  onUnmounted(() => {
    observer.disconnect();
  });
});
</script>

<style scoped>
.animate-element {
  opacity: 0;
  transform: translateY(50px);
}
</style>

