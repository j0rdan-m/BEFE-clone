<template>
    <body>
        <div class="bg-gray-200 font-sans h-screen w-full flex flex-row justify-center items-center" id="main">
            <div class="card w-96 mx-auto bg-white  shadow-xl hover:shadow" id="card">
                <img class="w-32 mx-auto rounded-full -mt-20 border-8 border-white" src="https://avatars.githubusercontent.com/u/67946056?v=4" alt="">
                <div class="text-center mt-2 text-3xl font-medium" id="text">António Alexandre</div>
                <div class="text-center mt-2 font-light text-sm" id="text">@agpa</div>
                <div class="text-center font-normal text-lg" id="text">Kerala</div>
                <div class="px-6 text-center mt-2 font-light text-sm" id="text">
                    <p>
                        Front end Developer, avid reader. Love to take a long walk, swim
                    </p>
                </div>
                <hr class="mt-8">
                <div class="flex p-4">
                    <div class="w-1/2 text-center" id="text">
                        <span class="font-bold">1.8 k</span> Followers
                    </div>
                    <div class="w-0 border border-gray-300">
                        
                    </div>
                    <div class="w-1/2 text-center" id="text">
                        <span class="font-bold">2.0 k</span> Following
                    </div>
                </div>
            </div>
        </div>
        
    </body>
</template>

<script>

import initheader from '../js/gmnheader';

export default {
    name: "GmnHeader",
    mounted(){
        initheader();   
    }
};
    
</script>

<style>
    @import url('../styles/main.css');
    
</style>