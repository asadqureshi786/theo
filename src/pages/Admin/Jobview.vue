<template>
      <!-- Page Header Section Start -->
      <div class="page_header">
            <div class="heading_icon " >
                <div id="goBack" @click="goback" class="cursor-pointer" ><i class="pi pi-chevron-left"></i></div>
               <h3 class="hd">Job View</h3>
            </div>
          </div>
        <!-- Page Header Section End -->

        <div class="jobView">
            <div class="row">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-body">
                        <div class="personal_info">
                            <div class="top">
                                <div class="main">
                                    <div class="lside">
                                        <h5 class="primaryCol2 f30 fw6" >Postion: Goalkeeper</h5>
                                    </div>
                                    <div class="rside">
                                        <div class="bookmark_icon">
                                            <i class="pi pi-bookmark" ></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="main">
                                    <div class="d-flex align-items-center gap-4" >
                                        <p class="text f19 black fw5">LeagueL Liga</p>
                                        <p class="text f19 black fw5">Club Al Nasar</p>
                                    </div>
                                    <div class="d-flex align-items-center gap-2">
                                        <button class="btn btn-secondary">Received</button>
                                        <button class="btn btn-primary">Propose Player</button>
                                    </div>
                                </div>
                                <div class="main">
                                    <div class="d-flex align-items-center gap-4">
                                        <p class="agent f14 silverCol">Agent: Rohat Ackaya</p>
                                    </div>
                                    <Playerproposed :proposedImages="proposedImages" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4"></div>
        </div>
        </div>
</template>


<script>

// Images
import proposed1 from "@/assets/images/player1.png"
import proposed2 from "@/assets/images/player2.png"
import proposed3 from "@/assets/images/player3.png"
import proposed4 from "@/assets/images/player4.png"

import Playerproposed from '@/components/Playerproposed.vue';
    export default{
        name : 'Jobview',
        components : {
            Playerproposed,
        },
        data() {
            return {
                proposedImages : [proposed1,proposed2,proposed3,proposed4],
            };
        },
        methods : {
        goback(){
            window.history.back();
        }
    }
    }
</script>