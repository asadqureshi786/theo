<template>
     <div class="page_header">
         <h3 class="hd">Newsfeed</h3>
    </div>

    <div class="news_feeds mt-4">
        <div class="row">
            <div class="col-md-8">
              <div class="editor">
                  <Editor v-model="value" editorStyle="height: 220px"  />
                  <button class="btn btn-primary px-4 " >Post</button>
              </div>
              <div class="feed_list">
                <ul>
                    <li>
                        <div class="card mt-4">
                            <div class="card-body">
                                  <div class="top">
                            <div class="lside">
                                <img :src="player" class="profile img-fluid" />
                                <div>
                                    <p class="black f14 fw5">Tom Lewis</p>
                                    <div class="d-flex align-items-center gap-2" >
                                        <span class="formText fw3 f11" >20 h</span>
                                        <span class="dot" ></span>
                                        <i  class="pi pi-globe" ></i>
                                    </div>
                                </div>
                            </div>
                              <div class="action">                                    
                                    <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.0833 10.8335C22.275 10.8335 23.25 11.8085 23.25 13.0002C23.25 14.1918 22.275 15.1668 21.0833 15.1668C19.8917 15.1668 18.9167 14.1918 18.9167 13.0002C18.9167 11.8085 19.8917 10.8335 21.0833 10.8335Z" stroke="#707070" stroke-width="1.5"/>
                                        <path d="M5.91671 10.8335C7.10837 10.8335 8.08337 11.8085 8.08337 13.0002C8.08337 14.1918 7.10837 15.1668 5.91671 15.1668C4.72504 15.1668 3.75004 14.1918 3.75004 13.0002C3.75004 11.8085 4.72504 10.8335 5.91671 10.8335Z" stroke="#707070" stroke-width="1.5"/>
                                        <path d="M13.5 10.8335C14.6916 10.8335 15.6666 11.8085 15.6666 13.0002C15.6666 14.1918 14.6916 15.1668 13.5 15.1668C12.3083 15.1668 11.3333 14.1918 11.3333 13.0002C11.3333 11.8085 12.3083 10.8335 13.5 10.8335Z" stroke="#707070" stroke-width="1.5"/>
                                    </svg>
                                </div>
                        </div>
                        <p class="desc">Lucas Méndez delivered a standout performance over the weekend, scoring 4 goals and assisting once in a 5-2 win for Estrella CF. The 22-year-old striker continues to demonstrate clinical finishing and composure under pressure. With his contract expiring in six months and no current agent representation listed, Méndez is becoming one of the most attractive free agents in the regional circuit. Definitely one to watch for clubs seeking a versatile forward. <a class="readMore" href="#" >Read Mores</a></p>
                        <img :src="cover" class="cover_img img-fluid" />
                        <div class="social_icon">
                            <div class="icon">
                                <i class="pi pi-thumbs-up-fill" ></i>
                            </div>
                            <p class="text" >88</p>
                            <div class="dot" ></div>
                            <p class="text" >4 Comments</p>
                        </div>
                        <div class="bottom_icon">
                            <div class="action_social">
                                <span class="icon rotate" ><i class="pi pi-thumbs-up" ></i></span>
                                <span class="title">Like</span>
                            </div>
                            <div class="action_social">
                                <span class="icon" ><i class="pi pi-comments" ></i></span>
                                <span class="title">Comment</span>
                            </div>
                        </div>
                            </div>
                        </div>
                    </li>
                </ul>
              </div>
            </div>
            <div class="col-md-4">
                 <div class="card">
                        <div class="card-body">
                            <Sideplayers playerHeading="Recent Request" />
                            <div class="mt-4"></div>
                            <Newsfeed playerHeading="Featured" />
                        </div>
                    </div>
            </div>
        </div>
    </div>

</template>

<script>
import Sideplayers from "@/components/Sideplayers.vue"
import Newsfeed from "@/components/Newsfeed.vue"

// Images
import player from "@/assets/images/player2.png"
import cover from "@/assets/images/cover.jpg"


    export default {
        name : "Newsfeeds",
        components : {
            Sideplayers,
            Newsfeed,
        },
        data() {
        return {
            value: 'Whats on your mind?',
            player : player,
            cover : cover,
        }
    }
    }
</script>