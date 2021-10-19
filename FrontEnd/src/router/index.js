import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import GmnAccess from '@/components/GmnAccess';
import GmnProfile from '@/components/GmnProfile';
import GmnPosts from '@/components/GmnPosts';
import Sauces from '@/components/Sauces';
import store from '@/components/UsersStore';

Vue.use(Router);

const ifNotAuthenticated = (to, from, next) => {
    if (!store.getters.isAuthenticated) {
        next();
        return;
    }
    next("/");
};
  
const ifAuthenticated = (to, from, next) => {
    if (store.getters.isAuthenticated) {
        next();
        return;
    }
    next("/access");
};

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            beforeEnter: ifAuthenticated,
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
            beforeEnter: ifNotAuthenticated,
            component: GmnAccess
        },
        {
            path: '/profile',
            name: 'GmnProfile',
            beforeEnter: ifAuthenticated,
            component: GmnProfile
        },
        {
            path: '/posts',
            name: 'GmnPosts',
            beforeEnter: ifAuthenticated,
            component: GmnPosts
        },
    ]
});
