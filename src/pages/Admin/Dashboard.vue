<script>
import banner1 from "@/assets/images/banner1.png";
import banner2 from "@/assets/images/banner2.png";
import user from "@/assets/images/users/user1.png";
import time from "@/assets/images/time.png";
import profile from "@/assets/images/profile.png";
import group from "@/assets/images/group.png";

// Charts
import Donut from "@/components/Donut.vue";
import Barchart from "@/components/Barchart.vue";

// Components
import Requests from '@/components/Requests.vue'


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
      user: user,
      dateValue : '',
      timeImg: time,
      profileImg: profile,
      groupImg: group,
      date: null,
      requestOthers : false,
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
};
</script>

<template>
  <div class="dashboard admin_dashboard">

    <!-- First Row -->
    <div class="gird_col">
      <div class="left_column">
        <div class="row custom_gap">
          <div class="col-md-12">
            <div class="main_banner">
              <img :src="banner1" class="img-fluid img_left" alt="" />
              <h1 class="heading">Your transfer window is open!</h1>
              <p class="text">
                Scout talent, finalize deals, and move your players strategically
              </p>
              <button class="btn btn-primary">Propose Players</button>
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
                            <img :src="items.img" alt="" />
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
        <DatePicker v-model="date"  inline showWeek class="full-width w-full md:w-[100%] sm:w-[30rem]" />
         

      </div>
    </div>


    <!-- Second Row -->
    <div class="gird_col my-4 py-2">
      <div class="left_column">
        <div class="card">
          <div class="card-body">
            <div class="card_head b_bottom">
              <h5 class="hd">Player Stats</h5>
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
              <h5 class="hd">Player Stats</h5>
              <div class="box_icon">
                <i class="pi pi-calendar"></i>
              </div>
            </div>
            <Donut text1="Proposed" text2="Negotiation" text3="Completed"></Donut>
          </div>
        </div>
      </div>
    </div>


    <!-- Third Row -->
    <div class="gird_col">
      <div class="left_column">
        <div class="card">
          <div class="card-body">
            <div class="card_head mb-4 mt-1">
              <h5 class="hd">Recent Requests</h5>
              <a href="#" class="link">See All</a>
            </div>
            <Requests :requestOthers="requestOthers" :requestsList="requestsList" />
          </div>
        </div>
      </div>
      <div class="right_column">

        <div class="card">
          <div class="card-body">
            <div class="card_head b_bottom">
              <h5 class="hd">Player Stats</h5>
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

</template>


<style scoped >



</style>