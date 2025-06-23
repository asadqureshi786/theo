import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "./pages/Admin/Dashboard.vue";
import clubs from "./pages/Admin/Clubs.vue";
import Agents from "./pages/Admin/Agents.vue";
import Test from "./pages/Admin/Test.vue";
import Players from "./pages/Admin/Players.vue";
import Playerprofile from "./pages/Admin/Playerprofile.vue";
import Home from "./pages/Web/Home.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import AgentLayout from "@/layouts/AgentLayout.vue";
import Jobview from "./pages/Admin/Jobview.vue";
import Agentview from "./pages/Admin/Agentview.vue";
import Legalupdates from "./pages/Admin/Legalupdates.vue";
import Newsfeeds from "./pages/Admin/Newsfeeds.vue";
import Messages from "./pages/Admin/Messages.vue";
import Clubview from "./pages/Admin/Clubview.vue";
import AllRequest from "./pages/Admin/Allrequest.vue";
import Settings from "./pages/Admin/Settings.vue";
import Login from "./pages/Authentication/Login.vue";
import Signup from "./pages/Authentication/Signup.vue";

// Agents Routes
import AgentDashboard from "./pages/Agents/Dashboard.vue";
import AgentCircle from "./pages/Agents/AgentCircle.vue";
import AgentMessages from "./pages/Agents/Messages.vue";
import AgentSettings from "./pages/Agents/Settings.vue";

const routes = [
  {
    path: "/admin",
    component: DefaultLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: "",
        component: Dashboard,
      },
      {
        path: "dashboard",
        component: Dashboard,
      },
      {
        path: "clubs",
        component: clubs,
      },
      {
        path: "agents",
        component: Agents,
      },
      {
        path: "players",
        component: Players,
      },
      {
        path: "player-profile/:id",
        component: Playerprofile,
      },
      {
        path: "job-view",
        component: Jobview,
      },
      {
        path: ":id",
        component: Agentview,
      },
      {
        path: "legal-updates",
        component: Legalupdates,
      },
      {
        path: "news-feeds",
        component: Newsfeeds,
      },
      {
        path: "messages",
        component: Messages,
      },
      {
        path: "club-view/:id",
        component: Clubview,
      },
      {
        path: "all-request",
        component: AllRequest,
      },
      {
        path: "settings",
        component: Settings,
      },
      {
        path: "test",
        component: Test,
      },
    ],
  },
  {
    path: "/agent",
    component: AgentLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: "",
        component: AgentDashboard,
      },
      {
        path: "dashboard",
        component: AgentDashboard,
      },
      {
        path: "agent_circle",
        component: AgentCircle,
      },
      {
        path: "messages",
        component: AgentMessages,
      },
      {
        path: "settings",
        component: AgentSettings,
      },
    ],
  },

  {
    path: "/",
    name: "",
    component: Home,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (token && (to.path === "/login" || to.path === "/signup")) {
    if (role == "admin") {
      return next("/admin/dashboard");
    } else if (role == "agent") {
      return next("/agent/dashboard");
    }
    return;
  }

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!token || token === "null" || token === "") {
      next("/login");
    }
    // ✅ Block access to wrong dashboard
    if (role == "admin" && to.path.startsWith("/agent")) {
      return next("/admin/dashboard");
    }
    if (role == "agent" && to.path.startsWith("/admin")) {
      return next("/agent/dashboard");
    }
    next();
  } else {
    next();
  }
});

export default router;
