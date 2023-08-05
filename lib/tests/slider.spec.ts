import {describe, expect, test} from "vitest";
import Slide from "../types/Slide";

const slides: Slide[] = [
    {
        order: 1,
        image: 'https://picsum.photos/1280/720?random=1',
        title: 'just a title',
    },
    {
        order: 2,
        image: 'https://picsum.photos/1280/720?random=2',
        title: 'just a title',
    },
    {
        order: 3,
        image: 'https://picsum.photos/1280/720?random=3',
        title: 'just a title',
    },
    {
        order: 4,
        image: 'https://picsum.photos/1280/720?random=4',
        title: 'just a title',
    },
    {
        order: 5,
        image: 'https://picsum.photos/1280/720?random=5',
        title: 'just a title',
    },
    {
        order: 6,
        image: 'https://picsum.photos/1280/720?random=6',
        title: 'just a title',
    },
]
import {useSlide} from "../composables/slider";

describe('slider test', () => {
    test('initial test', () => {
        const slider = useSlide({slides})
        expect(slider.currentSlide.value).toBe(0)
        expect(slider.previousSlide.value).toBe(slides.length - 1)
        expect(slider.nextSlide.value).toBe(1)
    })
    test('next slide test', () => {
        const slider = useSlide({slides})
        slider.nextSlideFunc()
        expect(slider.currentSlide.value).toBe(1)
        expect(slider.nextSlide.value).toBe(2)
        expect(slider.previousSlide.value).toBe(0)
    })
    test('previous slide test', () => {
        const slider = useSlide({slides, infinite: true})
        slider.previousSlideFunc()
        expect(slider.previousSlide.value).toBe(slides.length - 2)
        expect(slider.currentSlide.value).toBe(slides.length - 1)
        expect(slider.nextSlide.value).toBe(0)
    })

})