<template>
  <div v-if="allAgents.length === 0" class="text-center text-danger">
    No record found.
  </div>
  <div v-for="item in allAgents" :key="item.id" class="box_card">
    <img :src="agent" class="profile_picture" />

    <div class="middle">
      <p class="name">{{ item.name }}</p>
      <div class="desc agent">
        <label>User Level:</label>
        <p class="text">THEO BLACK</p>
      </div>
      <div class="desc club">
        <label>Country:</label>
        <div class="club_img">
          <p class="text">{{ item.country }}</p>
        </div>
      </div>
    </div>
    <router-link class="btn btn-primary" to="agent-view">View</router-link>
    <ConfirmDialog class="confirmation_modal"></ConfirmDialog>
    <div class="action_icon">
      <div
        class="edit_icon"
        @click="
          editAgent = 'false';
          handleId(item.id);
        "
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#8F0301"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g id="style=linear">
              <g id="edit">
                <path
                  id="vector"
                  d="M18.4101 3.6512L20.5315 5.77252C21.4101 6.6512 21.4101 8.07582 20.5315 8.9545L9.54019 19.9458C9.17774 20.3082 8.70239 20.536 8.19281 20.5915L4.57509 20.9856C3.78097 21.072 3.11061 20.4017 3.1971 19.6076L3.59111 15.9898C3.64661 15.4803 3.87444 15.0049 4.23689 14.6425L3.70656 14.1121L4.23689 14.6425L15.2282 3.6512C16.1068 2.77252 17.5315 2.77252 18.4101 3.6512Z"
                  stroke="#8F0301"
                  stroke-width="1.2"
                ></path>
                <path
                  id="vector_2"
                  d="M15.2282 3.6512C16.1068 2.77252 17.5315 2.77252 18.4101 3.6512L20.5315 5.77252C21.4101 6.6512 21.4101 8.07582 20.5315 8.9545L18.7283 10.7576L13.425 5.45432L15.2282 3.6512Z"
                  stroke="#8F0301"
                  stroke-width="1.2"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div class="trashIcon cursor-pointer" @click="handleDelete(item.id)">
        <svg
          width="23"
          height="22"
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
      </div>
    </div>
  </div>

  <!-- Edit Agent -->
  <Dialog
    v-model:visible="editAgent"
    maximizable
    modal
    header="Edit Agent"
    :style="{ width: '40rem' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
  >
    <form>
      <!-- Corrected from 'from' to 'form' -->
      <div class="row formFileds">
        <div class="col-6">
          <div class="form-group">
            <label> Nama</label>
            <input
              type="text"
              v-model="updateAgents.name"
              class="form-control"
            />
            <small v-if="errors.name" class="text-danger validate">{{
              errors.name[0]
            }}</small>
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <label> Email</label>
            <input
              type="email"
              v-model="updateAgents.email"
              class="form-control"
            />
            <small v-if="errors.email" class="text-danger validate">{{
              errors.email[0]
            }}</small>
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <label> Country</label>
            <input
              type="text"
              v-model="updateAgents.country"
              class="form-control"
            />
            <small v-if="errors.country" class="text-danger validate">{{
              errors.country[0]
            }}</small>
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <label> Plan</label>
            <input
              type="text"
              v-model="updateAgents.plan"
              class="form-control"
            />
            <!-- <small v-if="errors.plan" class="text-danger validate">{{errors.plan[0]}}</small> -->
          </div>
        </div>
      </div>
      <div class="flex justify-end gap-2 modal_footer">
        <Button
          type="button"
          class="btn btn-secondary"
          label="Cancel"
          severity="secondary"
          @click="editAgent = false"
          >Cancel</Button
        >
        <Button
          type="submit"
          class="btn btn-primary spinner"
          @click.prevent="updateAgent(updateAgents.id)"
          label="Save"
        >
          <Spinner v-if="loading" /> Update</Button
        >
      </div>
    </form>
  </Dialog>
</template>

<script>
// Images
import agent from "@/assets/images/agent.png";
import club1 from "@/assets/images/club1.png";

// Toast
import { useToast } from "vue-toastification";
const toast = useToast();

// Spinner
import Spinner from "@/components/Spinner.vue";

// import Axios
import axios from "axios";

export default {
  name: "Agentcard",
  props: {
    allAgents: Array,
    searchQuery: String,
    onDelete: Function,
    soloAgent: Function,
    agentDetail: Object,
    fetchAgents: Function,
  },
  components: {
    Spinner,
  },
  data() {
    return {
      agent: agent,
      club1: club1,
      city: "karachi",
      editAgent: false,
      loading: false,
      token: "",
      updateAgents: {
        id: "",
        name: "",
        email: "",
        country: "",
        plan: "None",
      },
      errors: {
        name: "",
        email: "",
        country: "",
        plan: "",
      },
    };
  },

  mounted() {
    this.token = localStorage.getItem("token");
    if (!this.token) {
      this.$router.push({ path: "/login" });
    }
  },

  methods: {
    // Delete Agents JS Start
    handleDelete(agentId) {
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
        accept: () => {
          this.onDelete(agentId);
        },
        reject: () => {
          console.log("Delete cancelled");
        },
      });
    },
    // Delete Agents JS Start

    // Edit Agent JS Start
    async handleId(agentId) {
      const data = await this.soloAgent(agentId);
      if (data && data.agent) {
        this.updateAgents = { ...data.agent };
      }
    },
    // Edit Agent JS End

    // Update Agent JS Start
    async updateAgent(id) {
      (this.loading = true), (this.errors = {});
      console.error(this.$baseURL + `theo/api/admin/agents/update/${id}`);
      console.error(this.token);
      try {
        const response = await axios.put(
          this.$baseURL + `theo/api/admin/agents/update/${id}`,
          this.updateAgents,
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${this.token}`,
            },
          }
        );
        if (response.status == 200) {
          this.fetchAgents();
          this.loading = false;
          console.error("This Response", response);
          this.editAgent = false;
          toast.success("Agent Successfully Updated");
        }
      } catch (error) {
        this.loading = false;
        if (error.response.data) {
          this.errors = error.response.data;
        } else {
          toast.error("error");
        }
      }
    },
    // Update Agent JS End
  },
  // computed: {
  //     filteredPlayers() {
  //         return this.allAgents.filter((player) => {
  //             const query = this.searchQuery.toLowerCase();
  //             return (
  //                 player.name.toLowerCase().includes(query) ||
  //                 player.email.toLowerCase().includes(query) ||
  //                 player.country.toLowerCase().includes(query)
  //             );
  //         });
  //     },
  // }
};
</script>
