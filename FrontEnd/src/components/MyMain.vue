<template>
    <main>
        <div class="main-section">
            <div class="container">
                
                <div class="main-section-data">
                    <div class="col-lg-3 col-md-4 pd-left-none no-pd">
                            <div class="main-left-sidebar no-margin">
                                <gmn-header></gmn-header>
                            </div><!--main-left-sidebar end-->
                        </div>
                        
                        <div class="col-lg-6 col-md-8 no-pd">
                            <div class="main-ws-sec">
                                <div class="post-topbar">
                                    <div class="user-picy">
                                        <img src="http://via.placeholder.com/100x100" alt="">
                                    </div>
                                    <div class="post-st">
                                        <ul>
                                            <li><a class="post-jb active" href="#" title="">Post a Job</a></li>
                                        </ul>
                                    </div><!--post-st end-->
                                </div><!--post-topbar end-->
                                <div class="posts-section">
                                    <div class="post-bar">
                                        <div class="post_topbar">
                                            <div class="usy-dt">
                                                <img src="http://via.placeholder.com/50x50" alt="">
                                                <div class="usy-name">
                                                    <h3>John Doe</h3>
                                                    <span><img src="images/clock.png" alt="">3 min ago</span>
                                                </div>
                                            </div>
                                            <div class="ed-opts">
                                                <a href="#" title="" class="ed-opts-open"><i class="la la-ellipsis-v"></i></a>
                                                <ul class="ed-options">
                                                    <li><a href="#" title="">Edit Post</a></li>
                                                    <li><a href="#" title="">Unsaved</a></li>
                                                    <li><a href="#" title="">Unbid</a></li>
                                                    <li><a href="#" title="">Close</a></li>
                                                    <li><a href="#" title="">Hide</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="job_descp">
                                            <h3>Senior Wordpress Developer</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="#" title="">view more</a></p>
                                        </div>
                                        <div class="job-status-bar">
                                            <ul class="like-com">
                                                <li>
                                                    <a href="#"><i class="la la-heart"></i> Like</a>
                                                    <img src="images/liked-img.png" alt="">
                                                    <span>25</span>
                                                </li> 
                                                <li><a href="#" title="" class="com"><img src="images/com.png" alt=""> Comment 15</a></li>
                                            </ul>
                                            <a><i class="la la-eye"></i>Views 50</a>
                                        </div>
                                    </div><!--post-bar end-->
                                </div><!--posts-section end-->
                            </div><!--main-ws-sec end-->
                        </div>
                        <div class="col-lg-3 pd-right-none no-pd">
                            <div class="right-sidebar">
                                <div class="widget widget-about">
                                    <img src="images/icon-above-font-s.png" alt="">
                                    <h3>Track Time on Workwise</h3>
                                    <span>Pay only for the Hours worked</span>
                                    <div class="sign_link">
                                        <h3><a href="#" title="">Sign up</a></h3>
                                        <a href="#" title="">Learn More</a>
                                    </div>
                                </div><!--widget-about end-->
                            </div><!--right-sidebar end-->
                        </div>
                    </div>
                </div><!-- main-section-data end-->
            </div> 
    </main>
</template>
<script>
import GmnHeader from './GmnHeader';
export default {
    name: 'MyMain',
    components:{
        GmnHeader        
    }
    
};
</script>
<style>
    /* @import url('../styles/main.css'); */
    /* @import url('../styles/common.css'); */
</style> 