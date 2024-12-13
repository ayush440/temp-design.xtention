<template>
  <section ref="sectionRef" class=" bg-black px-4 ">
    <div class="container mx-auto max-w-3xl my-28">
      <div class="space-y-3">
        <div 
        
          v-for="(faq, index) in faqs" 
          :key="index"
          class="border border-zinc-800 rounded-lg overflow-hidden animate-faq"
        >
          <button
            @click="toggleFaq(index)"
            class="w-full p-6 flex justify-between items-center text-le transition-colors"
            :aria-expanded="expandedIndex === index"
          >
            <h3 class="text-xl text-white font-medium tracking-wide">{{ faq.question }}</h3>
            <ChevronDownIcon
              class="w-5 h-5 text-zinc-400 transition-transform duration-200"
              :class="{ 'rotate-180': expandedIndex === index }"
            />
          </button>
          <transition
            enter-active-class="transition-all duration-200 ease-out"
            leave-active-class="transition-all duration-200 ease-in"
            enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-2"
          >
            <div v-if="expandedIndex === index" class="px-6 pb-6">
              <p class="text-zinc-400 leading-relaxed">{{ faq.answer }}</p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ChevronDownIcon } from 'lucide-vue-next'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const expandedIndex = ref(null)

const toggleFaq = (index) => {
  expandedIndex.value = expandedIndex.value === index ? null : index
}

const faqs = [
  {
    question: "Why not hire a full-time designer?",
    answer: "Hiring a full-time designer can be expensive and may not be necessary for all businesses. Our service provides the flexibility of professional design work without the overhead of a full-time employee.",
  },
  {
    question: "What is the average turnaround time?",
    answer: "It takes on average two business days to receive your design request. However, depending on the complexity of your request, the turnaround can differ.",
  },
  {
    question: "How many designs can I request?",
    answer: "Once subscribed, you can request as many designs and revisions as you would like, and they will be delivered one at a time.",
  },
  {
    question: "How does the pause feature work?",
    answer: "We understand that your design needs may vary from month to month. If you find yourself with only a few design requests, pausing your subscription is a convenient option. Our billing cycles operate on a monthly basis. For example, if you subscribe and utilize the service for 15 days prior to pausing, you will have 15 days of unused service remaining. These remaining days can be utilized whenever you need them in the future, within a maximum period of 3 months. Please note that you can pause your subscription up to two times during your subscription period.",
  },
]

onMounted(() => {
  const faqItems = gsap.utils.toArray('.animate-faq')
  
  gsap.set(faqItems, {
    y: 50,
    opacity: 0
  })

  ScrollTrigger.batch(faqItems, {
    start: 'top bottom-=100',
    onEnter: batch => gsap.to(batch, {
      opacity: 1,
      y: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power3.out'
    }),
    onLeaveBack: batch => gsap.to(batch, {
      opacity: 0,
      y: 50,
      stagger: 0.1,
      duration: 0.5,
      ease: 'power2.in'
    })
  })
})

onUnmounted(() => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})
</script>

<style scoped>
.animate-faq {
  opacity: 0;
  transform: translateY(50px);
}
</style>