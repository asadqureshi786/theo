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
        <Requests/>
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



export default {
  components: {
    Requests,
    AddRequest,
  },
  data() {
    return {
      countries : countries,
      activeTab: 0,
      token : localStorage.getItem("token") || "",
      tabs: ["All", "Proposed", "Saved", "Accepted", "Archived"],
  
    };
  },


  methods: {

    changeTab(index) {
      this.activeTab = index;
    },
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