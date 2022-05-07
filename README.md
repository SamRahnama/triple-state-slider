# vue triple state slider
well this is slider that shows three states: previous, current and next slides.

### install via npm
`npm i @samrahnama/triple-state-slider`

### import slider component
```vue
import { createApp } from 'vue'
import TripleStateSlider from '@samrahnama/triple-state-slider'
import "@samrahnama/triple-state-slider/dist/main.css"


const app = createApp(App)
app.use(TripleStateSlider)
```
### inside template:
`    <triple-state-slider :slides="sliderImages" />
`

### inside script:

```js
<script setup>

const sliderImages = [
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

