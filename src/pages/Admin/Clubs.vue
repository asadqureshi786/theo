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
          <button class="btn btn-primary" @click="showAgent = true">
            Add Request
          </button>
        </div>
      </div>
  
      <!-- SEPARATE TAB CONTENT SECTION -->
      <div class="tab-content mt-4">
        <div v-if="activeTab === 0">
            <Requests :requestOthers="requestOthers" :requestsList="requestsList" />
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
  import user from "@/assets/images/users/user1.png";

  import Requests from '@/components/Requests.vue'
  export default {
    components : {
        Requests,
    },
    data() {
      return {
        activeTab: 0,
        showAgent: false,
        requestOthers : true,
        tabs: ['All', 'Proposed', 'Saved','Accepted','Archived'],
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
  
  <style scoped>
  
  .active {
    background-color: #007bff;
    color: white;
  }
  </style>
  