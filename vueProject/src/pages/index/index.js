/**
 * Author: JunJianSyu
 * Email: junjian1992@gmail.com
 * Date: 2018/4/10
 */

import Vue from 'vue'
import index from './index.vue'
import router from './router'

// router Event
router.beforeEach((to, from, next) => {
  console.log(to)
  next()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(index)
})
