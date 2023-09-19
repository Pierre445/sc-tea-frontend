<template>


    <!-- <dashboard-view></dashboard-view> -->



  <navigation-guest-view></navigation-guest-view>

  <router-view></router-view>
  <footer-view></footer-view>

</template>

<script setup>

import { RouterLink, RouterView } from 'vue-router'
import FooterView from "./views/layouts/FooterView.vue";

import NavigationGuestView from "./views/layouts/NavigationGuestView.vue";
import DashboardView from './views/admin/DashboardView.vue';
import NavigationSupplierView from './views/supplier/NavigationSupplierView.vue';



</script>


<style scoped>
</style>
