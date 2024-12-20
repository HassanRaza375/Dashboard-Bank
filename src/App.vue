<script setup>
import Sidebar from "./components/layout/sid.vue"
import MainHeader from "./components/layout/HeaderMain.vue"
import Svgs from "./components/svgs.vue"
import { useCommonStore } from './stores/common';
const commonStore = useCommonStore();

const toggleSidebar = () => {
  commonStore.ShowHideSidebar();
};


</script>
<template>
  <div class="main-layout">
    <Sidebar @togglesidebar="toggleSidebar" />
    <main :class="commonStore.sidebar ? 'layout-content' : 'layout-content m-0'">
      <MainHeader @togglesidebar="toggleSidebar" />
      <div class="main-content">
        <RouterView />
      </div>
    </main>
  </div>
  <Svgs />
</template>

<style scoped></style>
