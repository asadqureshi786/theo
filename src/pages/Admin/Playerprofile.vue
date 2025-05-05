<template>
    <div class="player_profile">

        <!-- Page Header Section Start -->
        <div class="page_header">
            <div class="heading_icon " >
                <div id="goBack" @click="goback" class="cursor-pointer" ><i class="pi pi-chevron-left"></i></div>
               <h3 class="hd">Player Portfolio</h3>
            </div>
          </div>
        <!-- Page Header Section End -->

        <!-- Profile Card Section Start -->
         <div class="profile_section  ">
            <div class="profileImage">
                <img :src="fullProfile" class="img-fluid" alt="">
                <div class="profile_number">
                    #20
                </div>
            </div>
            <div class="profile_instruction">
                <div class="main_col">
                    <div class="top">
                        <div class="right_side">
                            <h1 class=" player_name fw6 pb-2" >Kylian Mbappé</h1>
                            <ul class="teamAgent" >
                               <li>
                                    <div class="mid_sec" >
                                        <img class="rounded-circle sm_img object-fit-cover"  :src="Profile1" >
                                        <label>Paris Saint-Germain</label>
                                    </div>
                               </li> 
                               <li>
                                <div class="mid_sec" >
                                    <img class="rounded-circle sm_img object-fit-cover"  :src="club1" >
                                    <label>Agent: James Worth</label>
                                </div>
                               </li>
                            </ul>
                        
                        </div>
                        <div class="left_side">
                            <div class="fcol" >
                                <p class="primaryText1 text" >Scout Status:</p>
                                <span class="status">Followed </span>
                            </div>
                            <div class="contract_expiry">
                                <div class="header">Contract Expiry Timer</div>
                                <div class="counter">
                                    <div>
                                        <p class="count primaryCol">06</p>
                                        <p class="text">Months Left</p>
                                    </div>
                                    <div>
                                        <p class="count primaryCol">10</p>
                                        <p class="text">DaysLeft</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ft_bottom">
                        <div class="contract_dates" >
                            <label class="" >Contract Expire Date : </label>
                            <span class="" >13 / Apr / 2028</span>
                        </div>
                        <div class="invite_link">
                            <span class="icon"><i class="pi pi-paperclip" ></i></span>
                            <span class="text">Invite Link</span>
                        </div>
                    </div>
                </div>
                <div class="profile_detail">
                    <div class="row">
                        <div class="col-md-5 ">
                            <ul>
                                <li>
                                    <label>Date of birth:</label>
                                    <p class="text" >Dec 20, 1998s</p>
                                </li>
                                <li>
                                    <label>Place of birth:</label>
                                    <p class="text">Pariss</p>
                                </li>
                                <li>
                                    <label>Age:</label>
                                    <p class="text">24 years</p>
                                </li>
                                <li>
                                    <label>Height:</label>
                                    <p class="text">1,78 m</p>
                                </li>
                                <li>
                                    <label>Citizenship</label>
                                    <p class="text">France</p>
                                </li>
                                <li>
                                    <label>Age:</label>
                                    <p class="text">24 years</p>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-5 offset-md-2">
                            <ul>
                                <li>
                                    <label>Position:</label>
                                    <p class="text">Attack - Left Winger</p>
                                </li>
                                <li>
                                    <label>Foot:</label>
                                    <p class="text">Right</p>
                                </li>
                                <li>
                                    <label>Joined:</label>
                                    <p class="text">Jul 1, 2018</p>
                                </li>
                                <li>
                                    <label>Contract expires:</label>
                                    <p class="text">Jun 30, 2024</p>
                                </li>
                                <li>
                                    <label>Jun 30, 2024</label>
                                    <p class="text">Player option 1 year</p>
                                </li>
                                <li>
                                    <label>Date of last contract:</label>
                                    <p class="text">May 21, 2022</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
         </div>    
        <!-- Profile Card Section End -->
        
        
        <!-- Documents Start -->
        <div class="light_head mt-5">
            Documents
        </div>
         <Documents class="" />
        <!-- Documents End -->

        <!-- Video List Components Start -->
        <div class="light_head mt-5">
            Videos
        </div>
         <Videolist/>
        <!-- Video List Components End -->

        <!-- Transfer History Compenent Start -->
        <div class="light_head mt-5">
            Transfer History
        </div>
        <Simpletable class="mt-3" :headers="dealHeaders" :data="deals"/>
        <!-- Transfer History Compenent End -->




    </div>
</template>

<script>

// Images
import Profile1 from "@/assets/images/Profile1.jpg"
import club1 from "@/assets/images/club1.png"
import fullProfile from "@/assets/images/fullProfile.jpg"

// Components
import Documents from "@/components/Documents.vue"
import Videolist from "@/components/Videolist.vue"
import Simpletable from "@/components/Simpletable.vue"

export default {
    name : 'Playerprofile',
    components : {
        Documents,
        Videolist,
        Simpletable
    },
    data(){
        return(
            {
                Profile1 : Profile1,
                club1 : club1,
                fullProfile : fullProfile,

                dealHeaders: ["Season", "Date", "Left", "Joined", "Mv", "Fee"],
                deals: [
                    ["18/19", "01/Jul/2018", "AS Monaco", "Paris SG", "$120.00 M","End of Loan"],
                    ["18/19", "01/Jul/2018", "AS Monaco", "Paris SG", "$120.00 M","End of Loan"],
                    ["18/19", "01/Jul/2018", "AS Monaco", "Paris SG", "$120.00 M","End of Loan"],
                    ["18/19", "01/Jul/2018", "AS Monaco", "Paris SG", "$120.00 M","End of Loan"],
                    ["18/19", "01/Jul/2018", "AS Monaco", "Paris SG", "$120.00 M","End of Loan"],
                    ["18/19", "01/Jul/2018", "AS Monaco", "Paris SG", "$120.00 M","End of Loan"],
                    ["18/19", "01/Jul/2018", "AS Monaco", "Paris SG", "$120.00 M","End of Loan"],
                    ["18/19", "01/Jul/2018", "AS Monaco", "Paris SG", "$120.00 M","End of Loan"],
                    // Add more deal data here
                ],
            }
        )
    },
    methods : {
        goback(){
            console.log("RUnning");
            window.history.back();
        }
    }
}
</script>