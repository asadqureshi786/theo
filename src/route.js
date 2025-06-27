import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "./pages/Admin/Dashboard.vue";
import clubs from "./pages/Admin/Clubs.vue";
import Agents from "./pages/Admin/Agents.vue";
import Test from "./pages/Admin/Test.vue";
import Players from "./pages/Admin/Players.vue";
import Playerprofile from "./pages/Admin/Playerprofile.vue";
import SquadRequest from "./pages/Admin/SquadRequest.vue";
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
import AgentClubs from "./pages/Agents/Clubs.vue";
import AgentClubview from "./pages/Agents/Clubview.vue";
import AgentAllrequest from "./pages/Agents/Allrequest.vue";
import AgentJobview from "./pages/Agents/Jobview.vue";
import AgentPlayer from "./pages/Agents/Players.vue";
import AgentPlayerprofile from "./pages/Agents/Playerprofile.vue";
import AgentSquadPlayer from "./pages/Agents/SquadPlayer.vue";
import AgentScoutPlayer from "./pages/Agents/ScoutPlayers.vue";
import AgentScoutProfile from "./pages/Agents/ScoutProfile.vue";
import AgentSquadProfile from "./pages/Agents/SquadProfile.vue";
import AgentCircle from "./pages/Agents/AgentCircle.vue";
import AgentLegalupdates from "./pages/Agents/Legalupdates.vue";
import AgentNewsfeeds from "./pages/Agents/Newsfeeds.vue";
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
        path: "squad-request",
        component: SquadRequest,
      },
      {
        path: "job-view/:id",
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
        path: "clubs",
        component: AgentClubs,
      },
      {
        path: "club-view/:id",
        component: AgentClubview,
      },
      {
        path: "all-request",
        component: AgentAllrequest,
      },
      {
        path: "job-view/:id",
        component: AgentJobview,
      },
      {
        path: "players",
        component: AgentPlayer,
      },
      {
        path: "player-profile/:id",
        component: AgentPlayerprofile,
      },
      {
        path: "squad-player",
        component: AgentSquadPlayer,
      },
      {
        path: "scout-player",
        component: AgentScoutPlayer,
      },
      {
        path: "scout-profile/:id",
        component: AgentScoutProfile,
      },
      {
        path: "squad-profile/:id",
        component: AgentSquadProfile,
      },
      {
        path: "agent_circle",
        component: AgentCircle,
      },
      {
        path: "legal-updates",
        component: AgentLegalupdates,
      },
      {
        path: "news-feeds",
        component: AgentNewsfeeds,
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
