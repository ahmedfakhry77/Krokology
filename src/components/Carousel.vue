<template>
  <div class="wrapper-section">
    <div class="title">What Our Customer Said</div>
    <div
      class="carousel-wrapper"
      @touchstart="startTouch"
      @touchmove="moveTouch"
    >
      <button class="carousel-arrow left" @click="prevSlide">‹</button>
      <div ref="carousel" class="carousel">
        <CarouselCard v-for="item in items" :key="item.title" :item="item" />
      </div>
      <button class="carousel-arrow right" @click="nextSlide">›</button>
    </div>
  </div>
  <div class="Autopaly">
    <button
      v-if="startAutoplayInterval"
      @click="
        stopAutoplay();
        (startAutoplayInterval = false);
      "
    >
      End Autopaly
    </button>
    <button
      v-else
      @click="
        startAutoplay();
        (startAutoplayInterval = true);
      "
    >
      Start Autopaly
    </button>
  </div>
</template>

<script setup>
import { ref, computed, nextTick, onMounted, onUnmounted } from "vue";
import { useCarouselStore } from "@/stores/carousel";
import CarouselCard from "./CarouselCard.vue";
const carouselStore = useCarouselStore();
const items = computed(() => carouselStore.items);
const carousel = ref(null);

let startX = 0;
let currentX = 0;
let autoplayInterval = null;
const autoplayIntervalMs = 4000; // Change this value for the autoplay interval (in milliseconds)

const scrollToSlide = async (direction) => {
  await nextTick();
  const scrollAmount = carousel.value.clientWidth / 3;
  if (direction === "next") {
    carousel.value.scrollLeft += scrollAmount;
  } else {
    carousel.value.scrollLeft -= scrollAmount;
  }
};

const nextSlide = () => {
  scrollToSlide("next");
};

const prevSlide = () => {
  scrollToSlide("prev");
};
const startAutoplayInterval = ref(false);
const startAutoplay = () => {
  autoplayInterval = setInterval(() => {
    nextSlide();
  }, autoplayIntervalMs);
};

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
    autoplayInterval = null;
    startAutoplayInterval.value = false;
  }
};

onUnmounted(() => {
  stopAutoplay();
});
</script>
