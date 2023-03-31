import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView,
    },
    {
      path: '/ProfileView',
      name: 'ProfileView',
      component: () => import('../views/ProfileView.vue'),
    },
    {
      path: '/QualiyView',
      name: 'QualiyView',
      component: () => import('../views/QualiyView.vue')
    },
    {
      path: '/HistoryView',
      name: 'HistoryView',
      component: () => import('../views/HistoryView.vue')
    },
    {
      path: '/ProductsView',
      name: 'ProductsView',
      component: () => import('../views/ProductsView.vue')
    },
    {
      path: '/ProductsListMenuView',
      name: 'ProductsListMenuView',
      component: () => import('../views/ProductsListMenuView.vue'),
    },
    {
      path: '/:id',
      name: 'ProductView',
      component: () => import('../views/ProductView.vue')
    },
    {
      path: '/ContactView',
      name: 'ContactView',
      component: () => import('../views/ContactView.vue')
    }
  ],
  linkActiveClass: 'active'
})
router.afterEach(() => {
  window.scrollTo(0, 0)
})
export default router
