<template>
    <div>
        <my-header></my-header>

        <my-footer></my-footer>
    </div>
</template>
<script>
import Vue from 'vue';
import store from './UsersStore';
import MyHeader from '@/components/MyHeader';
import MyFooter from '@/components/MyFooter';

export default {
    store: store,
    components:{
        MyHeader,
        MyFooter
    }
};
</script>
<style>
    
</style>