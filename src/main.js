import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { NavBar } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { Icon } from 'vant';
import { Cell, CellGroup } from 'vant';
import { IndexBar, IndexAnchor } from 'vant';
import { Divider } from 'vant';
import { Image as VanImage } from 'vant';
import { Lazyload } from 'vant';
import { Grid, GridItem } from 'vant';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Lazyload);
Vue.use(VanImage);
Vue.use(Divider);
Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Icon);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
