import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from './pages/Admin/Dashboard.vue'
import Clubs from './pages/Admin/Clubs.vue'
import Agents from './pages/Admin/Agents.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

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
        ]
    }
]



const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;