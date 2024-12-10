<script setup>
import Sidebar from "./components/layout/sid.vue"
import MainHeader from "./components/layout/HeaderMain.vue"
import Svgs from "./components/svgs.vue"
</script>
<template>
    <div class="main-layout">
      <Sidebar/>
      <main class="layout-content">
        <MainHeader/>
        <div class="main-content">
          <RouterView />
        </div>
      </main>
    </div>
    <Svgs/>
  </template>

<style scoped></style>
