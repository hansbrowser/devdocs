# Fontawesome
- install vue-cli-plugin-fontawesome
- add .npmrc file for pro-version

```bash
# https://fontawesome.com/how-to-use/use-with-node-js#pro
@fortawesome:registry=https://npm.fontawesome.com/TOKEN

```
- [extra info](https://github.com/FortAwesome/Font-Awesome/blob/master/UPGRADING.md#50x-to-510)
- add package
```bash
"@fortawesome/pro-solid-svg-icons": "^5.7.1",
```

- @/plugins/fontawesome.js
```js
import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faBarcodeRead,
  faBookmark,
  faCog,
  faChevronDoubleLeft,
  faHeart,
  faShareSquare
} from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faBars,
  faBarcodeRead,
  faBookmark,
  faCog,
  faChevronDoubleLeft,
  faHeart,
  faShareSquare
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

```
