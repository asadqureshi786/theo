import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from './pages/Admin/Dashboard.vue'
import Clubs from './pages/Admin/Clubs.vue'
import Agents from './pages/Admin/Agents.vue'
import Players from './pages/Admin/Players.vue'
import Playerprofile from './pages/Admin/Playerprofile.vue'
import Home from './pages/Web/Home.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import Jobview from './pages/Admin/Jobview.vue'
import Agentview from './pages/Admin/Agentview.vue'
import Legalupdates from './pages/Admin/Legalupdates.vue'
import Newsfeeds from './pages/Admin/Newsfeeds.vue'
import Messages from './pages/Admin/Messages.vue'
import Clubview from './pages/Admin/Clubview.vue'
import AllRequest from './pages/Admin/Allrequest.vue'
import Settings from './pages/Admin/Settings.vue'
import Login from './pages/Authentication/Login.vue'
import Signup from './pages/Authentication/Signup.vue'

const routes = [
    {
        path: '/admin',
        name: 'admin',
        component: DefaultLayout,
        meta: { requiresAuth: true },
        children : [
            {
                path : '',
                component : Dashboard,
            },
            {
                path : 'dashboard',
                component : Dashboard,
            },
            {
                path : 'clubs',
                component : Clubs,
            },
            {
                path : 'agents',
                component : Agents,
            },
            {
                path : 'players',
                component : Players,
            },
            {
                path : 'player-profile',
                component : Playerprofile,
            },
            {
                path : 'job-view',
                component : Jobview,
            },
            {
                path : 'agent-view',
                component : Agentview,
            },
            {
                path : 'legal-updates',
                component : Legalupdates,
            },
            {
                path : 'news-feeds',
                component : Newsfeeds,
            },
            {
                path : 'messages',
                component : Messages,
            },
            {
                path : 'club-view',
                component : Clubview,
            },
            {
                path : 'all-request',
                component : AllRequest,
            },
            {
                path : 'settings',
                component : Settings,
            },
        ]
    },
    {
        path: '/',
        name: '',
        component: Home,
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/signup',
        name: 'signup',
        component: Signup,
    },
]



const router = createRouter({
    history: createWebHistory(),
    routes
})



router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token');

    // Agar already login hai, aur user login ya signup page pe jaa raha hai, to home ya dashboard pe redirect kar do
    if (token && (to.path === '/login' || to.path === '/signup')) {
        next('/admin/dashboard');
        return;
    }

    // Agar route auth require karta hai aur token nahi hai, to login pe bhejo
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!token || token === 'null' || token === '') {
            next('/login');
        } else {
            next();
        }
    } else {
        next();
    }
});

// router.beforeEach((to, from, next) => {
//     const isAuthenticated = !!sessionStorage.getItem('token'); 
//     if (to.meta.requiresAuth && !isAuthenticated) {
//         next('/login');
//     } else if ((to.path === '/login' || to.path === '/signup') && isAuthenticated) {
//         next('/admin/dashboard');
//     } else {
//         next();
//     }
// });
export default router;