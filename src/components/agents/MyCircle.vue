<template>
  <div class="sidePlayer myCircle">
    <div class="hd pb-3">
      <p class="heading f22 fw5">{{ playerHeading }}</p>
      <button type="button" @click="showModal = true" href="" class="btn btn-primary">Add Agent</button>
    </div>
    <ul class="players">
      <li v-for="item in circle_agent" :key="item.text" class="">
        <div class="d-flex justify-content-between align-items-center w-100">
            <div class="box">
          <!-- <img class="img-fluid" :src="item.profile ? item.profile : dummy" /> -->
          <img class="img-fluid" :src="item.profile ? `${$baseURL}theo/public/uploads/images/${item.profile}` : dummy" />
          <div class="profile">
            <p class="primaryCol2 fw5 f16">{{ item.name }}</p>
            <div>
              <p class="f13 fw4 silverCol">{{ item.email }}</p>
              <!-- <div class="dot"></div> -->
              <!-- <p class="f11 fw4 silverCol">{{ item.time }}</p> -->
            </div>
          </div>
        </div>
              <span class="trashIcon cursor-pointer" @click="removeAgent(item.id)">
           <svg
          width="21"
          height="21"
          viewBox="0 0 23 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.75 5.48177C16.6975 5.17927 13.6267 5.02344 10.565 5.02344C8.75 5.02344 6.935 5.1151 5.12 5.29844L3.25 5.48177"
            fill="#8F0301"
          />
          <path
            d="M19.75 5.48177C16.6975 5.17927 13.6267 5.02344 10.565 5.02344C8.75 5.02344 6.935 5.1151 5.12 5.29844L3.25 5.48177"
            stroke="#8F0301"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.29166 4.55551L8.49332 3.35467C8.63999 2.48384 8.74999 1.83301 10.2992 1.83301H12.7008C14.25 1.83301 14.3692 2.52051 14.5067 3.36384L14.7083 4.55551"
            stroke="#8F0301"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.7792 8.37793L17.1833 17.6088C17.0825 19.0479 17 20.1663 14.4425 20.1663H8.55749C5.99999 20.1663 5.91749 19.0479 5.81666 17.6088L5.22083 8.37793"
            stroke="#8F0301"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.96918 15.125H13.0217"
            stroke="#8F0301"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.20834 11.458H13.7917"
            stroke="#8F0301"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
           </svg>
        </span>
        </div>
      </li>
    </ul>
  </div>

  <!-- Add Agent Modal -->
  <Dialog
    v-model:visible="showModal"
    maximizable
    modal
    header="Agents"
    :style="{ width: '40rem' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
  >
    <form>
      <!-- Corrected from 'from' to 'form' -->
      <div class="row formFileds">
        <div class="col-md-12">
          <div class="form-group">
            <!-- <label> Select Agents</label> -->
            <div class="d_select">
              <MultiSelect
                filter
                v-model="selectedAgent"
                editable
                optionValue="id"
                :options="drop_Agents"
                optionLabel="name"
                placeholder="Select Agents"
                :maxSelectedLabels="3"
                class="w-full"
              />
            </div>
            <small v-if="errors.agent_ids" class="text-danger validate">{{ errors.agent_ids[0] }}</small>
          </div>
        </div>
      </div>
      <div class="flex justify-end gap-2 modal_footer">
        <button
          type="button"
          class="btn btn-secondary"
          label="Cancel"
          severity="secondary"
          @click="showModal = false"
        >
          Cancel
        </button>
        <button
          type="submit"
          class="btn btn-primary spinner"
          label="Save"
          @click="addCircleAgent"
        >
          <Spinner v-if="loading" />
          Add
        </button>
      </div>
    </form>
  </Dialog>
      <ConfirmDialog class="confirmation_modal"></ConfirmDialog>

</template>

<script>
import dummy from "@/assets/images/dummy.jpg";
import axios from "axios";

// Toast
import { useToast } from "vue-toastification";
const toast = useToast();

// Spinner
import Spinner from "@/components/Spinner.vue";

export default {
  name: "MyCircle",
  props: {
    playerHeading: String,
  },
  components: {
    Spinner,
  },
  data() {
    return {
      token: localStorage.getItem("token"),
      dummy: dummy,
      selectedAgent: [],
      loading: false,
      circle_agent : [],
      errors : {},
      drop_Agents: [
        { name: "New York", code: "NY" },
        { name: "Rome", code: "RM" },
        { name: "London", code: "LDN" },
      ],
      showModal: false,
    };
  },
  mounted() {
    this.fetchAgents();
  },
  methods: {

    // Fetch Agents
    async fetchAgents() {
      try {
        const agents = await axios.get(
          this.$baseURL + "theo/api/agent/circle-agents",
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${this.token}`,
            },
          }
        );
        if(agents.status === 200) {
            this.drop_Agents = agents.data.all_agents;
            this.circle_agent = agents.data.circle_agents;
        } else {
          toast.error("Failed to fetch agents.");
        }
      } catch (error) {}
    },

    // Add Agent in Circle
    async addCircleAgent(e) {
      e.preventDefault();
      try {
        this.errors = {};
        this.loading = true;
        const response = await axios.post(
          this.$baseURL + "theo/api/agent/circle-agents/add-agents",{ agent_ids: this.selectedAgent },{
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${this.token}`,
            },
          }
        );
        if (response.status === 200) {
          this.loading = false;
          toast.success(response.data.message);
          this.showModal = false;
          this.selectedAgent = []; 
          this.fetchAgents(); 
          this.fetchAgents();
        } else {
          toast.error("Failed to add agents to your circle.");
          this.loading = false;
        }
      } catch (error) {
        if(error.response && error.response.data.errors) {
          this.errors = error.response.data.errors;
        } else {
          toast.error("An unexpected error occurred.");
        }
        this.loading = false;
      }
    },

    // Remove Agent from Circle
     removeAgent(agentId) {
        this.$confirm.require({
        message: "Are you sure you want to delete?",
        header: "",
        icon: "pi pi-exclamation-circle",
        rejectProps: {
          label: "Cancel",
          severity: "secondary",
          outlined: true,
        },
        acceptProps: {
          label: "Delete",
          severity: "danger",
        },
        accept: async () => {
              try {
            const response = await axios.delete(
            this.$baseURL + `theo/api/agent/circle-agents/${agentId}/delete-agents`,{
                headers: {
                Authorization: `Bearer ${this.token}`,
                },
            }
            );
            if (response.status === 200) {
            toast.success("Agent removed from your circle.");
            this.fetchAgents();
            } else {
            toast.error("Failed to remove agent from your circle.");
            }
        } catch (error) {
            console.error("Error removing agent:", error);
            toast.error("An error occurred while removing the agent.");
        }
        },
        reject: () => {
        },
      });
    }
  },
};
</script>
