import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import VueAxios from "vue-axios";
import { plainAxiosInstance, securedAxiosInstance } from "./backend/axios";
import VueSidebarMenuAkahon from "vue-sidebar-menu-akahon";
import SvgIcon from "vue3-icon";

createApp(App)
  .use(router)
  .use(VueAxios, {
    secured: securedAxiosInstance,
    plain: plainAxiosInstance,
  })
  .component("vue-sidebar-menu-akahon", VueSidebarMenuAkahon)
  .component("svg-icon", SvgIcon)
  .mount("#app");

import "bootstrap/dist/js/bootstrap.min.js";
