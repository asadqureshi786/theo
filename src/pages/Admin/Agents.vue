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
      <button class="btn btn-secondary icon">
        <i class="pi pi-paperclip"></i>Invite Link
      </button>
      <button class="btn btn-primary" @click="showAgent = 'true'">
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

  <div class="card mt-4">
    <div class="card-body">
      <div class="box_grid">
        <Agentcard
          :showMd="showMd"
          :searchQuery="searchQuery"
          :allPlayers="allPlayers"
        />
      </div>
    </div>
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
    <form>
      <!-- Corrected from 'from' to 'form' -->
      <div class="row formFileds">
        <div class="col-6">
          <div class="form-group">
            <label> Name</label>
            <input type="text" class="form-control" />
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <label> Email</label>
            <input type="text" class="form-control" />
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <label> Country</label>
            <input type="text" class="form-control" />
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <label> Plan</label>
            <input type="text" class="form-control" />
          </div>
        </div>
      </div>
      <div class="flex justify-end gap-2 modal_footer">
        <Button
          type="button"
          class="btn btn-secondary"
          label="Cancel"
          severity="secondary"
          @click="showAgent = false"
          >Cancel</Button
        >
        <Button
          type="button"
          class="btn btn-primary"
          label="Save"
          @click="showAgent = false"
          >Add</Button
        >
      </div>
    </form>
  </Dialog>
</template>

<script>
import Agentcard from "@/components/Agentcard.vue";
import Profile1 from "@/assets/images/profile1.jpg";
import Profile2 from "@/assets/images/profile2.jpg";

// import Axios
import axios from "axios";

export default {
  name: "Players",
  components: {
    Agentcard,
  },
  data() {
    return {
      Profile1: Profile1,
      Profile2: Profile2,
      searchQuery: "",
      addPlayer: false,
      showAgent: false,
      allPlayers: [
        {
          id: 1,
          name: "Cristiano Ronaldo",
          userlevel: "THEO BLACK",
          country: "Spain",
          status: "Pending",
        },
        {
          id: 2,
          name: "Mesit Ozil",
          userlevel: "THEO BLACK",
          country: "Spain",
          status: "Completed",
        },
        {
          id: 3,
          name: "Leo Messi",
          userlevel: "THEO BLACK",
          country: "Spain",
          status: "Pending",
        },
      ],
    };
  },
  mounted() {
    this.fetchAgent();
  },
  methods: {
    async fetchAgent() {
      try {
        // axios.defaults.withCredentials = true;
        const response = await axios.get(this.$baseURL + "theo/public/api/admin/agents");
        console.log(response.data);
        // if (response.status == 200) {
        //   sessionStorage.setItem("token", response.data.access_token);
        //   setTimeout(() => {
        //     this.$router.push({ path: "/admin" });
        //     this.loading = false;
        //     this.form.email = "";
        //     this.form.password = "";
        //     this.form.password_confirmation = "";
        //   }, 500);
        //   toast.success("Signup complete! Welcome to the CRM.");
        //   this.errors = {};
        // } else {
        //   console.error("Error:", response.statusText);
        //   this.loading = false;
        // }
      } catch (error) {
        this.loading = false;
        this.errors = error.response.data;
      }
    }, // Add any methods if needed
  },
};
</script>
