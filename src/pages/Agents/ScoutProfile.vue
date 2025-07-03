<template>
  <div class="player_profile plus_diary">
    <!-- Page Header Section Start -->
    <div class="page_header">
      <div class="heading_icon">
        <div id="goBack" @click="goback" class="cursor-pointer">
          <i class="pi pi-chevron-left"></i>
        </div>
        <h3 class="hd">Player Portfolio</h3>
      </div>
    </div>
    <!-- Page Header Section End -->

    <!-- Profile Card Section Start -->
    <div class="profile_section">
      <div class="profileImage">
        <img :src="playerData.image" class="img-fluid" alt="" />
        <div class="profile_number">#20</div>
      </div>
      <div class="profile_instruction">
        <div class="main_col">
          <div class="top">
            <div class="right_side">
              <h1 class="player_name fw6 pb-2">{{ playerData.name }}</h1>
              <ul class="teamAgent">
                <li>
                  <div class="mid_sec">
                    <img
                      class="rounded-circle sm_img object-fit-cover"
                      :src="Profile1"
                    />
                    <label>{{ playerData.citizenship }}</label>
                  </div>
                </li>
                <li>
                  <div class="mid_sec">
                    <img
                      class="rounded-circle sm_img object-fit-cover"
                      :src="club1"
                    />
                    <label>Agent: James Worth</label>
                  </div>
                </li>
              </ul>
            </div>
          
          </div>
          <div class="ft_bottom">
            <div>
              <div class="contract_dates">
                <label class="">Contract Expire Date : </label>
                <span class="">{{ playerData.contract_expire ? playerData.contract_expire : '-' }}</span>
              </div>
              <div class="fcol mt-1">
                <p class="primaryText1 text">Scout Status:</p>
                <span class="status">{{playerData.status ? playerData.status : '-'}}</span>
              </div>
            </div>

          </div>
        </div>
        <div class="profile_detail">
          <div class="row">
            <div class="col-md-5">
              <ul>
                <li>
                  <label>Date of birth:</label>
                  <p class="text">{{ playerData.dob ? playerData.dob : '' }}</p>
                </li>
                <li>
                  <label>Place of birth:</label>
                  <p class="text">{{ playerData.pob ? playerData.pob : '' }}</p>
                </li>
                <li>
                  <label>Age:</label>
                  <p class="text">{{ playerData.age ? playerData.age : '' }}</p>
                </li>
                <li>
                  <label>Height:</label>
                  <p class="text">{{ playerData.height ? playerData.height : '-' }}</p>
                </li>
                <li>
                  <label>Citizenship</label>
                  <p class="text">{{ playerData.citizenship ? playerData.citizenship : '' }}</p>
                </li>
                <li>
                  <label>Position:</label>
                  <p class="text">{{ playerData.position ? playerData.position : '' }}</p>
                </li>
              </ul>
            </div>
            <div class="col-md-5 offset-md-2">
              <ul>
                <li>
                  <label>Foot:</label>
                  <p class="text">{{ playerData.foot ?playerData.foot : '-' }}</p>
                </li>
                <li>
                  <label>Joined:</label>
                  <p class="text">{{ playerData.joining_date ? playerData.joining_date : '-' }}</p>
                </li>
                <li>
                  <label>Contract expires:</label>
                  <p class="text">{{playerData.contract_expire ? playerData.contract_expire : '-'}}</p>
                </li>
                <li>
                  <label>Market Value</label>
                  <p class="text">{{ playerData.mv ? playerData.mv : '-' }}</p>
                </li>
                <li>
                  <label>Date of last contract:</label>
                  <p class="text">{{playerData.last_contract ? playerData.last_contract : '-'}}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="diary_section">
        <!-- <div class="head">
          <h4 class="text" >Agent 64%</h4>
        </div> -->
         <div class="row formFileds">

            <div class="col-md-6">
              <div class="form-group">
                <label for="">Date</label>
                <!-- <input type="date" class="form-control" > -->
                 <div class="date_picker">
                   <DatePicker class="" v-model="formData.status_date" readonly />
                 </div>

              </div>
            </div>
            
            <div class="col-md-6">
              <div class="form-group">
                <label for="">Transfer Offer</label>
              <div class="d_select">
              <Select
                v-model="formData.transfer_offer"
                :options="t_offers"
                optionLabel="name"
                optionValue="value"
                placeholder="Select Offer"
                class="w-full"
              />
            </div>
              </div>
            </div>


            <div class="col-md-6">
              <div class="form-group">
                <label for="">Status</label>
              <div class="d_select">
              <Select
                v-model="formData.status"
                :options="status"
                optionLabel="name"
                   optionValue="value"
                placeholder="Select Status"
                class="w-full"
              />
              <!-- :options="leagues" -->
            </div>
              </div>
            </div>

             <div class="col-md-6">
              <div class="form-group">
                <label for="">Link</label>
                <input type="text" v-model="formData.link" class="form-control" >
              </div>
            </div>


             <div class="col-md-12">
              <div class="form-group">
                <label for="">Feedback</label>
                <textarea type="textarea" v-model="formData.feedback" cols="10" rows="5" class="form-control" ></textarea>
              </div>
            </div>

            <div class="col-md-12">
              <button type="button" @click="addDriaryData" class="btn btn-primary w-100">Update</button>
            </div>
          </div>
      </div>
    </div>

    <!-- Transfer History Compenent Start -->
    <div class="light_head mt-5">Transfer History</div>
    <Simpletable class="mt-3" :headers="dealHeaders" :data="deals" />
    <!-- Transfer History Compenent End -->
  </div>
</template>

<script>
// Images
import Profile1 from "@/assets/images/profile1.jpg";
import club1 from "@/assets/images/club1.png";
import fullProfile from "@/assets/images/fullProfile.jpg";

// Components
import Documents from "@/components/Documents.vue";
import Videolist from "@/components/Videolist.vue";
import Simpletable from "@/components/Simpletable.vue";

// Axios
import axios from "axios";

// Toast
import { useToast } from "vue-toastification";
const toast = useToast();

// Route
import { useRoute } from "vue-router";

export default {
  name: "Playerprofile",
  components: {
    Documents,
    Videolist,
    Simpletable,
  },
  data() {
    return {
      token: localStorage.getItem("token"),
      Profile1: Profile1,
      club1: club1,
      fullProfile: fullProfile,
      playerData: {},
      t_offers: [
        { name: 'Load' , value : 'loan' },
        { name: 'Free', value : 'free' },
        { name: 'Contract', value : 'contract' },
      ],
      status: [
        { name: 'Negotiation' , value : 'negotiation' },
        { name: 'Approach' , value : 'approach' },
        { name: 'Follow' , value : 'follow' },
      ],
      selectedOffers : null,
      selectedStatus : null,
      formData : {
        player_id : '',
        diary_id : '',
        status_date : '',
        transfer_offer : '',  
        status : '',  
        link : '',  
        feedback : '',  
      },
      // diaryData : {},
      dealHeaders: ["Season", "Date", "Left", "Joined", "Mv", "Fee"],
      deals: [
        [
          "18/19",
          "01/Jul/2018",
          "AS Monaco",
          "Paris SG",
          "$120.00 M",
          "End of Loan",
        ],
        [
          "18/19",
          "01/Jul/2018",
          "AS Monaco",
          "Paris SG",
          "$120.00 M",
          "End of Loan",
        ],
        [
          "18/19",
          "01/Jul/2018",
          "AS Monaco",
          "Paris SG",
          "$120.00 M",
          "End of Loan",
        ],
        [
          "18/19",
          "01/Jul/2018",
          "AS Monaco",
          "Paris SG",
          "$120.00 M",
          "End of Loan",
        ],
        [
          "18/19",
          "01/Jul/2018",
          "AS Monaco",
          "Paris SG",
          "$120.00 M",
          "End of Loan",
        ],
        [
          "18/19",
          "01/Jul/2018",
          "AS Monaco",
          "Paris SG",
          "$120.00 M",
          "End of Loan",
        ],
        [
          "18/19",
          "01/Jul/2018",
          "AS Monaco",
          "Paris SG",
          "$120.00 M",
          "End of Loan",
        ],
        [
          "18/19",
          "01/Jul/2018",
          "AS Monaco",
          "Paris SG",
          "$120.00 M",
          "End of Loan",
        ],
        // Add more deal data here
      ],
    };
  },
  mounted() {
    const route = useRoute();
    this.fetchPlayera(route.params.id);
  },
  methods: {
    goback() {
      window.history.back();
    },
    async fetchPlayera(id) {
      try {
        const response = await axios.get(
          this.$baseURL + `theo/api/agent/players/${id}`,
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${this.token}`,
            },
          }
        );
        if (response.status == 200) {
          console.log(response.data);
          this.playerData = response.data.player;
          this.playerData.dob = response.data.player.dob.slice(0, -8);
          this.playerData.joining_date = response.data.player.joining_date.slice(0,-8);
          this.formData = {...response.data.diary, diary_id: response.data.diary.id };
          // this.player_body = this.player_data.map((player,index)=>({

          // checkbox: `<label for="check1" class="table_check_list" class="text-center">
          //             <input id="check1" type="checkbox" />
          //             <div class="c_checkbox"><i class="pi pi-check" ></i></div>
          //           </label>`,

          // join_date: `<div class="text">${player.joining_date.slice(0, -8)}</div>`,

          // player_name: `<div class="text fw6">${player.name}</div>`,

          // dob: `<div class="text fw6">${player.dob.slice(0, -8)}</div>`,

          // // nationality: `<div class="flag_imges "><img class="img-fluid" src="${ukLogo}" ><img class="img-fluid" src="${frLogo}" ></div>`,

          // nationality: `<div class="text">${player.citizenship}</div>`,

          // role: `<div class="text">${player.position}</div>`,

          // mv: `<div class="text">€${player.mv}m</div>`,

          // contract_end: `<div class="text">${player.contract_expire}</div>`,
          // }))
        }
      } catch (error) {
        console.log(error.response.data);
      }
    },

    // Add Diary Data
    async addDriaryData(){
      console.log(this.$baseURL+"theo/api/agent/scout-players/save-diary",this.formData,{
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${this.token}`,
            },
        });
      // return;
      try {

        const response = await axios.post(this.$baseURL+"theo/api/agent/scout-players/save-diary",this.formData,{
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${this.token}`,
            },
        });
        if(response.status == 201){
          toast.success(response.data.message);
        }
      } catch (error) {
        
      }
    }

  },
};
</script>
