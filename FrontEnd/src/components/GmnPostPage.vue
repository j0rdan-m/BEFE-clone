<template>
    <div>
        <gmn-header v-bind:header_index="1"></gmn-header>

        <div class="main_postpage">
            <div class="heading text-center font-bold text-2xl m-5 text-gray-800 text-style">New Post</div>
            <div class="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl create-card">
                <input class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none text-style" id="titleValue" spellcheck="false" placeholder="Title" type="text">
                <textarea class="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none text-style" id="descriptionValue" spellcheck="false" placeholder="Describe everything about this post here"></textarea>
                <div class="img-load">
                    <!-- icons -->
                    <div class="icons flex text-gray-500 m-2 icons_unactive">
                        <svg @click="open_link" class="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
                    </div>
                    <div class="icons flex text-gray-500 m-2 icons_active">
                        <svg @click="close_link" class="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
                    </div>
                    <div class="image_link">
                        <input id="imageValue" type="text" placeholder="Copy link here..." />
                    </div>
                </div>
                <!-- buttons -->
                <div class="buttons flex">
                    <!-- <div class="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto">Cancel</div> -->
                    <div class="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-auto" @click="AddNewPost">Post</div>
                </div>
            </div>
        </div>

        <gmn-footer></gmn-footer>
    </div>
</template>
<script>
import GmnFooter from './GmnFooter.vue';
import GmnHeader from './GmnHeader.vue';
import vuex from 'vuex';

export default {
    components: { GmnHeader, GmnFooter },
    data () {
        return {
            index_header:2,
            title:"",
            text:"",
            image:""
        };
    },
    methods: {
        AddNewPost () {
            let $userIdValue = sessionStorage.getItem('userId');
            let $titleValue = document.querySelector("#titleValue").value;
            let $descriptionValue = document.querySelector("#descriptionValue").value;
            let $imageUrl = document.querySelector("#imageValue").value;

            this.createPost({userId: $userIdValue, title: $titleValue, description: $descriptionValue, imageUrl: $imageUrl});
        },

        open_link () {
            let nodeLink = document.querySelector("#imageValue");
            nodeLink.parentNode.style.display="block";
            let unactiveButton = document.querySelector('.icons_unactive');
            unactiveButton.style.display="none";
            let activeButton = document.querySelector('.icons_active');
            activeButton.style.display="block";
            
        },
        close_link () {
            let nodeLink = document.querySelector("#imageValue");
            nodeLink.parentNode.style.display="none";
            let unactiveButton = document.querySelector('.icons_unactive');
            unactiveButton.style.display="block";
            let activeButton = document.querySelector('.icons_active');
            activeButton.style.display="none";
        },

        ...vuex.mapActions(['createPost'])
    }

};
</script>
<style>
    @import url('../styles/post-page.css');

</style>