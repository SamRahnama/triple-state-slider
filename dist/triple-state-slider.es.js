import { openBlock, createElementBlock, normalizeClass, createBlock, TransitionGroup, withCtx, Fragment, renderList, createElementVNode, createCommentVNode, createVNode } from "vue";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {
  name: "tripleStateSlider",
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
      default: 5e3
    }
  },
  data() {
    return {
      currentSlide: 0,
      nextSlide: 1,
      previousSlide: -1,
      slideInterval: null,
      animationType: "slide-right"
    };
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
      }, 5e3);
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
};
const _hoisted_1 = ["src"];
const _hoisted_2 = ["src"];
const _hoisted_3 = ["src"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(`triple-state-slider ${$props.containerClass}`)
  }, [
    $data.previousSlide >= 0 ? (openBlock(), createBlock(TransitionGroup, {
      key: 0,
      name: "ps-next",
      appear: ""
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList([$data.previousSlide], (_) => {
          return openBlock(), createElementBlock("div", {
            key: _,
            class: "previous-slide-wrapper"
          }, [
            createElementVNode("img", {
              src: $options.orderedSlides[$data.previousSlide].image,
              alt: "something . . ."
            }, null, 8, _hoisted_1)
          ]);
        }), 128))
      ]),
      _: 1
    })) : createCommentVNode("", true),
    createVNode(TransitionGroup, { name: "cs-next" }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList([$data.currentSlide], (_) => {
          return openBlock(), createElementBlock("div", {
            key: _,
            class: "current-slide-wrapper"
          }, [
            createElementVNode("img", {
              src: $options.orderedSlides[$data.currentSlide].image,
              alt: "something . . ."
            }, null, 8, _hoisted_2)
          ]);
        }), 128))
      ]),
      _: 1
    }),
    $data.nextSlide < $props.slides.length ? (openBlock(), createBlock(TransitionGroup, {
      key: 1,
      name: "ns-next"
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList([$data.nextSlide], (_) => {
          return openBlock(), createElementBlock("div", {
            key: _,
            class: "next-slide-wrapper"
          }, [
            createElementVNode("img", {
              src: $options.orderedSlides[$data.nextSlide].image,
              alt: "something . . ."
            }, null, 8, _hoisted_3)
          ]);
        }), 128))
      ]),
      _: 1
    })) : createCommentVNode("", true)
  ], 2);
}
var TripleStateSlider = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
var index = {
  install: (app, options) => {
    app.component("TripleStateSlider", TripleStateSlider);
  }
};
export { index as default };
