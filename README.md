[![build status](https://github.com/SamRahnama/triple-state-slider/actions/workflows/publish.yml/badge.svg)](https://github.com/SamRahnama/triple-state-slider/actions/workflows/publish.yml)
[![codecov](https://codecov.io/gh/SamRahnama/triple-state-slider/branch/master/graph/badge.svg?token=RJG266GH9F)](https://codecov.io/gh/SamRahnama/triple-state-slider)
# vue triple state slider

well this is slider that shows three states: previous, current and next slides written in typescript .

### preview
for helping to update this library after forking the repo, try to run ``npm run dev``.
![triple-state-slider-preview](https://user-images.githubusercontent.com/18219117/167255897-3a2b18aa-726e-4e59-881b-bcf09ec6f19c.gif)

### install via npm

`npm i @samrahnama/triple-state-slider`

### import slider component

```ts
import {createApp} from 'vue'
import {TripleStateSlider} from '@samrahnama/triple-state-slider'
import "@samrahnama/triple-state-slider/dist/main.css"


const app = createApp(App)
app.component('Slider',TripleStateSlider)
```

### inside template:

```vue

<triple-state-slider :slides="sliderImages"/>
```

### inside script:

```vue
<script setup lang="ts">
import type Slide from "@samrahnama/triple-state-slider/dist/types/Slide";

const sliderImages: Slide = [
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
    < /script>
 ```

### props

| name                 | required | type    | default | description                                                                                       |
|----------------------|:---------|:--------|---------|---------------------------------------------------------------------------------------------------|
| slides               | yes      | array   | -       | the `slides` is an array of objects, the `image` property of object is the src of the each slide. |
| interval             | no       | number  | 5000    | this is a timer for auto sliding, `default : 5000ms`                                              |
| containerClass       | no       | string  | -       | you can use this prop to set container class of slider.                                           |
| showButtons(* soon*) | no       | boolean | false   | hides/shows next and previous buttons.                                                            |
| infinite             | no       | boolean | true    | when its true slider doesn't stop.                                                                |

