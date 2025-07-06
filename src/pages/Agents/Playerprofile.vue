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
            <div class="left_side text-end">
                 <div class="form-group p-0 m-0">
            <div class="d_select">
              <Select editable v-model="statusValue" @change="setStatus" optionValue="value" :options="statusOPT" optionLabel="name"
                placeholder="Select Status" class="w-full" />
              <small v-if="errors" class="text-danger validate">{{ errors }}</small>
            </div>
          </div>
            </div>
          </div>
          <div class="ft_bottom">
            <div>
              <div class="contract_dates">
                <label class="">Contract Expire Date : </label>
                <span class="">{{ playerData.contract_expire }}</span>
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
                  <p class="text">{{ playerData.dob }}</p>
                </li>
                <li>
                  <label>Place of birth:</label>
                  <p class="text">{{ playerData.pob }}</p>
                </li>
                <li>
                  <label>Age:</label>
                  <p class="text">{{ playerData.age }}</p>
                </li>
                <li>
                  <label>Height:</label>
                  <p class="text">{{ playerData.height }}</p>
                </li>
                <li>
                  <label>Citizenship</label>
                  <p class="text">{{ playerData.citizenship }}</p>
                </li>
                <li>
                  <label>Position:</label>
                  <p class="text">{{ playerData.position }}</p>
                </li>
              </ul>
            </div>
            <div class="col-md-5 offset-md-2">
              <ul>
                <li>
                  <label>Foot:</label>
                  <p class="text">{{ playerData.foot }}</p>
                </li>
                <li>
                  <label>Joined:</label>
                  <p class="text">{{ playerData.joining_date }}</p>
                </li>
                <li>
                  <label>Contract expires:</label>
                  <p class="text">Jun 30, 2024</p>
                </li>
                <li>
                  <label>Market Value</label>
                  <p class="text">{{ playerData.mv }}</p>
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
        <!-- <Simpletable class="mt-3" :headers="dealHeaders" :data="deals" /> -->
        <Dynamictable class="mt-3" :t_head="dealHeaders" :t_body="transfer_histories" />
    </div>
    <!-- Transfer History Compenent End -->
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
import Dynamictable from "@/components/Dynamictable.vue";

// Axios
import axios from "axios";

// Route
import { useRoute } from "vue-router";

// Toast
import { useToast } from "vue-toastification";
const toast = useToast();

export default {
  name: "Playerprofile",
  components: {
    Documents,
    Videolist,
    Simpletable,
    Dynamictable,
  },
  data() {
    return {
      token: localStorage.getItem("token"),
      Profile1: Profile1,
      club1: club1,
      fullProfile: fullProfile,
      playerData: {},
      statusValue : '',
      statusOPT : [
        {name : 'Follow' , value : 'follow'},
        {name : 'Approach' , value : 'approach'},
        {name : 'Cancel' , value : 'cancel'},
      ],
     dealHeaders : [
           {
              key: "date",
              label: "Date",
          },
           {
              key: "fee",
              label: "Fee",
          },
           {
              key: "market_value",
              label: "Market Value",
          },
           {
              key: "new_club",
              label: "New Club",
          },
           {
              key: "old_club",
              label: "Old Club",
          },
           {
              key: "season",
              label: "Season",
          },
      ],
      transfer_histories : [],
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

    // Fetch Player
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
          this.playerData = response.data.player;
          this.playerData.dob = response.data.player.dob.slice(0, -8);
          this.playerData.joining_date = response.data.player.joining_date.slice(0,-8);
                   this.transfer_histories = response.data.player.transfer_histories.map((player,index)=>({
                date: `<div class="text">${player.date}</div>`,
                fee: `<div class="text">${player.fee}</div>`,
                market_value: `<div class="text">${player.market_value}</div>`,
                new_club: `<div class="text">${player.new_club}</div>`,
                old_player: `<div class="text">${player.old_player}</div>`,
                season: `<div class="text">${player.season}</div>`,                               
              }))
        }
      } catch (error) {
      }
    },

    // Set Status
    async setStatus() {
      try {
        const response = await axios.post(
          this.$baseURL + `theo/api/agent/players/${this.playerData.id}/status`,
          { status: this.statusValue },
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${this.token}`,
            },
          }
        );
        if(response.status == 200) {
         this.$router.push({ path: "/agent/scout-player" });
           toast.success(response.data.message);
           this.statusValue = '';
        }
        
      } catch (error) {
        this.errors = error.response.data.error;
      }
    },
  },
};
</script>
