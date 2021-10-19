<template >
    <div class="posts">
        <!-- <gmn-header></gmn-header> -->
        <gmn-post></gmn-post>
        <gmn-post></gmn-post>
    </div>
</template>
<script>
import GmnPost from '@/components/GmnPost';
// import GmnHeader from './GmnHeader.vue';
export default {
    name: 'GmnPosts',
    components:{
        GmnPost,
        // GmnHeader
    }
};
</script>
<style >
    @import url('../styles/posts.css');
</style>