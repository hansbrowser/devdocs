# Vuex refactoring

## Old
```js
import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		counter: 0
	},
	mutations: {
		setCounter(state, payload) {
			state.counter = payload;
		}
	},
	actions: {},
	getters: {
		getCounter(state) {
			return state.counter;
		}
	},
	modules: {}
})

```

## New
```js
import Vue from "vue";
import Vuex from "vuex"
import {GET_COUNTER, SET_COUNTER} from "./mutation-types";

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		counter: 0
	},
	mutations: {
		[SET_COUNTER]: (state, payload) => (state.counter = payload);
	},
	actions: {},
	getters: {
		[GET_COUNTER]: (state) => state.counter;
	},
	modules: {}
})

```

## component
```js
import {GET_COUNTER, SET_COUNTER} from "@/store/mutation-types";
import {mapGetters, mapMutations} from "vuex";

export default {
	name: "Home",
	methods: {
		...mapMutations({
			increment: SET_COUNTER
		})
	},
	computed: {
		...mapGetters({
			counter: GET_COUNTER
		})
	}
}
```
