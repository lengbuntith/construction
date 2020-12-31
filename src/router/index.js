import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/career',
    name: 'Career',
    component: () => import('../views/Career.vue')
  },
  {
    path: '/contact-us',
    name: 'Contact Us',
    component: () => import('../views/ContactUs.vue')
  },
  {
    path: '/our-event',
    name: 'Our Event',
    component: () => import('../views/OurEvent.vue')
  },
  {
    path: '/product/',
    name: 'product',
    component: () => import('../views/Product.vue')
  },
  {
    path: '/service',
    name: 'Service',
    component: () => import('../views/Service.vue')
  },
  {
    path: '/product-detail/:id',
    name: 'product-detail',
    component: () => import('../views/ProductDetail.vue')
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('../views/Category.vue')
  },
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    
    if(to.hash){
      return {
        selector: to.hash
      };
    }

    if(savedPosition) {
      return savedPosition;
    }
    
    return {x: 0, y: 0};
  }
});

export default router
