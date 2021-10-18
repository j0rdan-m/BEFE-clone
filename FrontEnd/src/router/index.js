import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import GmnAccess from '@/components/GmnAccess';
import Sauces from '@/components/Sauces';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/sauces',
            name: 'Sauces',
            component: Sauces
        },
        {
            path: '/access',
            name: 'GmnAccess',
            component: GmnAccess
        }
    ]
});
