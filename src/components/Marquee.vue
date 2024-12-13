<template>
  <div class="bg-black py-8 mx-64 bg-gradient-to-l-black">
    <div class="relative overflow-hidden" ref="scrollContainer">
      <div class="flex whitespace-nowrap" :style="marqueeStyle">
        <div v-for="(image, index) in duplicatedImages" :key="`image-${index}`" 
             class="w-[200px] h-24 mx-12 inline-flex items-center justify-center shrink-0">
          <img 
            :src="image.src" 
            :alt="image.alt" 
            class="h-10 w-auto object-contain"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, onUnmounted } from 'vue';

const images = ref([
  { src: '/src/assets/images/marquee/image 15.png', alt: 'BSNLC Logo' },
  { src: '/src/assets/images/marquee/image 14.png', alt: 'Mati Trading Logo' },
  { src: '/src/assets/images/marquee/image 7.png', alt: 'Way2a Logo' },
  { src: '/src/assets/images/marquee/Logo_1 1.png', alt: 'Janta Logo' },
]);

const scrollContainer = ref(null);
const scrollPosition = ref(0);
const scrollSpeed = 50; // Adjust this value to change the scroll speed

const duplicatedImages = computed(() => {
  const minWidth = scrollContainer.value?.offsetWidth || 0;
  const imageSetWidth = images.value.length * (200 + 24 * 2);
  const repeatCount = Math.ceil(minWidth / imageSetWidth) + 1; // Ensure enough images
  return Array(repeatCount).fill(images.value).flat();
});

const totalWidth = computed(() => {
  return images.value.length * (200 + 24 * 2); // width + left margin + right margin
});

const marqueeStyle = computed(() => {
  return {
    transform: `translateX(${-scrollPosition.value}px)`,
  };
});

let animationFrame;

const updateScroll = () => {
  scrollPosition.value += 1;
  if (scrollPosition.value >= totalWidth.value * duplicatedImages.value.length / images.value.length) {
    scrollPosition.value = 0; // Reset only after the entire duplicated sequence scrolls
  }
  animationFrame = requestAnimationFrame(updateScroll);
};

onMounted(async () => {
  const imageModules = import.meta.glob('/src/assets/images/logos/*.png');

  for (const path in imageModules) {
    const index = images.value.findIndex(img => img.src.includes(path.split('/').pop()));
    if (index !== -1) {
      const module = await imageModules[path]();
      images.value[index].src = module.default;
    }
  }

  // Start the animation
  animationFrame = requestAnimationFrame(updateScroll);
});

onUnmounted(() => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame);
  }
});
</script>

<style scoped>
.overflow-hidden {
  overflow: hidden;
}

.whitespace-nowrap {
  white-space: nowrap;
}

img {
  background: transparent;
  max-width: none;
}
</style>
