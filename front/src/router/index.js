import { createWebHistory, createRouter } from "vue-router";
import signIn from "@/components/sign-in.vue";
import registerUser from "@/components/register-user.vue";
import bidView from "@/components/views/bid-view.vue";
import userView from "@/components/views/user-view.vue";
import clientView from "@/components/views/client-view.vue";
import studioView from "@/components/views/studio-view.vue";
import newClient from "@/components/new/new-client.vue";
import newBid from "@/components/new/new-bid.vue";
import buildBid from "@/components/new/build-bid.vue";
import searchView from "@/components/views/search-view.vue";

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
    path: "/bidsView",
    name: "bidView",
    component: bidView,
  },
  {
    path: "/clientsView",
    name: "clientView",
    component: clientView,
  },
  {
    path: "/usersView",
    name: "userView",
    component: userView,
  },
  {
    path: "/studioView",
    name: "studioView",
    component: studioView,
  },
  {
    path: "/newClient",
    name: "newClient",
    component: newClient,
  },
  {
    path: "/newBid",
    name: "newBid",
    component: newBid,
  },
  {
    path: "/buildBid",
    name: "buildBid",
    component: buildBid,
  },
  {
    path: "/searchView",
    name: "searchView",
    component: searchView,
  },
  { path: "/:pathMatch(.*)", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
