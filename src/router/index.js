import { createRouter, createWebHistory } from 'vue-router'
import * as path from "path";
import LoginView from "../views/auth/LoginView.vue";
import CatalogueViews from "../views/products/CatalogueViews.vue";
import ShoppingCartView from "../views/products/ShoppingCartView.vue";
import DashboardView from "../views/admin/DashboardView.vue";
import NavigationSupplierView from "../views/supplier/NavigationSupplierView.vue";
import ListProductsView from "../views/admin/ListProductsView.vue"
import AddProductView from "../views/admin/AddProductView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/',
      name: 'catalogue',
      component: CatalogueViews
    },
    {
      path:'/shoppingCart',
      name:'cart',
      component: ShoppingCartView
    },
    {
      path:'/dashboard',
      name:'dashboard',
      component: DashboardView
    },
    {
      path:'/supplier',
      name:'supplier',
      component: NavigationSupplierView
    },
    {
      path:'/DashboardListProduct',
      name:'DashboardList',
      component: ListProductsView
    },
    {
      path:'/AddProduct',
      name:'AddProduct',
      component: AddProductView
    }
  ]
})

export default router
