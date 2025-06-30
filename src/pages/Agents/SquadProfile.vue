<template>
  <div class="player_profile">
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
            <div class="left_side">
              <div class="fcol text-end mb-2">
              <button class="btn btn-primary" @click="showTimerModal = true" >Set Timer</button>
                  <!-- <p class="primaryText1 text">Scout Status:</p>
                  <span class="status">Followed </span> -->
              </div>
              <div class="contract_expiry">
                  <div class="header">Contract Expiry Timer</div>
                  <div class="counter">
                      <div>
                          <p class="count primaryCol">{{playerData.contract_months}}</p>
                          <p class="text">Months Left</p>
                      </div>
                      <div>
                          <p class="count primaryCol">{{playerData.contract_days}}</p>
                          <p class="text">DaysLeft</p>
                      </div>
                  </div>
              </div>
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
    </div>
    <!-- Profile Card Section End -->

    <!-- Documents Start -->
    <!-- <div class="light_head mt-5">
            Documents
        </div>
        <Documents class="" /> -->
    <!-- Documents End -->

    <!-- Video List Components Start -->
    <!-- <div class="light_head mt-5">
            Videos
        </div>
        <Videolist /> -->
    <!-- Video List Components End -->

    <!-- Transfer History Compenent Start -->
    <div class="light_head mt-5">Transfer History</div>
    <Simpletable class="mt-3" :headers="dealHeaders" :data="deals" />
    <!-- Transfer History Compenent End -->



    <!-- Add Profile Modal -->
     <Dialog
    v-model:visible="showTimerModal"
    maximizable
    modal
    header="Set Timer"
    :style="{ width: '40rem' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
  >
    <form @submit.prevent="addAgent"> 
      <!-- Corrected from 'from' to 'form' -->
      <div class="row formFileds">
      <div class="col-6">
          <div class="form-group">
            <label> Month</label>
            <div class="d_select">
              <Select v-model="selectedMonth" editable   optionValue="value" :options="months" optionLabel="name"placeholder="Select club" class="w-full" />
            </div>
            <small v-if="errors.selectedDay" class="text-danger validate">{{errors.selectedDay[0]}}</small>
            </div>
          </div>
      <div class="col-6">
          <div class="form-group">
            <label> Days</label>
            <div class="d_select">
              <Select v-model="selectedDay" editable   optionValue="value" :options="days" optionLabel="name"placeholder="Select Day" class="w-full" />
            </div>
              <small v-if="errors.selectedMonth" class="text-danger validate">{{errors.selectedMonth[0]}}</small>
            </div>
          </div>
      </div>
      <div class="flex justify-end gap-2 modal_footer">
        <button
          type="button"
          class="btn btn-secondary"
          label="Cancel"
          severity="secondary"
          @click="showTimerModal = false"
          >Cancel</button
        >
        <button
          type="submit"
          class="btn btn-primary spinner"
          label="Save"
          @click.prevent="setTimer"
          > <Spinner v-if="loading"  /> Set</button
        >
      </div>
    </form>
  </Dialog>
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
import Spinner from "@/components/Spinner.vue"

// Axios
import axios from "axios";

// Toast
import { useToast } from "vue-toastification";
const toast = useToast();


// Route
import { useRoute } from "vue-router";

export default {
  name: "SquadProfile",
  components: {
    Documents,
    Videolist,
    Simpletable,
    Spinner,
  },
  data() {
    return {
      token: localStorage.getItem("token"),
      Profile1: Profile1,
      club1: club1,
      fullProfile: fullProfile,
      playerData: {},
      showTimerModal : false,
      dealHeaders: ["Season", "Date", "Left", "Joined", "Mv", "Fee"],
      loading : false,
      months : [
        { name: 'January', value: '01' },
        { name: 'February', value: '02' },
        { name: 'March', value: '03' },
        { name: 'April', value: '04' },
        { name: 'May', value: '05' },
        { name: 'June', value: '06' },
        { name: 'July', value: '07' },
        { name: 'August', value: '08' },
        { name: 'September', value: '09' },
        { name: 'October', value: '10' },
        { name: 'November', value: '11' },
        { name: 'December', value: '11' }
      ],
      days : [
         { name: '1', value: 1 },
         { name: '2', value: 2 },
         { name: '3', value: 3 },
         { name: '4', value: 4 },
         { name: '5', value: 5 },
         { name: '6', value: 6 },
         { name: '7', value: 7 },
         { name: '8', value: 8 },
         { name: '9', value: 9 },
         { name: '10', value: 10 },
         { name: '11', value: 11 },
         { name: '12', value: 12 },
         { name: '13', value: 13 },
         { name: '14', value: 14 },
         { name: '15', value: 15 },
         { name: '16', value: 16 },
         { name: '17', value: 17 },
         { name: '18', value: 18 },
         { name: '19', value: 19 },
         { name: '20', value: 20 },
         { name: '21', value: 21 },
         { name: '22', value: 22 },
         { name: '23', value: 23 },
         { name: '24', value: 24 },
         { name: '25', value: 25 },
         { name: '26', value: 26 },
         { name: '27', value: 27 },
         { name: '28', value: 28 },
         { name: '29', value: 29 },
         { name: '30', value: 30 },
         { name: '31', value: 31 }
        ],
      selectedMonth : null,
      selectedDay : null,
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
      errors : {},
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
        console.log("This data",response)
        if (response.status == 200) {
          this.playerData = response.data;
          this.playerData.dob = response.data.dob;
          this.playerData.joining_date = response.data.joining_date;
          // this.contactList = response.data.contacts;
          // this.player_count = response.data.players_count;
          // this.player_data =  response.data.players;
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
        console.log(error);
      }
    },

    async setTimer(){
      try {
        this.loading = true;
        this.errors = {};
        const response = await axios.post(this.$baseURL+"theo/api/agent/squad-players/set-contract-date",{ player_id :this.playerData.id , selectedMonth : this.selectedMonth , selectedDay : this.selectedDay},{
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${this.token}`,
            },
        })
        if(response.status == 200){
          this.loading = false;
          this.showTimerModal = false;
          toast.success(response.data.message)
          this.fetchPlayera();
        }
        console.log(response)
      } catch (error) {
        this.loading = false;
        console.log(error.response.data)
        this.errors = error.response.data
      }
    },

    // Fetch Timer Req Data
    async fetchTimer(){
      try {
        const response = await axios.get(this.$baseURL+'theo/api/agent/',{
        headers : {
          Accept: "application/json",
          Authorization: `Bearer ${this.token}`,
        }
      })
      } catch (error) {
        console.log(error)
      }
    }

  },
};
</script>
