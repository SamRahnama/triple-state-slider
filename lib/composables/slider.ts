import {computed, onMounted, ref} from "vue";
import Slide from "../types/Slide";

export function useSlide(props: any) {

    let currentSlide = ref(0)
    let nextSlide = ref(1)

    const animationTypes = {
        NEXT: 'slide-right',
        PREVIOUS: 'slide-left'
    }
    const orderedSlides = computed(() => {
        return props.slides.slice().sort((a:Slide, b:Slide) => a.order - b.order);
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
    return {
        currentSlide,
        nextSlide,
        previousSlide,
        orderedSlides
    }
}