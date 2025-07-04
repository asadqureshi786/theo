<template>
    <div class="sidePlayer proposePlayer h-100">
        <div class="hd pb-3">
            <p class="heading f22  fw5">{{playerHeading}}</p>
            <!-- <a href="" class="fw4 text-decoration-none black f15" >See All</a> -->
        </div>
        <div v-if="allProposals.length == 0" class="h-100 d-flex w-100 justify-content-center align-items-center" >No Player Found</div>
        <ul>
            <li class="position-relative" v-for="item in allProposals" :key="item.text" >
                <div class="box position-relative"> 
                    <img class="img-fluid" :src="item.player.image" />
                    <div class="profile">
                        <p class="primaryCol2 fw5 f16">{{item.player.name}} </p>
                        <div>
                            <p class="f13 fw4 silverCol">Club: <img width="10px" height="10px" class="ms-1 img-fluid club_img " :src="item.player.club.logo_url" alt=""> {{item.player.club.name}}</p>
                            <div class="dot" ></div>
                            <p class="f11 fw4 silverCol">{{item.created_at_human}}</p>
                        </div>
                    </div>
                     <div v-if="action" class="action_buttons">
                            <button type="button" @click="proposalReq(item.id,item.player.id,'reject')" class="action_button btn reject"> <i class="pi pi-times" ></i> Reject</button>
                            <button type="button" @click="proposalReq(item.id,item.player.id,'accept')"  class="action_button btn accept"><i class="pi pi-check" ></i> Accept</button>
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
        action : Boolean,
        proposalReq : Function,
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
