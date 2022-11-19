import { createWebHistory, createRouter } from "vue-router";
import signIn from "@/components/sign-in.vue";
import registerUser from "@/components/register-user.vue";
import bidView from "@/components/views/bid-view.vue";
import userView from "@/components/views/user-view.vue";
import clientView from "@/components/views/client-view.vue";
import studioView from "@/components/views/studio-view.vue";
import newClient from "@/components/new/new-client.vue";

const routes = [
  {
    path: "/",
    name: "signIn",
    component: signIn,
  },
  {
    path: "/register",
    name: "registerUser",
    component: registerUser,
  },
  {
    path: "/bids",
    name: "bidView",
    component: bidView,
  },
  {
    path: "/clients",
    name: "clientView",
    component: clientView,
  },
  {
    path: "/users",
    name: "userView",
    component: userView,
  },
  {
    path: "/studio",
    name: "studioView",
    component: studioView,
  },
  {
    path: "/newClient",
    name: "newClient",
    component: newClient,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
