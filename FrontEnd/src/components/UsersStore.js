import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    user: {
        firstname: "Antonio",
        lastname: "Alexandre",
        job: "Front End developer",
        following: 34,
        followers: 155
    }
};

const mutations = {
    ADD_FOLLOWING: (state) => {
        state.user.following++;
    }
};

const getters = {
    user_firstname: state => state.user.firstname,
    user_lastname: state => state.user.lastname,
    user_job: state => state.user.job
};

let store =  new Vuex.Store({
    state: state,
    mutations: mutations,
    getters: getters,
    actions: {},
    strict: true
});

export default store;