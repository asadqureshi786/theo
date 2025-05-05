<template>
    <div class="video_list mt-3" >
        <ul>
            <li v-for="item in list" :key="item.id" >
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
                    list : [
                        {id : 1},
                        {id : 2},
                        {id : 3},
                    ]
                }
            )
        }
    }
</script>

