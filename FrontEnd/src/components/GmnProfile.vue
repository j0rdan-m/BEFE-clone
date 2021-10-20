<template>
<div class="post-page">
    <gmn-header v-bind:header_index="2"></gmn-header>
    <div class="main_profile">
        <div class="name rounded-2xl shadow-lg">
            <div class="firstname">{{ user_firstname }}</div>
            <div class="lastname">{{ user_lastname }}</div>    
        </div>
        <div class="img_mgt">
            <button class="bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded add_btn">
                <i class="material-icons-outlined">
                    add_circle
                </i>
            </button>
            <div class="avatar rounded-2xl shadow-lg">
                <div class="img_avatar rounded-2xl" >
                    <img :src="user_avatarURL" alt="profile picture">
                </div>
            </div>

        </div>
                
        <div class="infos rounded-2xl shadow-lg">
            <div class="bg-white p-4 w-96 rounded-md">
                <h1 class="text-lg font-bold text-gray-500">Job</h1>
                {{ user_job }}
                <div class="mt-5 mb-2 border-2 py-1 px-3 flex justify-between rounde-md rounded-md">
                     
                    <input class="flex-grow outline-none text-gray-600 focus:text-blue-600" type="text" placeholder="New job..." />
                </div>
            </div>
            <div class="bg-white p-4 w-96 rounded-md">
                <h1 class="text-lg font-bold text-gray-500">Description</h1>
                {{ user_description }}
                <div class="mt-5 mb-2 border-2 py-1 px-3 flex justify-between rounde-md rounded-md">
                    <input class="flex-grow outline-none text-gray-600 focus:text-blue-600" type="text" placeholder="New description..." />
                </div>
            </div>
        </div>
    </div>
    <gmn-footer></gmn-footer>
</div>
</template>

<script>
import GmnHeader from '@/components/GmnHeader';
import vuex from 'vuex';
import GmnFooter from '@/components/GmnFooter';
import VueX from 'vuex';

export default {
    components: { GmnHeader, GmnFooter },
    computed: {
        ...vuex.mapGetters(['user_firstname', 'user_lastname', 'user_job', 'user_description','user_avatarURL']),
    }

    
};
</script>

<style>
    @import url('../styles/profile.css');
    .main_profile{
        width: 100%;
        min-height: 50vh;

        display: flex;
        justify-content: space-around;
    }
    .img_mgt{
        display: flex;
        flex-direction: column;
    }
    .avatar{
        width: 300px;
        height: 300px;
        opacity: 70%;
        background-color: purple;
        overflow: hidden;
        padding: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .img_avatar{
        overflow: hidden;
    }
    .add_btn{
        width: 40px;
        height: 40px;
        transform: translateY(60px) translateX(20px);
        z-index: 3;
    }
    .name{
        width: 500px;
        height: 300px;
        background-color: yellow;
        opacity: 60%;
        z-index: 1;
        transform: translateX(300px) translateY(200px);  
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 20px;
    }
    .firstname {
        font-size: 40px;
    }
    .lastname {
        font-size: 50px;
        padding-left: 20px
    }
    .infos{
        width: 600px;
        height: 600px;
        z-index:2;
        background-color: white;    
        transform: translateX(-100px) translatey(100px);   
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>boss