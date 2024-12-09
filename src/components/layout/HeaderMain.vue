<template>
    <div class="dashboard-header">
        <div class="items-header">
            <h2>Overview</h2>
            <div>
                <!-- <input type="text"> -->
            <div>
            <p>Count: {{ counterStore.count }}</p>
            <p>Double Count: {{ counterStore.doubleCount }}</p>
            <button @click="counterStore.increment">Increment</button>
            <button @click="counterStore.decrement">Decrement</button>
            </div>
            </div>
        </div>
    </div>
  </template>
  
  <script setup>
    import { useCounterStore } from '../../stores/counter';
    const counterStore = useCounterStore();

  </script>
  
  <style>
  
  </style>