<script setup lang="ts">
import {computed, defineProps, onMounted, PropType, ref} from "vue";
import Slide from "./types/Slide";

const props = defineProps({
  slides: {
    type: Array as PropType<Slide[]>,
    required: true
  },
  containerClass: {
    type: String,
  },
  interval: {
    type: Number,
    default: 5000
  },
  infinite:{
    type: Boolean,
    default: true
  }
})

let currentSlide = ref(0)
let nextSlide = ref(1)

const animationTypes = {
  NEXT: 'slide-right',
  PREVIOUS: 'slide-left'
}
const orderedSlides = computed(() => {
  return props.slides.slice().sort((a, b) => a.order - b.order);
})
let previousSlide = ref((-1 + orderedSlides.value.length ) % orderedSlides.value.length)
let slideInterval = setInterval(()=>{})
let animationType = ref('slide-right')

function nextSlideFunc() {
  animationType.value = animationTypes.NEXT;
  if (props.infinite) {
    previousSlide.value = currentSlide.value;
    currentSlide.value = nextSlide.value;
    nextSlide.value = (nextSlide.value + 1) % props.slides.length;
  } else {
    if (nextSlide.value < props.slides.length) {
      previousSlide.value = currentSlide.value;
      currentSlide.value = nextSlide.value;
      nextSlide.value = nextSlide.value + 1;
    }
  }
}

function previousSlideFunc() {
  animationType.value = animationTypes.PREVIOUS;
  // this.resetSlideShow()
  if (props.infinite) {
    nextSlide.value = currentSlide.value;
    currentSlide.value = previousSlide.value;
    previousSlide.value = (previousSlide.value - 1 + props.slides.length) % props.slides.length;
  } else {
    if (previousSlide.value >= 0) {
      nextSlide.value = currentSlide.value;
      currentSlide.value = previousSlide.value;
      previousSlide.value = previousSlide.value - 1;
    }
  }
}

function startSlideShow() {
  slideInterval = setInterval(nextSlideFunc, props.interval);
}

function stopSlideShow() {
  clearInterval(slideInterval);
}

onMounted(() => {
  startSlideShow()
})

</script>

<template>
  <div :class="`triple-state-slider ${props.containerClass}`">
    <transition-group  name="ps-next" appear>
      <div v-for="_ in [previousSlide]" :key="_" class="previous-slide-wrapper">
        <img :src="orderedSlides[previousSlide].image" :alt="orderedSlides[previousSlide].title">
      </div>
    </transition-group>

    <transition-group name="cs-next">
      <div v-for="_ in [currentSlide]" :key="_" class="current-slide-wrapper">
        <img :src="orderedSlides[currentSlide].image" :alt="orderedSlides[currentSlide].title">
      </div>
    </transition-group>

    <transition-group v-if="nextSlide < slides.length" name="ns-next">
      <div v-for="_ in [nextSlide]" :key="_" class="next-slide-wrapper">
        <img :src="orderedSlides[nextSlide].image" :alt="orderedSlides[nextSlide].title">
      </div>
    </transition-group>
  </div>
</template>

<style scoped>

</style>

