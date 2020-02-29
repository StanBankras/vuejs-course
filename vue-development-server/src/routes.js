import UserComp from './components/User.vue'
import AboutComp from './components/About_us.vue'
import HomeComp from './components/Home.vue'

export const routes = [
    {
        path:'/user',
        component: UserComp
    },
    {
        path: '/about-us',
        component: AboutComp
    },
    {
        path: '', 
        component: HomeComp
    }
]