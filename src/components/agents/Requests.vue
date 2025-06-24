<template>
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
              <p class="text">{{}}</p>
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
            <button v-if="requestOthers" class="btn btn-secondary">
              Unsaved
            </button>
            <router-link :to="`Job-view/${request.id}`" class="btn btn-primary"
              >View</router-link
            >
          </div>
        </div>
        <div class="action">
          <i v-if="requestOthers" class="pi pi-ellipsis-v"></i>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import Playerproposed from "@/components/Playerproposed.vue";

// Images
import user from "@/assets/images/users/user1.png";
import proposed1 from "@/assets/images/player1.png";
import proposed2 from "@/assets/images/player2.png";
import proposed3 from "@/assets/images/player3.png";
import proposed4 from "@/assets/images/player4.png";

// Import Axios
import axios from "axios";

export default {
  name: "Requests",
  components: {
    Playerproposed,
  },
  // props: {
  //   requestsList: Array,
  //   requestOthers: Boolean,
  //   proposedImages: Array,
  // },
  data(){
    return {
      token: localStorage.getItem("token"),
      requestsList: [],
      proposedImages: [proposed1, proposed2, proposed3, proposed4],
      requestOthers: true,

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
        const response = await axios.get(
          this.$baseURL + "theo/api/agent/requests",
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${this.token}`,
            },
          }
        );
        // return;
        if (response.status === 200) {
          this.requestsList = response.data;
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
