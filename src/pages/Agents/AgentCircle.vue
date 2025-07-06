<template>
  <div class="page_header">
    <h3 class="hd">Agent Circle</h3>
  </div>
  <div class="news_feeds mt-4">
    <div class="row">
      <div class="col-md-8">
        <div class="spinner_center" v-if="spinner" >
          <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="4" fill="transparent" stroke="#000"/>
        </div>
        <ul class="request_items">
          <li class="item" v-for="request in requestsList" :key="request.id">
            <div class="rside">
              <input
                v-if="requestOthers"
                class="req_checkbox"
                type="checkbox"
              />
              <div class="img">
                <img :src="request.club.logo_url" alt="" />
              </div>
              <div class="detail">
                <div class="top">
                  <div class="position">
                 
                    <label for="">Position:</label>
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
                  <div class="d-flex align-items-center gap-1">
                    <label for="">Agent:</label>
                    <p class="text">{{request.user.name}}</p>
                  </div>
                  <Playerproposed
                    v-if="requestOthers"
                    :proposedImages="proposedImages"
                  />
                </div>
              </div>
            </div>
            <div class="lside d-flex align-items-start gap-2">
              <div>
                <p class="date">Posted: {{ request.date }}</p>
                <div :class="{ 'd-flex gap-2': requestOthers }">
                  <router-link
                    :to="`Job-view/${request.id}`"
                    class="btn btn-primary"
                    >View</router-link
                  >
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <MyCircle playerHeading="My Circle" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sideplayers from "@/components/agents/Sideplayers.vue";
import MyCircle from "@/components/agents/MyCircle.vue";

import user from "@/assets/images/users/user1.png";
import proposed1 from "@/assets/images/player1.png";
import proposed2 from "@/assets/images/player2.png";
import proposed3 from "@/assets/images/player3.png";
import proposed4 from "@/assets/images/player4.png";

// Images
import player from "@/assets/images/player2.png";
import cover from "@/assets/images/cover.jpg";

// Toast
import { useToast } from "vue-toastification";
const toast = useToast();

// Spinner
import Spinner from "@/components/Spinner.vue";

// import Axios
import axios from "axios";

import Requests from "@/components/agents/Requests.vue";

export default {
  name: "Newsfeeds",
  components: {
    Sideplayers,
    MyCircle,
    Spinner,
    Requests,
  },
  data() {
    return {
      editorValue: "",
      player: player,
      cover: cover,
      token: localStorage.getItem("token"),
      loading: false,
      spinner: false,
      errors: "",
      requestsList: [],
      userImg: proposed2,
      proposedImages: [proposed1, proposed2, proposed3, proposed4],
      requestOthers: true,
      reqData: {
        share_type: "",
      },
      shareModal: false,
      sendOption: [
        { name: "My Cricle", value: "my_circle" },
        { name: "Private", value: "private" },
        { name: "Public", value: "public" },
      ],
      shareData: {},
    };
  },

  mounted() {
    // Fetch requests when the component is mounted
    this.fetchRequests();
  },
  methods: {
    // Fetch All Requests
    async fetchRequests() {
      try {
        this.spinner = true; 
        const response = await axios.get(
          this.$baseURL + "theo/api/agent/circle-agents",
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${this.token}`,
            },
          }
        );
        // return;
        if (response.status === 200) {
          this.spinner = false; 
          this.requestsList = response.data.requests;
        } else {
          console.error("Failed to fetch requests:", response.data);
        }
      } catch (error) {
        console.error("Error fetching requests:", error);
      }
    },
  },
};
</script>
