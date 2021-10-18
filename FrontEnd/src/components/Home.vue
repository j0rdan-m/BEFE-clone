<template>
<body class="page">
    <div>
        <gmn-header></gmn-header>  
        <gmn-main></gmn-main>
        <br>
        <gmn-post></gmn-post>
        <gmn-footer></gmn-footer>
    </div>
</body>
</template>
<script>
import Vue from 'vue';
import store from './UsersStore';
import GmnHeader from '@/components/GmnHeader';
import GmnMain from '@/components/GmnMain';
import GmnPost from '@/components/GmnPost';
import GmnFooter from '@/components/GmnFooter';

export default {
    store: store,
    components:{
        GmnHeader,
        GmnMain,
        GmnPost,
        GmnFooter
    }
};
</script>
<style>

    .page{
        margin: 0;
        padding: 0;
    };

</style>