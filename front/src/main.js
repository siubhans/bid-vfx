import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import VueAxios from "vue-axios";
import { plainAxiosInstance, securedAxiosInstance } from "./backend/axios";

createApp(App)
  .use(router)
  .use(VueAxios, {
    secured: securedAxiosInstance,
    plain: plainAxiosInstance,
  })
  .mount("#app");

import "bootstrap/dist/js/bootstrap.min.js";
