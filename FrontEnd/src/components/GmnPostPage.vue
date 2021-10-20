<template>
    <div>
        <gmn-header v-bind:header_index="1"></gmn-header>

        <div class="main_postpage">
            <div class="input_post">
                <label for="post_title">Title</label>
                <input id="post_title" type="text" :v-model="title">
            </div>
            <div class="input_post">
                <label for="post_text_content">Text</label>
                <input id="post_text_content" type="text" :v-model="text">
            </div>
            <div class="input_post">
                <label for="post_image">image</label>
                <input id="post_image" type="file" :v-model="image">
            </div>
            
        </div>

        <gmn-footer></gmn-footer>
    </div>
</template>
<script>
import GmnFooter from './GmnFooter.vue';
import GmnHeader from './GmnHeader.vue';
export default {
    components: { GmnHeader, GmnFooter },
    data () {
        return {
            index_header:2,
            title:"",
            text:"",
            image:""
        };
    }

};
</script>
<style>
    .main_postpage{
        min-height: 39vh;
    }
</style>