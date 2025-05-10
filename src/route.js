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

const routes = [
    // {
    //     path : '',
    //     name : '',
    //     component : DefaultLayout,
    //     children : [
    //         {
    //             path : 'admin/dashboard',
    //             component : Dashboard
    //         }
    //     ]
    // },
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
        ]
    },
    {
        path: '/',
        name: 'home',
        component: Home,
    }
]



const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;