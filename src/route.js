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
        children : [
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
        name: 'home',
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

export default router;