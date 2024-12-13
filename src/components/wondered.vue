<template>
  <div ref="sectionRef" class="min-h-0 bg-black flex items-center justify-center -mt-16">
    <div class="max-w-7xl w-full bg-[#111111] rounded-[40px] p-16 shadow-2xl my-52">
      <div class="space-y-12 max-w-lg mx-auto">
        <p class="text-white text-4xl font-light leading-tight animate-text">
          Ever wondered how some startups capture all the spotlight while 
          others are left behind? We'll let you in on a little secret - 
          it's all about design. That's where we come in.
        </p>

        <p class="text-white text-4xl font-light leading-tight animate-text">
          We help founders like you build innovative digital products that have 
          high conversion rates, retain customers and attract investors.
        </p>

        <p class="text-white text-4xl font-light leading-tight animate-text">
          Do you want your product to be the next big thing in the digital world?
        </p>

        <p class="text-[#6AD5C3] text-4xl font-light animate-text">
          Welcome to xtention.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';

const sectionRef = ref(null);
let observer = null;

const animateElements = () => {
  const animatedElements = sectionRef.value.querySelectorAll('.animate-text');
  gsap.set(animatedElements, { y: 50, opacity: 0 });
  gsap.to(animatedElements, {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.3,
    ease: 'power3.out'
  });
};

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateElements();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
.animate-text {
  opacity: 0;
  transform: translateY(50px);
}
</style>