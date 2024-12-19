<script setup>
import { useCommonStore } from '../../stores/common';
const commonStore = useCommonStore();
const toggleSidebar = () => {
  commonStore.ShowHideSidebar();
};
</script>
<template>
    <div class="dashboard-header">
        <div class="items-header">
            <div class="flex justify-start align-center gap-2">
                <img src="/src/assets/sidebar-icons/buger-menu.png" height="24" width="24" loading="lazy" alt="icon" @click="toggleSidebar">
                <h2>Overview</h2>
            </div>
            <div>
                <!-- <input type="text"> -->
            <div>

            </div>
            </div>
        </div>
    </div>
  </template>
  <style>
  
  </style>