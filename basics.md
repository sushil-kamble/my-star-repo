# Vue basics

## Installation

```bash
vue create my-app
```

> eslint with error prevention is OK. Make sure you add [jsconfig.json](https://gist.github.com/sushil-kamble/128b1108abbfbb45098031653d498d6c) and [.prettierrc](https://gist.github.com/sushil-kamble/128b1108abbfbb45098031653d498d6c)

### Vue entry point - `src/main.js`

```js
import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");
```

## Example

### Basic Counter - Option Api

```vue

<template>
  <div>
    <h1>Counter</h1>
    <h2>{{count}}</h2>
    <button
        @click="increment">Click Me
    </button>
  </div>
</template>

<script>
export default {
  name: "Counter",
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increment() {
      this.count++;
    }
  }
};
</script>
```

### Composition Api - Counter

```vue

<template>
  <div>
    <button
        @click="increment">
      Counter
    </button>
    <h1>{{counter}}</h1>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  setup() {
    const counter = ref(0);
    const increment = () => {
      counter.value++;
    };
    return {counter, increment};
  },
};
</script>
```

### Composition Api - Array

```vue

<template>
  <div>
    <button @click="add">
      Add to Array
    </button>
    <h1>{{counterArray}}</h1>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  setup() {
    const counterArray = ref([]);
    const add = () => {
      counterArray.value.push(counterArray.value.length + 1);
    };
    return {counterArray, add};
  },
};
</script>
```

### Composition Api - Pass Data, Mounted and Computed

```vue
<!-- Parent -->
<template>
  <div>
    <button @click="add">Add to Array</button>
    <Child :arr="counterArray"/>
  </div>
</template>

<script>
import {onMounted, ref} from "vue";
import Child from "../components/Child.vue";

export default {
  components: {
    Child,
  },
  setup() {
    const counterArray = ref([1, 2]);
    onMounted(() => {
      counterArray.value = [...counterArray.value, 3];
    });
    const add = () => {
      counterArray.value.push(counterArray.value.length + 1);
    };
    return {counterArray, add};
  },
};
</script>

```

```vue
<!-- Child -->
<template>
  <h1>Child Component</h1>
  <h2>Array: {{ arr }}</h2>
  <h2>Power of Array: {{ powerOfArray }}</h2>
</template>

<script>
import {computed} from "vue";

export default {
  props: {arr: Array},
  // because props are reactive, you cannot use ES6 destructuring
  // because it will remove props reactivity
  setup(props) {
    const powerOfArray = computed(() => {
      return props.arr.map((x) => x ** 2);
    });
    return {powerOfArray};
  },
};
</script>

```

## Concept

### Lifecycle

`created`- Called after Component is created.

`mounted` - Good for API calls

### Computed

Used to compute from data object

```js
computed: {
    mulCountBy5()
    {
        return this.count * 5
    }
}
```

## Vue Router

`<router-view/>` will display the component that corresponds to the url.

If there is `user/:id` route

```html

<router-link :to="{name: 'user', params: {id: '1'}}"> Goto User 1</router-link>
```

```js
this.$router.push({name: "user", params: {id: "1"}});
```

More examples go [here](https://next.router.vuejs.org/guide/essentials/navigation.html)
