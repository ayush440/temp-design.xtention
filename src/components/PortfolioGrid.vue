<template>
  <div class="bg-black min-h-full py-8 sm:py-12 md:py-16 lg:py-20 relative ">
    <!-- Main Gallery Container -->
    <div class="max-w-[95vw] mx-auto relative">
      <!-- Navigation Buttons -->
      <button
        @click="manualScroll('left')"
        class="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full bg-black/50 border border-white/10 hover:bg-black/80 transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft class="w-4 h-4 sm:w-6 sm:h-6 text-white" />
      </button>
      <button
        @click="manualScroll('right')"
        class="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full bg-black/50 border border-white/10 hover:bg-black/80 transition-colors"
        aria-label="Next image"
      >
        <ChevronRight class="w-4 h-4 sm:w-6 sm:h-6 text-white" />
      </button>

      <!-- Scrollable Container -->
      <div
        ref="scrollContainer"
        class="overflow-x-auto flex snap-x snap-mandatory scrollbar-hide"
      >
        <div
          v-for="(image, index) in images"
          :key="index"
          :class="['flex-shrink-0 snap-center relative overflow-hidden group', image.class]"
        >
          <!-- Image Container -->
          <div class="relative">
            <img
              :src="image.url"
              :alt="image.alt"
              class="w-auto h-auto max-h-[60vh] object-contain"
              @load="onImageLoad"
            />
            <!-- Permanent Dark Overlay for Better Text Visibility -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none"></div>
            <!-- Hover Overlay -->
            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <!-- Text Container -->
            <div class="absolute bottom-0 left-0 right-0 p-4 text-white z-10">
              <h3 class="text-lg sm:text-xl font-semibold text-white drop-shadow-lg">
                {{ image.alt }}
              </h3>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Text -->
      <div class="mt-4 sm:mt-6 md:mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center text-white/80 px-2 sm:px-4">
        <p class="text-base sm:text-lg mb-2 sm:mb-0">
          Partnered with global industry leaders.
          <span class="text-[#6AD5C3]">You're in good hands.</span>
        </p>
        <p class="flex items-center gap-2 text-xs sm:text-sm">
          Use buttons to navigate
          <ArrowLeftRight class="w-3 h-3 sm:w-4 sm:h-4" />
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ChevronLeft, ChevronRight, ArrowLeftRight } from 'lucide-vue-next';

// References
const scrollContainer = ref(null);

// Array of images for the gallery
const images = [
  { url: '/src/assets/images/Slider2.webp', alt: '' },
  { url: '/src/assets/images/Slider1.webp', alt: ''},
  { url: '/src/assets/images/Slider3.webp', alt: '' },
  { url: '/src/assets/images/Slider4.webp', alt: '' },
  { url: '/src/assets/images/Slider5.webp', alt: '' },
  { url: '/src/assets/images/Slider6.webp', alt: '', class: 'mx-5' },
  { url: '/src/assets/images/Slider7.webp', alt: '', class: 'mx-5' },
  { url: '/src/assets/images/Slider8.webp', alt: '', class: 'mx-5' },
  { url: '/src/assets/images/Slider9.webp', alt: '', class: 'mx-5' },
  { url: '/src/assets/images/Slider10.webp', alt: '', class: 'mx-5' },
  { url: '/src/assets/images/Slider11.webp', alt: '', class: 'mx-5' },
  { url: '/src/assets/images/Slider12.webp', alt: '', class: 'mx-5' },
  { url: '/src/assets/images/Slider13.webp', alt: '', class: 'mx-5' },
  { url: '/src/assets/images/Slider14.webp', alt: '', class: 'mx-5' }
];

// Manual scroll function
const manualScroll = (direction) => {
  if (scrollContainer.value) {
    const scrollAmount = scrollContainer.value.clientWidth * 0.8;
    const newPosition = direction === 'left' 
      ? scrollContainer.value.scrollLeft - scrollAmount
      : scrollContainer.value.scrollLeft + scrollAmount;
    
    scrollContainer.value.scrollTo({
      left: newPosition,
      behavior: 'smooth'
    });
  }
};

// Function to handle image load
const onImageLoad = (event) => {
  const img = event.target;
  const container = img.parentElement.parentElement;
  container.style.width = `${img.width}px`;
  container.style.height = `${img.height}px`;
};
</script>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>