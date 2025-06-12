<template>
    <div class="news_feed">
        <div class="hd pb-3">
            <p class="heading f22  fw5">{{ playerHeading }}</p>
        </div>

        <ul class="list">
            <li v-for="item in newsFeed" :key="item.name" >
                <div class="item">
                    <img :src="item.img" class="img-fluid" >
                    <div class="content p-1 px-3">
                            <p class="name fw5 primaryCol">{{item.name}}</p>
                    <p class="location f12 mb-1">{{item.location}}</p>
                    <p class="date silverCol f13">{{item.date}}</p>
                    </div>
                    <button class="btn btn-primary px-3 view_btn" >View</button>
                </div>
            </li>
        </ul>

    </div>
</template>
<script>
import newsfeed from "@/assets/images/newsfeed.jpg"
export default {
    name: 'Newsfeed',
    props : {
        playerHeading : String
    },
    data(){
        return{
            newsFeed : [
                {img : newsfeed,name : 'Football Team Selection',location : 'Texas USA ',date : '16 Feb - 5 March'},
                {img : newsfeed,name : 'Football Team Selection',location : 'Texas USA ',date : '16 Feb - 5 March'},
            ]
        }
    }
}
</script>