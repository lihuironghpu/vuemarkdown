import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import MarkDown from '@/components/MarkDown'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/markdown',
      name: 'MarkDown',
      component: MarkDown
    }
  ]
})
