<template>
  <div :class="`triple-state-slider ${containerClass}`">
    <transition-group v-if="previousSlide>=0" name="ps-next" appear>
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
    },
    infinite: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      currentSlide: 0,
      nextSlide: 1,
      animationTypes: {
        NEXT: 'slide-right',
        PREVIOUS: 'slide-left'
      },
      previousSlide: -1,
      slideInterval: null,
      animationType: 'slide-right',
    }
  },
  methods: {
    nextSlideFunc() {
      this.animationType = this.animationTypes.NEXT;
      // this.resetSlideShow();
      if (this.infinite) {
        this.previousSlide = this.currentSlide;
        this.currentSlide = this.nextSlide;
        this.nextSlide = (this.nextSlide + 1) % this.slides.length;
      } else {
        if (this.nextSlide < this.slides.length) {
          this.previousSlide = this.currentSlide;
          this.currentSlide = this.nextSlide;
          this.nextSlide = this.nextSlide + 1;
        }
      }
    },
    previousSlideFunc() {
      this.animationType = this.animationTypes.PREVIOUS;
      // this.resetSlideShow()
      if (this.infinite) {
        this.nextSlide = this.currentSlide;
        this.currentSlide = this.previousSlide;
        this.previousSlide = (this.previousSlide - 1 + this.slides.length) % this.slides.length;
      } else {
        if (this.previousSlide >= 0) {
          this.nextSlide = this.currentSlide;
          this.currentSlide = this.previousSlide;
          this.previousSlide = this.previousSlide - 1;
        }
      }
    },
    startSlideShow() {
      this.slideInterval = setInterval(() => {
        this.nextSlideFunc();
      }, this.interval);
    },
    stopSlideShow() {
      clearInterval(this.slideInterval);
    },
    resetSlideShow() {
      this.stopSlideShow();
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