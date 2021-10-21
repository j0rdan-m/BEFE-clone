<template>
    <div>
        <gmn-header v-bind:header_index="1"></gmn-header>

        <div class="main_postpage">
            <div class="heading text-center font-bold text-2xl m-5 text-gray-800">New Post</div>
            <div class="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl create-card">
                <input class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none text-style" spellcheck="false" placeholder="Title" type="text">
                <textarea class="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none text-style" spellcheck="false" placeholder="Describe everything about this post here"></textarea>
                
                <!-- icons -->
                <div class="icons flex text-gray-500 m-2">
                    <svg class="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
                    <div class="count ml-auto text-gray-400 text-xs font-semibold">0/300</div>
                </div>
                <!-- buttons -->
                <div class="buttons flex">
                    <div class="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto">Cancel</div>
                    <div class="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">Post</div>
                </div>
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
    .create-card{
        /* background: linear-gradient(white, white, #243b55); */
        background: white;
        border-radius: 10px;
    }
    .btn{
        border-radius: 20px;
        border: 1px solid #243b55;
        background-color: #243b55;
        color: #FFFFFF;
        font-size: 12px;
        font-weight: bold;
        padding: 12px 45px;
        letter-spacing: 1px;
        text-transform: uppercase;
        transition: transform 80ms ease-in;
    }
    .text-style{
        font-family: 'Montserrat', sans-serif;
        color: #243b55;
        
    }
    textarea{
        min-block-size: 250px;
        background: #243b55;
        color: white;
        border: none;
        /* padding: 12px 15px;
        margin: 8px 0; */
    }
    input {
        background: #243b55;
        color: white;
        border: none;
        /* padding: 12px 15px;
        margin: 8px 0; */
    }

</style>