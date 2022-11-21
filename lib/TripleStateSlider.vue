<script setup lang="ts">
import {PropType} from "vue";
import Slide from "./types/Slide";
import {useSlide} from "./composables/slider";

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
let {orderedSlides,nextSlide,currentSlide,previousSlide} = useSlide(props)
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

