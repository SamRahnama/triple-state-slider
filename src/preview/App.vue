<template>
<div>
  <TripleStateSlider :slides="slides" />
</div>
</template>

<script setup lang="ts">
import TripleStateSlider from "../../lib/TripleStateSlider.vue";
import "../../dist/main.css"
import Slide from "../../lib/types/Slide";
let slides: Slide[] = [
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
</script>

<style scoped>

</style>