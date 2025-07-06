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
        component: Newsfeeds,
      },
      {
        path: "news-feeds",
        component: Legalupdates,
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
        meta: { requiresPlan: ["black","blue","gold"] },
      },
      {
        path: "dashboard",
        component: AgentDashboard,
        meta: { requiresPlan: ["black","blue","gold"] },
      },
      {
        path: "clubs",
        component: AgentClubs,
        meta: { requiresPlan: ["black","gold","blue"] },
      },
      {
        path: "club-view/:id",
        component: AgentClubview,
        meta: { requiresPlan: ["black","gold"] },
      },
      {
        path: "all-request",
        component: AgentAllrequest,
        meta: { requiresPlan: ["black","gold","blue"] },
      },
      {
        path: "job-view/:id",
        component: AgentJobview,
        meta: { requiresPlan: ["black","gold","blue"] },
      },
      {
        path: "players",
        component: AgentPlayer,
        meta: { requiresPlan: ["black","gold","blue"] },
      },
      {
        path: "player-profile/:id",
        component: AgentPlayerprofile,
        meta: { requiresPlan: ["black","gold","blue"] },
      },
      {
        path: "squad-player",
        component: AgentSquadPlayer,
        meta: { requiresPlan: ["black","gold","blue"] },
      },
      {
        path: "squad-profile/:id",
        component: AgentSquadProfile,
        meta: { requiresPlan: ["black","gold","blue"] },
      },
      {
        path: "scout-player",
        component: AgentScoutPlayer,
        meta: { requiresPlan: ["black","gold","blue"] },
      },
      {
        path: "scout-profile/:id",
        component: AgentScoutProfile,
        meta: { requiresPlan: ["black","gold","blue"] },
      },
      {
        path: "agent_circle",
        component: AgentCircle,
        meta: { requiresPlan: ["black","gold"] },
      },
      {
        path: "legal-updates",
        component: AgentNewsfeeds,
        meta: { requiresPlan: ["black"] },
      },
      {
        path: "news-feeds",
        component: AgentLegalupdates,
        meta: { requiresPlan: ["black"] },
      },
      {
        path: "messages",
        component: AgentMessages,
        meta: { requiresPlan: ["black","gold"] },
      },
      {
        path: "settings",
        component: AgentSettings,
        meta: { requiresPlan: ["black","blue","gold"] },
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
  

// Current User
import { useAuthStore } from '@/store/auth.js';


router.beforeEach(async (to, from, next) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

   const userStore = useAuthStore();

  if (token) {
    try {
      await userStore.fetchUser();
     
    } catch (err) {
      console.error("User fetch failed:", err);
      return next('/login');
    }
  }

     const userPlan  = userStore.user?.user.plan;
  const userRole   = userStore.user?.user.role;

  // console.log("this data",user_plan,user_role)
  // console.log(user_role)

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


      // ✅ Plan restriction for agent
    if(token){
            const requiredPlans = to.meta.requiresPlan;
      if (userRole === "agent" && requiredPlans && !requiredPlans.includes(userPlan)) {
        return next("/agent/dashboard"); // 🔒 redirect if plan not allowed
      }

    }
    next();
  } else {
    next();
  }
});

export default router;
