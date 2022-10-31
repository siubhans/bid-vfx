import Vue from "vue";
import Router from "vue-router";
import Signin from "@/components/Signin.vue";
import Register from "@/components/Register.vue";
import Bids from "@/components/views/Bids.vue";
import Users from "@/components/views/Users.vue";
import Clients from "@/components/views/Clients.vue";
import Studio from "@/components/views/Studio.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Signin",
      component: Signin
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    },
    {
      path: "/bids",
      name: "Bids",
      component: Bids
    },
    {
      path: "/clients",
      name: "Clients",
      component: Clients
    },
    {
      path: "/users",
      name: "Users",
      component: Users
    },
    {
      path: "/studio",
      name: "Studio",
      component: Studio
    }
  ]
});
