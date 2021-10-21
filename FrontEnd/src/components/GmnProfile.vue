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
                    <input id="jobValue" class="flex-grow outline-none" :value="user_job" type="text" placeholder="New job..." />
            </div>
            <div class="bg-white p-4 w-96 rounded-md">
                <h1 class="text-lg font-bold text-gray-500">Description</h1>
                    <input id="descriptionValue" class="flex-grow outline-none" :value="user_description" type="text" placeholder="New description..." />
            </div>
            <p><button class="btn" @click="update">update</button></p>
        </div>
    </div>
    <gmn-footer></gmn-footer>
</div>
</template>

<script>
import GmnHeader from '@/components/GmnHeader';
import vuex, { mapActions } from 'vuex';
import GmnFooter from '@/components/GmnFooter';

export default {
    components: { GmnHeader, GmnFooter },
    computed: {
        ...vuex.mapGetters(['user_firstname', 'user_lastname', 'user_job','user_avatarURL', 'user_description'])
    },
    methods: {
        update () {
            let $jobValue = document.querySelector("#jobValue").value;
            let $descriptionValue = document.querySelector("#descriptionValue").value;

            this.updateUser({job: $jobValue, description: $descriptionValue});
        },
        ...mapActions(['updateUser'])
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
    p {
  border-width: 1px;
  border-style: solid;
  border-image: rgba(0, 0, 0, 0);
  border-image: #243b55;
  border-top: 0;
  width: 100%;
  font-size: 1em;
  padding: 7px 0;
  color: #243b55;
}

.btn {
	border-radius: 20px;
	border: 1px solid #243b55;
	background-color: #243b55;
	color: #FFFFFF;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
  margin: 50px;
}

.btn:hover {
  text-decoration: none;
  font-weight: 1000;
}   
input {
	background-color: #243b55;
    color: white;
	border: none;
	padding: 12px 15px;
	margin: 8px 0;
}

</style>