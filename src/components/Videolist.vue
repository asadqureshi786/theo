<template>
    <div class="video_list mt-3" >
        <ul>
            <li>
                <div class="video_main">
                    <img :src="videoCover" class="img-fluid" alt="">
                    <div class="backdrop"></div>
                    <div class="play_button">
                        <svg viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.98047 3.51001C5.43047 4.39001 4.98047 9.09992 4.98047 12.4099C4.98047 15.7199 5.41047 20.4099 7.98047 21.3199C10.6905 22.2499 18.9805 16.1599 18.9805 12.4099C18.9805 8.65991 10.6905 2.58001 7.98047 3.51001Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </div>
                    <div class="time_duration">42:10</div>
                </div>
            </li>
        </ul>        
    </div>
</template>

<script>
import videoCover from "@/assets/images/videoCover.jpg"
    export default {
        name : "Videolist",
        data(){
            return(
                {
                    videoCover : videoCover,
                }
            )
        }
    }
</script>

<style lang="scss" >
@import '../assets/style/assets.scss';  
.video_list{
    ul{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        li{
            .video_main{
                width: 100%;
                height: 270px;
                border-radius: 8px;
                position: relative;
                overflow: hidden;
                img{
                    object-fit: cover;
                    width: 100%;
                    height: 100%;
                    border-radius: 8px;
                }
                .backdrop{
                    position: absolute;
                    top:0;
                    left: 0;
                    right:0;
                    bottom:0;
                    background: rgba(0,0,0,0.3);
                }
                .play_button{
                    background: rgba(255,255,255,0.5);
                    border-radius:100px;
                    position: absolute;
                    top:50%;
                    left:50%;
                    transform: translate(-50%,-50%);
                    width: 60px;
                    height: 60px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    svg{
                        width: 60px;
                        height: 60%;
                    }
                }
                .time_duration{
                    background: rgba(0,0,0,0.3);
                    border-radius:100px;
                    color:#fff;
                    padding:2px 5px;
                    position: absolute;
                    border-radius: 4px;
                    bottom:5px;
                    right:5px;
                    font-size: 12px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
        }
    }
}
</style>