<template>
    <div class="sidePlayer">
        <div class="hd pb-3">
            <p class="heading f20  fw5">{{playerHeading}}</p>
            <a href="" class="fw4 text-decoration-none black f15" >See All</a>
        </div>
        <ul class="players">
            <li v-for="item in players" :key="item.text" >
                <div class="box">
                    <img class="img-fluid" :src="profile2" />
                    <div class="profile">
                        <p class="primaryCol2 fw5 f16">{{item.text}}</p>
                        <div>
                            <p class="f13 fw4 silverCol">Posted By {{item.posted}}</p>
                            <div class="dot" ></div>
                            <p class="f11 fw4 silverCol">{{item.time}}</p>
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
    name : 'Sideplayers',
    props : {
        playerHeading : String
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
