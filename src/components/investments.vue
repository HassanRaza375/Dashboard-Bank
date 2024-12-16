<script setup>
import ChartsLine from "./charts-line.vue";
import ChartsLine2 from "./chart-line2.vue";
</script>
<template>
  <!-- cards info -->
  <div class="cards-progress-section">
    <div class="cards-progress">
      <img src="/src/assets/h1.png" height="70" width="70" loading="lazy" alt="">
      <div>
        <h2>Total Invested Amount</h2>
        <p>$150,000</p>
      </div>
    </div>
    <div class="cards-progress">
      <img src="/src/assets/h2.png" height="70" width="70" loading="lazy" alt="">
      <div>
        <h2>Total Invested Amount</h2>
        <p>$150,000</p>
      </div>
    </div>
    <div class="cards-progress">
      <img src="/src/assets/h3.png" height="70" width="70" loading="lazy" alt="">
      <div>
        <h2>Total Invested Amount</h2>
        <p>$150,000</p>
      </div>
    </div>
  </div>
  <!-- charts -->
  <div class="charts-yearly-monthly">
    <div class="card-text">
      <span>Yearly Total Investment</span>
      <div class="card-chart">
        <ChartsLine/>
      </div>
    </div>
    <div class="card-text">
      <span>Monthly Revenue</span>
      <div class="card-chart">
        <ChartsLine2/>
      </div>
    </div>
  </div>
  <!-- investment trending -->
   <div class="invest-year">
    <div class="card-text">
      <span>My Investment</span>
      <div class="invest-card" v-for="n in 3" :key="n">
        <img :src="'/src/assets/g'+n+'.png'" height="60" width="60" alt="icon">
        <div class="invest-item">
          <div class="flx">
            <p class="inv-text">{{ n===1?'Apple Store':n===2?'Google':'Tesla' }}</p>
            <p class="inv-text-sub">E-commerce, Marketplace</p>
          </div>
          <div class="flx">
            <p class="inv-text">$54,000</p>
            <p class="inv-text-sub">Envestment Value</p>
          </div>
          <div class="flx">
            <p class="inv-text">+16%</p>
            <p class="inv-text-sub">Return Value</p>
          </div>
        </div>
      </div>
    </div>
    <!-- table Stock -->
    <div class="card-text">
      <span>Trending Stock</span>
      <div class="year-card">
        <table>
          <thead>
            <tr>
              <th>SL No</th>
              <th>Name</th>
              <th>Price</th>
              <th>Return</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="n in 5" :key="n">
              <td>0{{ n }}</td>
              <td>Trivago</td>
              <td>$520</td>
              <td>+5%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
   </div>
</template>
<style scoped>

</style>