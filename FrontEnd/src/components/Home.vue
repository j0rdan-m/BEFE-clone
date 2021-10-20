<template>
    <div class="page">
        <gmn-header v-bind:header_index="0"></gmn-header>  
        <div class="grid_container">
            <div class="home_main">
                <div class="aside"><gmn-main></gmn-main></div>
                <div class="content"><gmn-posts></gmn-posts></div>
            </div>
        </div>
        <gmn-footer></gmn-footer>
    </div>
</template>
<script>
import GmnHeader from '@/components/GmnHeader';
import GmnMain from '@/components/GmnMain';
import GmnPosts from '@/components/GmnPosts';
import GmnFooter from '@/components/GmnFooter';

export default {
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