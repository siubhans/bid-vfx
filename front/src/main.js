import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import VueAxios from "vue-axios";
import {
  plainAxiosInstance,
  securedAxiosInstance,
  imageAxiosInstance,
} from "./backend/axios";
import VueSidebarMenuAkahon from "vue-sidebar-menu-akahon";
import SvgIcon from "vue3-icon";
import JsonCSV from "vue-json-csv";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faLock,
  faBuilding,
  faUnlock,
} from "@fortawesome/free-solid-svg-icons";

library.add(faUser, faLock, faBuilding, faUnlock);

createApp(App)
  .use(router)
  .use(VueAxios, {
    secured: securedAxiosInstance,
    plain: plainAxiosInstance,
    image: imageAxiosInstance,
  })
  .component("vue-sidebar-menu-akahon", VueSidebarMenuAkahon)
  .component("svg-icon", SvgIcon)
  .component("font-awesome-icon", FontAwesomeIcon)
  .component("downloadCsv", JsonCSV)
  .mount("#app");

import "bootstrap/dist/js/bootstrap.min.js";
