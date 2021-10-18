import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const state = {
    user: {
        firstname: "Antonio",
        lastname: "Alexandre",
        job: "Front End developer",
        following: 34,
        followers: 155,
        sauces: []
    }
};

const mutations = {
    ADD_FOLLOWING: (state) => {
        state.user.following++;
    },
    SET_SAUCES: (state, sauces) => {
        state.user.sauces = sauces;
    }
};

const getters = {
    user_firstname: state => state.user.firstname,
    user_lastname: state => state.user.lastname,
    user_job: state => state.user.job,
    sauces: state => state.user.sauces
};

const actions = {
    setSauces({ commit }) {
        axios.get('http://localhost:3000/api/sauces')
            .then(response => {
                console.log('data', response.data);
                commit('SET_SAUCES', response.data); 
            });
    }
};

let store =  new Vuex.Store({
    state: state,
    mutations: mutations,
    getters: getters,
    actions: actions,
    strict: true
});



export default store;