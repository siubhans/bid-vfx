import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import VueAxios from "vue-axios";
//import { securedAxiosInstance, plainAxiosInstance } from "./backend/axios";

createApp(App).use(router).use(VueAxios, axios).mount("#app");

import "bootstrap/dist/js/bootstrap.min.js";
