import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import OurWork from '../pages/OurWork.vue'
import Features from '../pages/Features.vue'
import ScopeOfWork from '../pages/ScopeOfWork.vue'
import Plans from '../pages/Plans.vue'
import FAQs from '../pages/FAQs.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/work', component: OurWork },
  { path: '/features', component: Features },
  { path: '/scope', component: ScopeOfWork },
  { path: '/plans', component: Plans },
  { path: '/faqs', component: FAQs },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router