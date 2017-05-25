import Vue from 'vue'
import Router from 'vue-router'


import Home from '@/components/Home'
import Developers from '@/components/Developers'
import Project from '@/components/Project'
import Recruit from '@/components/Recruit'


Vue.use(Router)

export default new Router({
  mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/developers',
            name: 'Developers',
            component: Developers
        },
        {
            path: '/project',
            name: 'Project',
            component: Developers
        },
        {
            path: '/recruit',
            name: 'Recruit',
            component: Recruit
        }
    ]
});
