<template>
    <div class="sidePlayer proposePlayer">
        <div class="hd pb-3">
            <p class="heading f22  fw5">{{playerHeading}}</p>
            <a href="" class="fw4 text-decoration-none black f15" >See All</a>
        </div>
        <ul class="players">
            <li v-for="item in allProposals" :key="item.text" >
                <div class="box">
                    <img class="img-fluid" :src="item.player.image" />
                    <div class="profile">
                        <p class="primaryCol2 fw5 f16">{{item.player.name}}</p>
                        <div>
                            <p class="f13 fw4 silverCol">Club: <img width="10px" height="10px" class="ms-1 img-fluid club_img " :src="item.player.club.logo_url" alt=""> {{item.player.club.name}}</p>
                            <div class="dot" ></div>
                            <p class="f11 fw4 silverCol">{{item.created_at_human}}</p>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>

    

</template>

<script>
// Images
import profile2 from "@/assets/images/profile2.jpg"
export default {
    name : 'ProposePlayer',
    props : {
        playerHeading : String,
        allProposals : Array,
    },
    data(){
        return{
            profile2 : profile2,
            players : [
                {img : profile2, text : 'Goalkeeper Needed', posted : 'vicotor', time : '34 mins ago'},
                {img : profile2, text : 'Goalkeeper Needed', posted : 'vicotor', time : '34 mins ago'},
                {img : profile2, text : 'Goalkeeper Needed', posted : 'vicotor', time : '34 mins ago'},
                {img : profile2, text : 'Goalkeeper Needed', posted : 'vicotor', time : '34 mins ago'},
            ],
        }
    }
}
</script>
