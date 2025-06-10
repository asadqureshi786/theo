<script>
import banner1 from "@/assets/images/banner1.png";
import banner2 from "@/assets/images/banner2.png";
import user from "@/assets/images/users/user1.png";
import time from "@/assets/images/time.png";
import profile from "@/assets/images/profile.png";
import group from "@/assets/images/group.png";
import {countries} from "@/components/Countrylist.js"

// Charts
import Donut from "@/components/Donut.vue";
import Barchart from "@/components/Barchart.vue";

// Components
import Requests from '@/components/Requests.vue'

// import Axios
import axios from 'axios';


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
      addRequest : false,
      countries : countries,
      user: user,
      dateValue : '',
      timeImg: time,
      profileImg: profile,
      groupImg: group,
      date: null,
      requestOthers : false,
      users: [],
      topLeads: [
        {
          img: time,
          count: "245",
          label: "Club Request",
          percent: "3.46",
        },
        {
          img: profile,
          count: "543",
          label: "Total Agents",
          percent: "3.46",
        },
        {
          img: group,
          count: "2140",
          label: "Total Players",
          percent: "3.46",
          width:'28px',
        },
      ],

      requestsList: [
        {
          id: 1,
          profile: user,
          position: "Striker",
          league: "FIFA",
          club: "Real Madrid",
          agent: "John Cena",
          date: "10/Nov/2024",
        },
        {
          id: 2,
          profile: user,
          position: "GoalKeeper",
          league: "FIFA",
          club: "FC Barcelona",
          agent: "John Cena",
          date: "10/Nov/2024",
        },
        {
          id: 3,
          profile: user,
          position: "Striker",
          league: "FIFA",
          club: "Real Madrid",
          agent: "John Cena",
          date: "10/Nov/2024",
        },
        {
          id: 4,
          profile: user,
          position: "GoalKeeper",
          league: "FIFA",
          club: "FC Barcelona",
          agent: "John Cena",
          date: "10/Nov/2024",
        },
      ],
    };
  },
  mounted() {
    // this.fetchUsers();
    this.getData();
     console.log(this.$baseURL+'theo/public/api/test-api'); // http://192.168.100.122:4000
    //  console.log(this.$baseURL+'http://192.168.100.19:84/theo/public/api/test-api'); // http://192.168.100.122:4000
  },
    methods: {
    async fetchUsers() {
      console.log(this.$baseURL+'theo/public/api/test-api');
      try {
        const response = await axios.get(this.$baseURL+'theo/public/api/test-api');
        // this.users = response.data;
        // console.log('Users:', this.users);

      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },

    //  async getData() {
    //   console.log(this.$baseURL+'theo/public/api/test-api');
    //   try {
    //     const response = await axios.post(this.$baseURL+'theo/api/me', { 
    //       withCredentials: true // 👈 Important for HttpOnly cookies
    //        }
    //     );
    //     // this.users = response.data;
    //     console.log("user Data",response);

    //   } catch (error) {
    //     console.log(error);
    //   }
    // },

    async getData() {
  console.log("Ye Wala",this.$baseURL + 'theo/api/me',{withCredentials: true});
  try {
    const response = await axios.get(
      this.$baseURL + 'theo/api/me',
      {
        withCredentials: true
      }
    );
    console.log("user Data", response);
  } catch (error) {
    console.log("Unauthenticated error:", error);
  }
}






  },
};
</script>

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
                Scout talent, finalize deals, and move your players strategically
              </p>
              <button class="btn btn-primary" @click="addRequest = true" >Requests Players</button>
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
                            <img :src="items.img" :style="`width: ${items.width ? items.width : ''}`" alt="" />
                          </div>
                          <span class="bottomText">
                            <i class="pi pi-arrow-up-right"></i>
                            3.46%
                          </span>
                        </div>
                        <div class="lside">
                          <div class="info">
                            <h4 class="hd f26 fw6 primaryCol">{{ items.count }}</h4>
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
        <ThemeSwitcher />
        <DatePicker v-model="date"  inline showWeek class="full-width w-full md:w-[100%] sm:w-[30rem] custom-datepicker" />
         

      </div>
    </div>




    <!-- Second Row -->
    <div class="gird_col my-4 py-2">
      <div class="left_column">
        <div class="card">
          <div class="card-body">
            <div class="card_head mb-4 mt-1">
              <h5 class="hd">Recent Requests</h5>
              <router-link to="all-request" href="#" class="link">See All</router-link>
            </div>
            <Requests :requestOthers="requestOthers" :requestsList="requestsList" />
          </div>
        </div>
      </div>
      <div class="right_column">

        <div class="card">
          <div class="card-body">
            <div class="card_head b_bottom">
              <h5 class="hd">Players Stats </h5>
              <div class="box_icon">
                <i class="pi pi-calendar"></i>
              </div>
            </div>
            <Donut text1="Signed" text2="Approached" text3="Followed"></Donut>
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
        <Button
          type="button"
          class="btn btn-secondary"
          label="Cancel"
          severity="secondary"
          @click="addRequest = false"
          >Cancel</Button
        >
        <Button
          type="button"
          class="btn btn-primary"
          label="Save"
          @click="addRequest = false"
          >Add</Button
        >
      </div>
    </form>
  </Dialog>
  <!-- Add Request Modal Section End -->


</template>


<style scoped >



</style>