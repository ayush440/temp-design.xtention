<template>
  <div ref="sectionRef" class="min-h-0 bg-black p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
    <div class="mx-4 sm:mx-6 md:mx-20 lg:mx-14 xl:mx-auto max-w-7xl">
      <h1 class="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 leading-tight animate-element">
        Design so good it will <br class="hidden sm:block" /> make you <span class="text-[#6AD5C3]">swipe right</span>.
      </h1>

      <div class="grid grid-cols-1 gap-4 sm:gap-6">
        <!-- First row - 2 cards with 70/30 split -->
        <div class="grid grid-cols-1 xl:grid-cols-12 gap-4 sm:gap-6">
          <!-- First card - 70% width -->
          <div class="xl:col-span-8 group relative overflow-hidden rounded-3xl bg-[#1a1a1a] transition-all duration-300 animate-element">
            <div 
              class="w-full h-[400px]"
              :style="{
                backgroundImage: `url(${cards[0].imageUrl})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundColor: '#1a1a1a'
              }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0"></div>
              <div class="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                <h3 class="text-white text-lg sm:text-xl md:text-2xl font-medium mb-2 sm:mb-3">
                  {{ cards[0].title }}
                </h3>
                <p class="text-gray-400 text-sm sm:text-base max-w-prose">
                  {{ cards[0].description }}
                </p>
              </div>
            </div>
          </div>

          <!-- Second card - 30% width -->
          <div class="xl:col-span-4 group relative overflow-hidden rounded-3xl bg-[#1a1a1a] transition-all duration-300 animate-element">
            <div 
              class="w-full h-[400px]"
              :style="{
                backgroundImage: `url(${cards[1].imageUrl})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundColor: '#1a1a1a'
              }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0"></div>
              <div class="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                <h3 class="text-white text-lg sm:text-xl md:text-2xl font-medium mb-2 sm:mb-3">
                  {{ cards[1].title }}
                </h3>
                <p class="text-gray-400 text-sm sm:text-base max-w-prose">
                  {{ cards[1].description }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Second row - 3 cards -->
        <div class="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
          <div 
            v-for="(card, index) in cards.slice(2, 5)" 
            :key="index + 2"
            class="group relative overflow-hidden rounded-3xl bg-[#1a1a1a] transition-all duration-300 animate-element"
          >
            <div 
              class="w-full h-[400px]"
              :style="{
                backgroundImage: `url(${card.imageUrl})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundColor: '#1a1a1a'
              }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0"></div>
              <div class="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                <h3 class="text-white text-lg sm:text-xl md:text-2xl font-medium mb-2 sm:mb-3">
                  {{ card.title }}
                </h3>
                <p class="text-gray-400 text-sm sm:text-base max-w-prose">
                  {{ card.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';

const cards = ref([
  {
    title: 'Unlimited designs and revisions',
    description: 'Request unlimited designs and we will work on them one at a time until you are 100% satisfied.',
    imageUrl: '/src/assets/images/unlimited.png'
  },
  {
    title: 'Lightning speed delivery',
    description: 'Make your request, and you\'ll have it done in around two working days.',
    imageUrl: '/src/assets/images/24h.png',
  },
  {
    title: 'Top-notch work at a fraction of the cost',
    description: 'Say goodbye to costly traditional agencies. Get all your design needs covered for just $2,490/month.',
    imageUrl: '/src/assets/images/invoice.png'
  },
  {
    title: 'Design on your terms. Pause at any time',
    description: 'No more requests for the time being? Just hit pause and resume your subscription at a future date.',
    imageUrl: '/src/assets/images/play.png'
  },
  {
    title: 'Connect directly with your dedicated designer',
    description: 'Forget intermediaries, you & your team will directly collaborate with your designer on Slack.',
    imageUrl: '/src/assets/images/chat.png'
  }
]);

const sectionRef = ref(null);
const hasAnimated = ref(false);

const animateElements = () => {
  if (hasAnimated.value) return;

  const elements = sectionRef.value.querySelectorAll('.animate-element');
  gsap.set(elements, { y: 50, opacity: 0 });
  gsap.to(elements, {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.1,
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
.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
}

.animate-element {
  opacity: 0;
  transform: translateY(50px);
}
</style>