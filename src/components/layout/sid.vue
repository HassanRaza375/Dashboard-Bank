<script setup>
import { defineProps, defineEmits, ref } from 'vue';
import { useCommonStore } from '../../stores/common';
const commonStore = useCommonStore();

defineProps({
    togglesidebar: Function,
});

const emit = defineEmits(['togglesidebar']);
const routesLinks = ref([
    {
        imgsrc: '/src/assets/sidebar-icons/dashboard.svg',
        linkName: 'Dashboard',
        linkUrl: '/'
    },
    {
        imgsrc: '/src/assets/sidebar-icons/transaction.svg',
        linkName: 'Transactions',
        linkUrl: '/transaction'
    },
    {
        imgsrc: '/src/assets/sidebar-icons/account.svg',
        linkName: 'Accounts',
        linkUrl: '/account'
    },
    {
        imgsrc: '/src/assets/sidebar-icons/investment.svg',
        linkName: 'Investments',
        linkUrl: '/investments'
    },
    {
        imgsrc: '/src/assets/sidebar-icons/credit-card.svg',
        linkName: 'Credit Cards',
        linkUrl: '/creditcard'
    },
    {
        imgsrc: '/src/assets/sidebar-icons/loan.svg',
        linkName: 'Loan',
        linkUrl: '/loan'
    },
    {
        imgsrc: '/src/assets/sidebar-icons/services.svg',
        linkName: 'Services',
        linkUrl: '/services'
    },
    {
        imgsrc: '/src/assets/sidebar-icons/privileges.svg',
        linkName: 'My Privileges',
        linkUrl: '/myprivileges'
    },
    {
        imgsrc: '/src/assets/sidebar-icons/settings.svg',
        linkName: 'Setting',
        linkUrl: '/setting'
    }
])

</script>
<template>
    <div :class="commonStore.sidebar ? 'sidebar-item visible' : 'sidebar-item hidden'">
        <div class="flex align-center justify-end">
            <div class="close" @click="$emit('togglesidebar')"></div>
        </div>
        <div class="logo-dashboard">
            <img src="/src/assets/dashboard-logo.png" width="183" height="36" alt="icon">
        </div>
        <ul class="link-items">
            <router-link :to="link.linkUrl" v-for="link in routesLinks" :key="link.linkName">
                <li>
                    <img :src="link.imgsrc" height="25" width="25" loading="lazy" alt="icon">
                    <span>
                        {{ link.linkName }}
                    </span>
                </li>
            </router-link>
        </ul>
    </div>
</template>


<style></style>