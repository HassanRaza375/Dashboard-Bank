<script setup>
import Sidebar from "./components/layout/sid.vue"
import MainHeader from "./components/layout/HeaderMain.vue"
import Svgs from "./components/svgs.vue"
import { useCommonStore } from './stores/common';
import {ref, onMounted} from 'vue'
const commonStore = useCommonStore();
const isSmallScreen = ref(window.innerWidth <= 991);
const checkScreenWidth = () => {
  isSmallScreen.value = window.innerWidth <= 991;
  if(isSmallScreen.value){
    if(commonStore.sidebar){
      commonStore.ShowHideSidebar(); 
    }
  }
};
onMounted(() => {
  window.addEventListener("resize", checkScreenWidth);
});

</script>
<template>
    <div class="main-layout">
      <Sidebar/>
      <main :class="commonStore.sidebar?'layout-content':'layout-content m-0'">
        <MainHeader/>
        <div class="main-content">
          <RouterView />
        </div>
      </main>
    </div>
    <Svgs/>
  </template>

<style scoped></style>
