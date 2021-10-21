<template>
<div class="settings-body">
    <!-- Start of Header -->
    <gmn-header v-bind:header_index="3"></gmn-header>
    <!-- End of Header -->

    <div class="settings-card">
        <div class="profile">
            <h1>Personal Info</h1>
            <h2>First Name</h2>
            <p>
                <input v-model="futur_user_firstname" type="text" placeholder="Super"/></p>            
            <h2>Last Name</h2>
            <p>
                <input v-model="futur_user_lastname" type="text" placeholder="Admin" />
            </p> 
            <h2>Email</h2>
            <p>{{ user_email }}</p>
            <h2>Password </h2>
            <p><input v-model="futur_user_password" type="text" placeholder="•••••••" /></p>
            <p><button class="btn">update</button></p>
        </div>
        
    </div>    
    
    <gmn-footer></gmn-footer>
</div>
</template>

<script>
import GmnHeader from './GmnHeader.vue';
import GmnFooter from '@/components/GmnFooter';
import vuex from 'vuex';
export default {
    components: { 
        GmnHeader, 
        GmnFooter},
    computed: {...vuex.mapGetters(['user_firstname', 'user_lastname', 'user_email', 'user_password'])}
    

};
</script>

<style>
    @import url('../styles/settings.css');
</style>