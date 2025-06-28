<template>
  <div class="dashboard admin_dashboard">
    <!-- First Row -->
    <div class="gird_col">
      <div class="left_column">
        <div class="row custom_gap">
          <div class="col-md-12">
            <!-- 
            <li v-for="iuser in users" :key="iuser.id">
              <span>{{iuser.name}}</span>
            </li> -->

            <div class="main_banner">
              <img :src="banner1" class="img-fluid img_left" alt="" />
              <h1 class="heading">Your transfer window is open!</h1>
              <p class="text">
                Scout talent, finalize deals, and move your players
                strategically
              </p>
              <button class="btn btn-primary" @click="addRequest = true">
                Requests Players
              </button>
              <img :src="banner2" alt="" class="img_right img-fluid" />
            </div>
          </div>
          <div class="col-md-12">
            <div class="card">
              <div class="card-body">
                <ul class="top_leads">
                  <li v-for="items in topLeads" :key="items.label">
                    <div class="data">
                      <div class="top">
                        <div class="rside">
                          <div class="circle">
                            <img
                              :src="items.img"
                              :style="`width: ${
                                items.width ? items.width : ''
                              }`"
                              alt=""
                            />
                          </div>
                          <span class="bottomText">
                            <i class="pi pi-arrow-up-right"></i>
                            3.46%
                          </span>
                        </div>
                        <div class="lside">
                          <div class="info">
                            <h4 class="hd f26 fw6 primaryCol">
                              {{ items.count }}
                            </h4>
                            <p class="txt ltext f15 fw4">{{ items.label }}</p>
                          </div>
                          <span class="bottomText">Since Last Month</span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right_column">
        <DatePicker
          v-model="date"
          inline
          showWeek
          class="full-width w-full md:w-[100%] sm:w-[30rem] custom-datepicker"
        />
      </div>
    </div>

    <!-- Second Row -->
    <div class="gird_col my-4 py-2">
      <div class="left_column">
        <div class="card">
          <div class="card-body">
            <div class="card_head b_bottom">
              <h5 class="hd">Total Sales</h5>
              <div class="box_icon">
                <i class="pi pi-calendar"></i>
              </div>
            </div>
            <Barchart></Barchart>
          </div>
        </div>
      </div>
      <div class="right_column">
        <div class="card">
          <div class="card-body">
            <div class="card_head b_bottom">
              <h5 class="hd">Deal Status</h5>
              <div class="box_icon">
                <i class="pi pi-calendar"></i>
              </div>
            </div>
            <Donut
              text1="Approach"
              text2="Follow"
              :status_counts="status_counts"
            ></Donut>
          </div>
        </div>
      </div>
    </div>

    <!-- Third Row -->
    <div class="">
      <div class="left_column">
        <div class="card">
          <div class="card-body">
            <div class="card_head mb-4 mt-1">
              <h5 class="hd">Recent Requests</h5>
              <router-link to="all-request" href="#" class="link"
                >See All</router-link
              >
            </div>
            
            <!-- Request Items -->
            <ul class="request_items">
              <li class="item" v-for="request in requestsList" :key="request.id">
                <div class="rside">
                  <input v-if="requestOthers" class="req_checkbox" type="checkbox" />
                  <div class="img">
                    <img :src="request.club.logo_url" alt="" />
                  </div>
                  <div class="detail">
                    <div class="top">
                      <div class="position">
                        <label  for="">Position:</label>
                        <p class="text">{{ request.main_position }}</p>
                      </div>
                      <div class="league">
                        <label for="">League:</label>
                        <p class="text">{{ request.league.name }}</p>
                      </div>
                      <div class="position">
                        <label for="">Club:</label>
                        <p class="text">{{ request.club.name }}</p>
                      </div>
                    </div>
                    <div class="bottom d-flex gap-3">
                      <div class="d-flex align-items-center gap-1" >
                        <label for="">Agent:</label>
                        <p class="text">{{ users.user.name ? users.user.name : '-' }}</p>
                      </div>
                      
                      
                      <Playerproposed v-if="requestOthers" :proposedImages="proposedImages"   />
                      
                    </div>
                  </div>
                </div>
                <div class="lside d-flex align-items-start gap-2">
                  <div>
                    <p class="date">Posted: {{ request.created_at ? request.created_at.slice(0,-17) : '' }}  </p>
                  <div  :class="{ 'd-flex gap-2': requestOthers }">
                    <button v-if="requestOthers" class="btn btn-secondary">Unsaved </button>
                    <router-link :to="`job-view/${request.id}`" class="btn btn-primary">View</router-link>
                  </div>
                  </div>
                  <div class="action">
                    <i v-if="requestOthers" class="pi pi-ellipsis-v" ></i>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
   
    </div>
  </div>

  <!-- Add Request Modal Section Start -->
  <Dialog
    v-model:visible="addRequest"
    maximizable
    modal
    header="Add Request"
    :style="{ width: '40rem' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
  >
    <form>
      <!-- Corrected from 'from' to 'form' -->
      <div class="row formFileds">
        <div class="col-12">
          <div class="form-group">
            <label> Job Title</label>
            <input type="text" class="form-control" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label> Country</label>
            <!-- <input type="text" class="form-control" /> -->
            <div class="d_select">
              <Select
                v-model="selectedCountry"
                editable
                :options="countries"
                optionLabel="name"
                placeholder="Select a City"
                class="w-full"
              />
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label> League</label>
            <input type="text" class="form-control" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label> Club</label>
            <input type="text" class="form-control" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label> Main Position</label>
            <input type="text" class="form-control" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label> Other Position</label>
            <input type="text" class="form-control" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label> Age Reference</label>
            <input type="text" class="form-control" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label> Name</label>
            <input type="text" class="form-control" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label> Email</label>
            <input type="email" class="form-control" />
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label> Additional Information</label>
            <textarea type="email" class="form-control"></textarea>
          </div>
        </div>
      </div>
      <div class="flex justify-end gap-2 modal_footer">
        <button
          type="button"
          class="btn btn-secondary"
          label="Cancel"
          severity="secondary"
          @click="addRequest = false"
        >
          Cancel
        </button>
        <button
          type="button"
          class="btn btn-primary"
          label="Save"
          @click="addRequest = false"
        >
          Add
        </button>
      </div>
    </form>
  </Dialog>
  <!-- Add Request Modal Section End -->
</template>

<script>
import banner1 from "@/assets/images/banner1.png";
import banner2 from "@/assets/images/banner2.png";
import user from "@/assets/images/users/user1.png";
import time from "@/assets/images/time.png";
import profile from "@/assets/images/profile.png";
import group from "@/assets/images/group.png";
import { countries } from "@/components/Countrylist.js";

// Charts
import Donut from "@/components/Donut.vue";
import Barchart from "@/components/Barchart.vue";

// Axios
import axios from "axios";

// Get Current User
import { useAuthStore } from '@/store/auth.js';


// Components
import Requests from "@/components/Requests.vue";

export default {
  name: "Dashboard",
  components: {
    Donut,
    Barchart,
    Requests,
  },
  data() {
    return {
      banner1,
      banner2,
      addRequest: false,
      countries: countries,
      user: user,
      dateValue: "",
      timeImg: time,
      profileImg: profile,
      groupImg: group,
      date: null,
      requestOthers: false,
      token: localStorage.getItem("token"),
      totalClubs: "",
      totalAgents: "",
      totalPlayers: "",
      topLeads: [],
      requestsList: [],
      currentUser : useAuthStore(),
      users : {},


      status_counts : {},

 
    };
  },

  async created(){
      const res = await this.currentUser.fetchUser();
      this.users = res;
      console.log("This user", this.users.user)
  },

  mounted() {
    this.fetchAgents();
    // this.fetchUsers();
  },

  methods: {
    // Fetch Agent Function Start
    async fetchAgents() {
      try {
        const response = await axios.get(
          this.$baseURL + "theo/api/agent/dashboard",
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${this.token}`,
            },
          }
        );
        console.log(response)
        // return;
        if (response.status === 200) {
          this.totalClubs = response.data.total_clubs;
          this.totalAgents = response.data.total_agents;
          this.totalPlayers = response.data.total_players;
          this.status_counts = response.data.status_counts;
            this.topLeads = [
                {
                  img: this.timeImg,
                  count: this.totalClubs ?? "0",
                  label: "Club Request",
                  percent: "3.46",
                },
                {
                  img: this.profileImg,
                  count: this.totalAgents ?? "0",
                  label: "Total Agents",
                  percent: "3.46",
                },
                {
                  img: this.groupImg,
                  count: this.totalPlayers ?? "0",
                  label: "Total Players",
                  percent: "3.46",
                  width: "28px",
                },
            ];
            this.requestsList = response.data.recent_requests;
        }
      } catch (error) {
        console.log(error);
      }
    },
    // Fetch Agent Function End
  },
};
</script>
