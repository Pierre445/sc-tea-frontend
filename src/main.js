import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


import ApplicationLogo from '../src/components/ApplicationLogoViews.vue';
import NavbarCartView from '/src/views/products/NavbarCartView.vue';
import AddToCartView from '/src/views/products/AddToCartView.vue';
import DashboardView from '/src/views/admin/DashboardView.vue';
import NavigationSupplierView from "/src/views/supplier/NavigationSupplierView.vue";
import ListProductsView from "/src/views/admin/ListProductsView.vue"
import AddProductView from "/src/views/admin/AddProductView.vue"

const app = createApp(App)

app.component('x-application-logo', ApplicationLogo);
app.component('NavbarCart',NavbarCartView );
app.component('AddToCart',AddToCartView );
app.component('Dasboard',DashboardView);
app.component('Supplier',NavigationSupplierView.vue);
app.component('DashboardProducts', ListProductsView);
app.component('AddProduct', AddProductView)

app.use(createPinia())
app.use(router)

app.mount('#app')
