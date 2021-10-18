# Introduction vue

[Using Types in vuejs, vscode](https://medium.com/@znck/type-vue-without-typescript-b2b49210f0b)

[Test Driven Development](https://medium.com/magnetis-backstage/working-an-application-in-vue-js-with-tdd-an-extensive-guide-for-people-who-have-time-part-1-3be791dafa2b)

[Time saving tips](https://michaelnthiessen.com/26-time-saving-tips/)

# Replace jQuery with Vue

- https://www.smashingmagazine.com/2018/02/jquery-vue-javascript/

# Lazy loading views --> router pages

- every page in a seperate chunk (automaticly sets it to prefetch)
  ```bash
  const ProductView = () =>import(/* webpackChunkName: "product" */ "@/views/product/Product.vue");
  ```
# Lazy loading images --> v-lazy-image
[Lazy load images with v-lazy-image](https://vuedose.tips/tips/lazy-loading-images-with-v-lazy-image/)

# Debugging Templates in Vue.js
[tip link](https://vuedose.tips/tips/debugging-templates-in-vue-js/)

# Handling Dialogs with Vue Router
[Handling Dialogs with Vue Router](https://dev.to/berniwittmann/handling-dialogs-with-vue-router-29ji?utm_campaign=Vue.js%20News&utm_medium=email&utm_source=Revue%20newsletter)

# Filters
```js
Vue.filter('toFixed', function (price, limit) {
    return price.toFixed(limit);
});

Vue.filter('toUSD', function (price) {
    return `$${price}`;
});

new Vue({
    el: '#app',

    data: {
        price: 435.333
    }
});
```
```html
<div id="app">
  <span>{{ price | toFixed(2) | toUSD }}</span>
</div>
```