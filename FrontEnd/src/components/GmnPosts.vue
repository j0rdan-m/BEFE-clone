<template >
    <div class="posts">
        <gmn-post></gmn-post>
        <gmn-post></gmn-post>
    </div>
</template>
<script>
import GmnPost from '@/components/GmnPost';
export default {
    name: 'GmnPosts',
    components:{
        GmnPost
    }
};
</script>
<style >
    @import url('../styles/posts.css');
</style>