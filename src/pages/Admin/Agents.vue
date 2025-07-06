<template>



  <div class="page_header">
    <h3 class="hd">Agents</h3>
    <div class="r_side">
      <div class="searchBox icon_box">
        <span class="icon">
          <i class="pi pi-search"></i>
        </span>
        <InputText
          type="text"
          class="form-control"
          placeholder="Search"
          v-model="searchQuery"
        />
      </div>
      <button class="btn btn-secondary icon d-none">
        <i class="pi pi-paperclip"></i>Invite Link
      </button>
      <button class="btn btn-primary d-none" @click="showAgent = 'true'">
        <svg
          width="13"
          height="12"
          viewBox="0 0 13 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.08003 5.435C5.03003 5.43 4.97003 5.43 4.91503 5.435C3.72503 5.395 2.78003 4.42 2.78003 3.22C2.78003 1.995 3.77003 1 5.00003 1C6.22503 1 7.22003 1.995 7.22003 3.22C7.21503 4.42 6.27003 5.395 5.08003 5.435Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.70501 2C9.67501 2 10.455 2.785 10.455 3.75C10.455 4.695 9.70501 5.465 8.77001 5.5C8.73001 5.495 8.68501 5.495 8.64001 5.5"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.57999 7.28C1.36999 8.09 1.36999 9.41 2.57999 10.215C3.95499 11.135 6.20999 11.135 7.58499 10.215C8.79499 9.405 8.79499 8.085 7.58499 7.28C6.21499 6.365 3.95999 6.365 2.57999 7.28Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.67004 10C10.03 9.925 10.37 9.78 10.65 9.565C11.43 8.98 11.43 8.015 10.65 7.43C10.375 7.22 10.04 7.08 9.68504 7"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        Add Agent
      </button>
    </div>
  </div>

   <div class="fix_spinner_center" v-if="spinner" >
  <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="4" fill="transparent" stroke="#000" />
</div>


  <div v-else class="card  mt-4">
    <div class="card-body">
      <div class="box_grid">
        <Agentcard
          :searchQuery="searchQuery"
          :allAgents="allAgents"
          :onDelete="deleteAgent"
          :soloAgent="soloAgent"
          :agentDetail="agentDetail",
          :fetchAgents= "fetchAgents"
        />
      </div>
    </div>
  </div>

   <div v-if="allAgents.length === 0"  class="fix_not_Found mt-4">
        <i class="pi pi-exclamation-circle" ></i>No Record Found 
    </div>

  <!-- Add Agent Modal -->
  <Dialog
    v-model:visible="showAgent"
    maximizable
    modal
    header="Add Agent"
    :style="{ width: '40rem' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
  >
    <form @submit.prevent="addAgent"> 
      <!-- Corrected from 'from' to 'form' -->
      <div class="row formFileds">
        <div class="col-6">
          <div class="form-group">
            <label> Name</label>
            <input  type="text" v-model="addAgents.name" class="form-control" />
              <small v-if="errors.name" class="text-danger validate">{{errors.name[0]}}</small>
            </div>
          </div>
          <div class="col-6">
            <div class="form-group">
            <label> Email</label>
            <input  type="email" v-model="addAgents.email" class="form-control" />
            <small  v-if="errors.email" class="text-danger validate">{{errors.email[0]}}</small>
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <label> Country</label>
            <input  type="text" v-model="addAgents.country" class="form-control" />
            <small  v-if="errors.country" class="text-danger validate">{{errors.country[0]}}</small>
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <label> Plan</label>
            <input type="text" v-model="addAgents.plan" class="form-control" />
            <small v-if="errors.plan" class="text-danger validate">{{errors.plan[0]}}</small>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <label>Certification Status</label>
            <input type="text" v-model="addAgents.certification_status" class="form-control" />
            <small v-if="errors.certification_status" class="text-danger validate">{{errors.certification_status[0]}}</small>
          </div>
        </div>
      </div>
      <div class="flex justify-end gap-2 modal_footer">
        <button
          type="button"
          class="btn btn-secondary"
          label="Cancel"
          severity="secondary"
          @click="showAgent = false"
          >Cancel</button
        >
        <button
          type="submit"
          class="btn btn-primary spinner"
          label="Save"
          > <Spinner v-if="loading"  /> Add</button
        >
      </div>
    </form>
  </Dialog>




</template>

<script>
import Agentcard from "@/components/Agentcard.vue";


import Profile1 from "@/assets/images/profile1.jpg";
import Profile2 from "@/assets/images/profile2.jpg";

// Toast
import { useToast } from "vue-toastification";
const toast = useToast();

// Spinner
import Spinner from "@/components/Spinner.vue";

// import Axios
import axios from "axios";

export default {
  name: "Players",
  components: {
  Agentcard,
  Spinner,
  },

  data() {
    return {
      Profile1: Profile1,
      Profile2: Profile2,
      spinner: false,
      searchQuery: "",
      showAgent: false,
      loading : false,
      agentDetail : '',
      token : '',
      allAgents : [],
      addAgents : {
        profile : "",
        name: "",
        email: "",
        country: "",
        plan: "",
        certification_status: "",
      },
      errors: {
        name: "",
        email: "",
        country: "",
        plan: "",
        certification_status: "",
      },
    };
  },

  mounted() {
    this.token = localStorage.getItem("token");
    if (!this.token) {
      this.$router.push({ path: "/login" });
    }
    this.fetchAgents();
  },

  methods: {

    // Add Agent Function Start
     async addAgent() {
      this.loading = true;
       this.errors = {};
       try {
        const response = await axios.post(this.$baseURL+"theo/api/admin/agents/save",this.addAgents,{
            headers: {
              'Accept' : 'application/json',
              Authorization: `Bearer ${this.token}`, 
            },
          }
        )
        
        if (response.status === 201) {
          this.loading = false;
          this.showAgent = false;
          this.addAgents = {
            profile: "",
            name: "",
            email: "",
            country: "",
            plan: ""
          };
          toast.success("Agent added successfully!");
          this.fetchAgents();
        } else {
          toast.error("Failed to add agent.");
          this.loading = false;
        }
      } catch (error) {
         this.loading = false;
         if(error.response.data){
           this.errors = error.response.data;
         }else{
          toast.error("error")
         }
      }
    },
    // Add Agent Function End

    // Fetch Agent Function Start
    async fetchAgents(){
      this.spinner = true;
      try{
        const agents = await axios.get(this.$baseURL+"theo/api/admin/agents",{
           headers: {
              'Accept' : 'application/json',
              Authorization: `Bearer ${this.token}`, 
            },
        });
        if(agents.status == 200){
          this.allAgents = agents.data
          this.spinner = false;
        }
      }catch(error){
        this.spinner = false;
      }
    },
    // Fetch Agent Function End



    
    // Get Agent ID JS Start
    async soloAgent(agentId){
      try{
        const response = await axios.get(this.$baseURL+`theo/api/admin/agents/edit/${agentId}`,{
            headers: {
              'Accept' : 'application/json',
              Authorization: `Bearer ${this.token}`, 
            },
        })

      this.agentDetail = response.data;
      return response.data;
        
      }catch(error){
      }
    },
    // Get Agent ID JS End

    // Delete Agents Function Start
    async deleteAgent(agentId) {
      try {
        const response = await axios.delete(`${this.$baseURL}theo/api/admin/agents/delete/${agentId}`, {
          headers: {
            'Accept': 'application/json',
            Authorization: `Bearer ${this.token}`,
          },
        });

        if (response.status === 200) {
          toast.error("Agent deleted successfully!");
          this.fetchAgents();
        } else {
          toast.error("Failed to delete agent.");
        }
      } catch (error) {
        consol.log(error)
        toast.error("Error deleting agent.");
      }
    }
    // Delete Agents Function End

  },
};
</script>
