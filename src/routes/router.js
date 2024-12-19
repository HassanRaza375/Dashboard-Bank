import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "../components/HelloWorld.vue";
import AboutView from "../components/About.vue";
import Transactions from "../components/Ttransaction.vue";
import Account from "../components/Account.vue";
import Investments from "../components/investments.vue";
import CreditCard from "../components/creditcard.vue";
import Loan from "../components/Loan.vue";
import Services from "../components/Services.vue";
import Myprivileges from "../components/Myprivileges.vue";
import Setting from "../components/Setting.vue";
import Page1 from "../pages/page1.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
  { path: "/transaction", component: Transactions },
  { path: "/account", component: Account },
  { path: "/investments", component: Investments },
  { path: "/creditcard", component: CreditCard },
  { path: "/loan", component: Loan },
  { path: "/services", component: Services },
  { path: "/myprivileges", component: Myprivileges },
  { path: "/Setting", component: Setting },
  { path: "/Page1", component: Page1 },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
