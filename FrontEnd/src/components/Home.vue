<template>
    <div>
        <my-header></my-header>
        <my-main></my-main>
        <my-footer></my-footer>
    </div>
</template>
<script>
import Vue from 'vue';
import store from './UsersStore';
import MyHeader from '@/components/MyHeader';
import MyMain from '@/components/MyMain';
import MyFooter from '@/components/MyFooter';


export default {
    store: store,
    components:{
        MyHeader,
        MyMain,
        MyFooter
    }
};
</script>
<style>
    
</style>