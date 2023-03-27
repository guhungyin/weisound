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
      path: '/ProductsListMenuView/:group_id',
      name: 'ProductsListMenuView',
      component: () => import('../views/ProductsListMenuView.vue'),
    },
    {
      path: '/:group_id/ProductsListContentView/:group2_id',
      name: 'ProductsListContentView',
      component: () => import('../views/ProductsListContentView.vue'),
    },
    {
      path: '/:group_id/ProductsListContentView/:group2_id/ProductView/:productId',
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
