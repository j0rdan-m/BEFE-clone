<template>
<div class="post-page">

    <div class="bg-gray-100">
        <!-- Start of Header -->
        <gmn-header v-bind:header_index="2"></gmn-header>
        <!-- End of Header -->

        <div class="profile">
            <div class="profile-bg"></div>
            <section class="profile-container">
                <aside class="profile-image">
                    <button class="camera" type="file">
                        <!-- <input id="post_image" type="file" :v-model="image"> -->
                        <i class="fas fa-camera"></i>
                        
                    </button>
                </aside>
                <section class="profile-info">
                    <h1 class="first-name"> {{ user_firstname }} </h1>
                    <h1 class="second-name"> {{ user_lastname }} </h1>
                </section>
                <section>
                    <h2>ABOUT</h2>
                    <p>
                        hello hello, I'm angela, artist and developer 🌼 student at stanford; intern at zynga 🌱 happy to be here! 🌿 let's code the best we can!
                    </p>
                </section>
            </section>
            
        </div>
    </div>
</div>
</template>

<script>
import GmnHeader from './GmnHeader.vue';
import vuex from 'vuex';
export default {
    components: { GmnHeader },
    computed: {...vuex.mapGetters(['user_firstname', 'user_lastname'])}
    

};
</script>

<style>

    @import url('../styles/profile.css');
   /* :root {
        --main-color: #4a76a8;
    }

    .bg-main-color {
        background-color: var(--main-color);
    }

    .text-main-color {
        color: var(--main-color);
    }

    .border-main-color {
        border-color: var(--main-color);
    } */
</style>