import Vue from 'vue'
import Router from 'vue-router'
import goods from '../components/goods.vue'
import ratings from '../components/ratings.vue'
import sellers from '../components/seller.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'goods',
      component: goods
    },
    {
      path: '/goods',
      component: goods
    },
    {
      path: '/ratings',
      component: ratings
    },
    {
      path: '/sellers',
      component: sellers
    }
  ]
})
