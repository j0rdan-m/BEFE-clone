import Vue from 'vue';
import Router from 'vue-router';
import Signup from '@/components/Signup';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/Signup',
            name: 'Signup',
            component: Signup
        }
    ]
});
