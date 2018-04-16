import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AboutMe from '@/components/AboutMe'
import Firm from '@/components/Firm'
import VuePresentation from '@/components/VuePresentation'
Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'AboutMe',
      component: AboutMe
    },
    {
      path: '/',
      name: 'Firm',
      component: Firm
    },
    {
      path: '/',
      name: 'VuePresentation',
      component: VuePresentation
    }
  ]
})

router.beforeEach((to, from, next) => {
  //console.log('In before each')
if(to.path != '/'){
  next({path: '/'})
} else{
  next()
}
})
export default router

