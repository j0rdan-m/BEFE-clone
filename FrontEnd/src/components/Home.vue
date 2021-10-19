<template>
<body class="page">
    <div>
        <gmn-header></gmn-header>  
        <div class="home_main">
            <div class="aside"><gmn-main></gmn-main></div>
            <div class="content"><gmn-posts></gmn-posts></div>
        </div>
        <gmn-footer></gmn-footer>
    </div>
</body>
</template>
<script>
import Vue from 'vue';
import store from './UsersStore';
import GmnHeader from '@/components/GmnHeader';
import GmnMain from '@/components/GmnMain';
import GmnPosts from '@/components/GmnPosts';
import GmnFooter from '@/components/GmnFooter';

export default {
    store: store,
    components:{
        GmnHeader,
        GmnMain,
        GmnPosts,
        GmnFooter
    }
};
</script>
<style>
    @import url('../styles/home.css');
</style>