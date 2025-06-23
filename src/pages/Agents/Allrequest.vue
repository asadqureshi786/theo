<template>
  <div>
    <!-- PAGE HEADER WITH TABS -->
    <div class="page_header">
      <h3 class="hd">Requests</h3>
      <div class="r_side">
        <!-- Tab Headers -->
        <div class="tabs_header_cs">
          <button
            v-for="(tab, index) in tabs"
            :key="index"
            @click="activeTab = index"
            :class="{ active: activeTab === index }"
          >
            {{ tab }}
          </button>
        </div>

        <!-- Add Button -->
        <AddRequest/>
      </div>
    </div>

    <!-- SEPARATE TAB CONTENT SECTION -->
    <div class="tab-content mt-4">
      <div v-if="activeTab === 0">
        <Requests
          :proposedImages="proposedImages"
          :requestOthers="requestOthers"
          :requestsList="requestsList"
        />
      </div>
      <div v-if="activeTab === 1">
        <p>Header II content: Sed ut perspiciatis unde omnis...</p>
      </div>
      <div v-if="activeTab === 2">
        <p>Header III content: At vero eos et accusamus...</p>
      </div>
    </div>
  </div>


</template>

<script>
// Components
import Requests from "@/components/agents/Requests.vue";
import {countries} from "@/components/agents/Countrylist.js"
import AddRequest from "@/components/agents/AddRequest.vue";

// Images
import user from "@/assets/images/users/user1.png";
import proposed1 from "@/assets/images/player1.png";
import proposed2 from "@/assets/images/player2.png";
import proposed3 from "@/assets/images/player3.png";
import proposed4 from "@/assets/images/player4.png";

export default {
  components: {
    Requests,
    AddRequest,
  },
  data() {
    return {
      countries : countries,
      activeTab: 0,
      requestOthers: true,
      tabs: ["All", "Proposed", "Saved", "Accepted", "Archived"],
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
      proposedImages: [proposed1, proposed2, proposed3, proposed4],
   
    };
  },
};
</script>

<style scoped>
.active {
  background-color: #007bff;
  color: white;
}
</style>
@/components/Countrylist.js