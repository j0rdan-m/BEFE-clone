import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const state = {
    user: {
        firstname: "",
        lastname: "",
        description: "",
        job:"",
        avatarURL:"",
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
    },
    SET_USER: (state, user) => {
        state.user.firstname = user.firstname;
        state.user.lastname = user.lastname;
        state.user.description = user.description;
        state.user.job = user.job;
        state.user.avatarURL = user.avatarURL;
    }
};

const getters = {
    user_firstname: state => state.user.firstname,
    user_lastname: state => state.user.lastname,
    user_description: state => state.user.description,
    user_job: state => state.user.job,
    sauces: state => state.user.sauces,
    user_avatarURL: state => state.user.avatarURL,
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
    setUser({ commit }) {
        axios.get('http://localhost:3000/api/auth/' + sessionStorage.getItem('userId'))
            .then(response => {
                commit('SET_USER', response.data);
            });
    },
    updateUser({ state }, user) {
        axios.put('http://localhost:3000/api/auth/update/' + sessionStorage.getItem('userId'), user)
            .then(response => {
                if(response.status===201){
                    window.location.href = "/";
                }
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