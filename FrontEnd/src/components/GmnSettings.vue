<template>
<div class="settings-body">
    <!-- Start of Header -->
    <gmn-header v-bind:header_index="3"></gmn-header>
    <!-- End of Header -->
    <div class="container">

        <div class="rightbox">
            <div class="profile">
                <h1>Personal Info</h1>
                <h2>Full Name</h2>
                <p>Julie Park <button class="btn">update</button></p>
                <h2>Birthday</h2>
                <p>July 21</p>
                <h2>Gender</h2>
                <p>Female</p>
                <h2>Email</h2>
                <p>example@example.com <button class="btn">update</button></p>
                <h2>Password </h2>
                <p>••••••• <button class="btn">Change</button></p>
            </div>
        </div>    
    </div>
</div>
</template>

<script>
import GmnHeader from './GmnHeader.vue';
export default {
    components: { GmnHeader },

};
</script>

<style>
    @import url('../styles/settings.css');
</style>