import { createRouter, createWebHistory } from 'vue-router'
import ListView from '@/components/List'
import DetailView from '@/components/Detail'
import App from '../App'
import Create from '@/components/Create'
import Update from '@/components/Update'

const routes = [
  {
    path: '/app',
    name: 'app',
    component: App
  },
  {
    path: '/',
    name: 'list',
    component: ListView
  },
  {
    path: '/detail/:contentId',
    name: 'detail',
    component: DetailView
  },
  {
    path: '/create',
    name: 'create',
    component: Create
  },
  {
    path: '/update/:contentId',
    name: 'update',
    component: Update
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
