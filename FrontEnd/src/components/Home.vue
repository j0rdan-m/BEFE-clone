<template>
    <div class="page">
        <gmn-header></gmn-header> 
        <br>  
        <gmn-main></gmn-main>
        <br>
        <!-- <gmn-footer></gmn-footer> -->
    </div>
</template>
<script>
import Vue from 'vue';
import store from './UsersStore';
import GmnHeader from '@/components/GmnHeader';
import GmnMain from '@/components/GmnMain';
import GmnFooter from '@/components/GmnFooter';

export default {
    store: store,
    components:{
        GmnHeader,
        GmnMain,
        // GmnFooter
    }
};
</script>
<style>
    .page{
        margin-top: 200px;    
    };
</style>