export default [{
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: () => import('@/views/home.vue')
    },
    {
        path: '/city/:cityid',
        component: () => import('@/views/city.vue')
    }
]