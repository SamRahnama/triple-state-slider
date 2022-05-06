<template>
  <div :class="`triple-state-slider ${containerClass}`">
    <transition-group v-if="previousSlide>=0" name="ps-next" appear>
      <div v-for="_ in [previousSlide]" :key="_" class="previous-slide-wrapper">
        <img :src="orderedSlides[previousSlide].image" alt="something . . .">
      </div>
    </transition-group>

    <transition-group name="cs-next">
      <div v-for="_ in [currentSlide]" :key="_" class="current-slide-wrapper">
        <img :src="orderedSlides[currentSlide].image" alt="something . . .">
      </div>
    </transition-group>

    <transition-group v-if="nextSlide < slides.length" name="ns-next">
      <div v-for="_ in [nextSlide]" :key="_" class="next-slide-wrapper">
        <img :src="orderedSlides[nextSlide].image" alt="something . . .">
      </div>
    </transition-group>
  </div>
</template>
<script>

export default {
  name: 'tripleStateSlider',
  props: {
    slides: {
      type: Array,
      required: true
    },
    containerClass: {
      type: String
    },
    interval: {
      type: Number,
      default: 5000
    }
  },
  data() {
    return {
      currentSlide: 0,
      nextSlide: 1,
      previousSlide: -1,
      slideInterval: null,
      animationType: 'slide-right',
    }
  },
  methods: {
    nextSlideFunc() {
      if (this.nextSlide < this.slides.length) {
        this.previousSlide = this.currentSlide;
        this.currentSlide = this.nextSlide;
        this.nextSlide = this.nextSlide + 1;
      }
    },
    previousSlideFunc() {
      this.nextSlide = this.currentSlide;
      this.currentSlide = this.previousSlide;
      this.previousSlide = (this.previousSlide - 1 + this.slides.length) % this.slides.length;
    },
    startSlideShow() {
      this.slideInterval = setInterval(() => {
        this.nextSlideFunc();
      }, 5000);
    },
    stopSlideShow() {
      clearInterval(this.slideInterval);
    }
  },
  mounted() {
    this.startSlideShow();
  },
  computed: {
    orderedSlides() {
      return this.slides.slice().sort((a, b) => a.order - b.order);
    }
  }
}
</script>