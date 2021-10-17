# Snippets

## Vue template

```html
<template>
	<div></div>
</template>
```

```js
<script>
import { mapState, mapActions, mapGetters } from "vuex";
import { myComponent } from "../components/components.vue";

export default {
  components: { myComponent },
  props: {
    id: {
      type: Number,
	  required: true,
	  validator: function(value) {
	    // The value must match one of these strings
	    return ['success', 'warning', 'danger'].indexOf(value) !== -1
	}
    }
  },
  data: function() {
    return {
      myAttribute: false,
      myArray: [
        { value: "s", text: "Small" },
        { value: "m", text: "Medium" },
        { value: "l", text: "Large" }
      ],
      myObject: {
        x: -0.3,
        y: 0,
        z: 0
      }
    };
  },
  computed: {
    ...mapState("myStore", ["myItem1", "myItem2"]),
    ...mapGetters("myStore", ["myItem3"]),
    myComputed: function() {
      return this.myObject.x * 3;
    }
  },
  watch: {
    myItem1: function(newItem1, oldItem1) {
      // do something on state change myItem1
    }
  },
  mounted: function() {
    // do something on mounted
  },
  created: function() {
    // do something on created
  },
  methods: {
    ...mapActions("myStore", ["initStore"]),
    myMethod() {
      this.myAttribute = true;
    }
  }
};
</script>
```

```css
<style scoped>
</style>
```
