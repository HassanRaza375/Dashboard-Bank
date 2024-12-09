import { createApp } from "vue";
import "./style.css";
import router from "./routes/router";
import App from "./App.vue";
import { createPinia } from "pinia";
// Create and use Pinia
const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);
app.mount("#app");
