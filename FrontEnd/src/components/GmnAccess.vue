<template>
    <body>
        <div class="container" id="container">
            <div class="form-container sign-up-container">
                <form action="#">
                    <h1>Create Account</h1>
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Sign Up</button>
                </form>
            </div>
            <div class="form-container sign-in-container">
                <form action="#">
                    <h1>Sign in</h1>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <a href="#">Forgot your password?</a>
                    <button>Sign In</button>
                </form>
            </div>
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button class="ghost" id="signIn">Sign In</button>
                    </div>
                    <div class="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Don't have an account yet? No problem! Enter your personal details and start the journey with us</p>
                        <button class="ghost" id="signUp">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>

    </body>
</template>

<script>

import Vue from 'vue';
import store from './UsersStore';
import initaccess from '../js/gmnaccess';

export default {
    name: "GmnSignup",
    store: store,
    components:{

    },
    mounted(){
        initaccess();   
    }
};
</script>

<style>
    @import url('../styles/access.css');
</style>