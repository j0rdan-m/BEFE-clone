<template>
    <div class="wrapper">
            
        <header>
            <div class="container">
                <div class="header-data">
                    <div class="logo">
                        <a href="index.html" title=""><img src="images/icon-group-small.png" alt=""></a>
                    </div><!--logo end-->
                    <div class="search-bar">
                        <form>
                            <input type="text" name="search" placeholder="Search...">
                            <button type="submit"><i class="fa fa-search"></i></button>
                        </form>
                    </div><!--search-bar end-->
                        <nav>
                            <ul>
                                <li>
                                    <a href="index.html" title="">
                                        <span><img src="images/icon1.png" alt=""></span>
                                        Home
                                    </a>
                                </li>
                            </ul>
                        </nav><!--nav end-->
                        
                        <div class="menu-btn">
                            <a href="#" title=""><i class="fa fa-bars"></i></a>
                        </div><!--menu-btn end-->

                        <div class="user-account">
                            <div class="user-info" @click="activateSettings">
                                <img src="http://via.placeholder.com/30x30" alt="">
                                <a href="#" title=""> {{ username }} </a>
                                <i class="fa fa-sort-down"></i>
                            </div>
                            <div class="user-account-settingss">
                                <h3>Online Status</h3>
                                <ul class="on-off-status">
                                    <li>
                                        <div class="fgt-sec">
                                            <input type="radio" name="cc" id="c5">
                                            <label for="c5">
                                                <span></span>
                                            </label>
                                            <small>Online</small>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="fgt-sec">
                                            <input type="radio" name="cc" id="c6">
                                            <label for="c6">
                                                <span></span>
                                            </label>
                                            <small>Offline</small>
                                        </div>
                                    </li>
                                </ul>
                                <h3>Custom Status</h3>
                                <div class="search_form">
                                    <form>
                                        <input type="text" name="search">
                                        <button type="submit">Ok</button>
                                    </form>
                                </div><!--search_form end-->
                                <h3>Setting</h3>
                                <ul class="us-links">
                                    <li><a href="profile-account-setting.html" title="">Account Setting</a></li>
                                    <li><a href="#" title="">Privacy</a></li>
                                    <li><a href="#" title="">Faqs</a></li>
                                    <li><a href="#" title="">Terms & Conditions</a></li>
                                </ul>
                                <h3 class="tc"><a href="sign-in.html" title="">Logout</a></h3>
                            </div><!--user-account-settingss end-->
                        </div>
                </div><!--header-data end-->
            </div>
        </header><!--header end-->

    </div><!--theme-layout end-->
</template>
<script>
export default {
    name: 'MyHeader',
    data () {
        return{
            username: "Antonio"
        };
    },
    methods:{
        activateSettings: function (){
            document.querySelector(".user-account-settingss").classList.toggle("active");
            console.log("OK");
        }
    }
};
</script>
<style>
    @import url('../styles/common.css');
    @import url('../styles/header.css');
 
</style>