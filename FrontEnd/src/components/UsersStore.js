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
    ADD_USER: (state) => {
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
    sauces: state => state.user.sauces,
    isAuthenticated: function () {
        return sessionStorage.getItem("token") ? true : false;
    }
};

const actions = {
    setSauces({ commit }) {
        axios.get('http://localhost:3000/api/sauces')
            .then(response => {
                commit('SET_SAUCES', response.data); 
            });
    },


};

let store =  new Vuex.Store({
    state: state,
    mutations: mutations,
    getters: getters,
    actions: actions,
    strict: true
});



export default store;