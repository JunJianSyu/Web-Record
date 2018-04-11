/**
 * Author: JunJianSyu
 * Email: junjian1992@gmail.com
 * Date: 2018/4/11
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '@/components/HelloWorld'

Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history',
  routes: [
    {
      path: '/hello',
      component: Hello
    }
  ]
})
export default router
