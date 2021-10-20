<template>
    <div class="post h-full w-full bg-gray-50 flex items-center justify-center card-body">
        <div class="border bg-white mt-6 rounded-2xl p-4 card">
            <div class="flex items-center	justify-between">
                <div class="gap-3.5	flex items-center ">
                    <img src="https://images.unsplash.com/photo-1617077644557-64be144aa306?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" class="object-cover bg-yellow-500 rounded-full w-10 h-10" />
                    <div class="flex flex-col">
                        <b class="mb-2 capitalize text-style">sofia müller</b>
                        <time datetime="06-08-21" class="text-gray-400 text-xs text-style">06 August at 09.15 PM
                        </time>
                    </div>
                </div>
                <div class="bg-gray-100	rounded-full h-3.5 flex	items-center justify-center edit-button">
                    <button><i class="material-icons-outlined">more_horiz</i></button>
                </div>
            </div>
            <div class="whitespace-pre-wrap mt-7 text-style">Hello guys 🥰</div>
            <div class="mt-5 flex gap-2	 justify-center border-b pb-4 flex-wrap	">
                <img src="https://images.unsplash.com/photo-1610147323479-a7fb11ffd5dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80" class="bg-red-500 rounded-2xl w-1/3 object-cover h-96 flex-auto" alt="photo">
                <img src="https://images.unsplash.com/photo-1614914135224-925593607248?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80" class="bg-red-500 rounded-2xl w-1/3 object-cover h-96 flex-auto" alt="photo">
                <img src="https://images.unsplash.com/photo-1610147323479-a7fb11ffd5dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80" class="bg-red-500 rounded-2xl w-1/3 object-cover h-96 flex-auto" alt="photo">

            </div >
            <div class="interactions rounded-2xl">
                <div class=" h-16 border-b  flex items-center justify-around">
                    <div class="flex items-center	gap-3	">
                        <span class="material-icons-outlined icon-style">
                            chat_bubble_outline
                        </span>
                        <div class="text-sm	text-style text-style">10 Comments</div>
                    </div>
                    <div class="flex items-center	gap-3">card_body
                        <span class="material-icons-outlined icon-style">
                            favorite_border
                        </span>
                    </div>
                    <div class="flex items-center	gap-3">
                        <span class="material-icons-outlined icon-style">
                            share
                        </span>
                        <div class="text-sm text-style text-style">Share</div>
                    </div>
                    
                </div>
                <div class="flex items-center justify-between mt-4">
                    <img src="https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"  class="bg-yellow-500 rounded-full w-10 h-10 object-cover border">
                    <div class="flex items-center	justify-between	 bg-gray-50 h-11 w-11/12 border rounded-2xl	 overflow-hidden px-4 ">
                        <input type="search" class="text-style w-full py-2 pl-4 pr-10 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue" style="border-radius: 25px" placeholder="Post a comment..." autocomplete="off"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import initheader from '../js/gmnheader';

export default {
    name: "GmnPost"
};
</script>

<style>

    @import url('../styles/post.css');
</style>