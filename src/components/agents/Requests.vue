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
            <Playerproposed v-if="requestOthers" :proposedImages="proposedImages" />
          </div>
        </div>
      </div>
      <div class="lside d-flex align-items-start gap-2">
        <div>
          <p class="date">Posted: {{request.created_at ? request.created_at.slice(0,-17) : '-'}}</p>
          <div :class="{ 'd-flex gap-2': requestOthers }">
            <router-link :to="`Job-view/${request.id}`" class="btn btn-primary">View</router-link>
          </div>
        </div>
        <div class="action">
          <!-- <i v-if="requestOthers" class="pi pi-ellipsis-v"></i> -->
          <div v-if="requestOthers" class="dropdown py-0 action_dropdown text-center">
            <div class="dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <span class="dots">
                <i class="pi pi-ellipsis-v"></i>
              </span>
            </div>
            <ul class="dropdown-menu action_dropdown_menu">
              <li><button type="submit" @click.prevent="getShareReqDetail(request.id)" class="dropdown-item" href="#">Share</button></li>
              <li><button type="submit" class="dropdown-item" @click.prevent="deleteRequest(request.id)" >Delete</button></li>
            </ul>
          </div>
        </div>
      </div>
    </li>
  </ul>

  <!-- Share Modal -->
  <Dialog v-model:visible="shareModal" maximizable modal header="Share Request" :style="{ width: '60rem' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
    <form>
      <div class="share_req_modal">
        <div class="header mt-2">
          <div class="profile">
            <img :src="userImg" alt="">
            <span class="txt">John Lweis</span>
          </div>
          <div class="form-group p-0 m-0">
            <div class="d_select">
              <Select v-model="reqData.share_type" editable @change="selectLeague"         optionValue="value" :options="sendOption" optionLabel="name"
                placeholder="Select club" class="w-full" />
              <small v-if="errors" class="text-danger validate">{{ errors }}</small>

            </div>
          </div>
        </div>


        <ul class="request_items mt-4 sm">
          <li class="item">
            <div class="rside">
              <div class="img">
                <img :src="userImg" class="main_profile" alt="" />
              </div>
              <div class="detail">
                <div class="top">
                  <div class="position">
                    <label for="">Position:</label>
                    <p class="text">{{shareData.main_position ? shareData.main_position : '-'}}</p>
                  </div>
                  <div class="league">
                    <label for="">League:</label>
                    <p class="text">{{shareData.league.name ? shareData.league.name : '-'}}</p>
                  </div>
                  <div class="position">
                    <label for="">Club:</label>
                    <p class="text">{{shareData.club.name ? shareData.club.name : '-'}}</p>
                  </div>
                </div>
                <div class="bottom d-flex gap-3">
                 
                  <Playerproposed v-if="requestOthers" :proposedImages="proposedImages" />
                </div>
              </div>
            </div>
            <div class="lside d-flex align-items-start gap-2">
              <div>
                <p class="date">Posted: {{shareData.created_at ? shareData.created_at.slice(0,-17) : '-'}}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="flex justify-end gap-2 modal_footer">
        <button type="button" class="btn btn-secondary" label="Cancel" severity="secondary"
          @click="shareModal = false">Cancel</button>
        <button type="submit" class="btn btn-primary spinner" label="Save" @click.prevent="shareRequest(shareData.id)"><Spinner v-if="loading"/>Share</button>
      </div>
    </form>
  </Dialog>

  <ConfirmDialog class="confirmation_modal"></ConfirmDialog>


</template>

<script>
import Playerproposed from "@/components/Playerproposed.vue";

// Images
import user from "@/assets/images/users/user1.png";
import proposed1 from "@/assets/images/player1.png";
import proposed2 from "@/assets/images/player2.png";
import proposed3 from "@/assets/images/player3.png";
import proposed4 from "@/assets/images/player4.png";

// Toast
import { useToast } from "vue-toastification";
const toast = useToast();

// Spinner
import Spinner from "@/components/Spinner.vue";

// Import Axios
import axios from "axios";

export default {
  name: "Requests",
  components: {
    Playerproposed,
    Spinner,
  },

  // props: {
  //   requestsList: Array,
  //   requestOthers: Boolean,
  //   proposedImages: Array,
  // },
  data() {
    return {
      token: localStorage.getItem("token"),
      loading : false,
      errors : '',
      requestsList: [],
      userImg: proposed2,
      proposedImages: [proposed1, proposed2, proposed3, proposed4],
      requestOthers: true,
      reqData : {
        share_type : '',
      },
      shareModal: false,
      sendOption: [
        { name: 'My Circle' , value : 'my_circle' },
        { name: 'Private', value : 'private' },
        { name: 'Public', value : 'public' },
      ],
      shareData : {},
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

    // Get Share Req Detail
    async getShareReqDetail(id){
      
      try {
        const response = await axios.get(this.$baseURL+`theo/api/agent/requests/${id}`,{
           headers: {
            'Accept': 'application/json',
            Authorization: `Bearer ${this.token}`,
          },
        })
        if(response.status ==  200){
          this.shareModal = true ;
          this.shareData = response.data;
          console.log(this.shareData)
        }
        console.log(response.data);
      } catch (error) {
        console.log(error)
      }
    },

    // Post Share Request
    async shareRequest(id){
      this.loading = true;
      this.errors = '';
      try {
        const response = await axios.post(this.$baseURL+`theo/api/agent/requests/share/${id}`,this.reqData,{
          headers: {
            'Accept': 'application/json',
            Authorization: `Bearer ${this.token}`,
          },
        })
        if(response.status == 200){
          this.loading = false;
             this.shareModal = false ;
          toast.success(response.data.message)
        }
      } catch (error) {
        this.loading = false;
        if(error.response.data.message){
          console.log(error.response.data.message);
          this.errors = error.response.data.message;
        }
        console.log(error);
      }
    },

    // Delete Request
    async deleteRequest(id){
       
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
        const response = await axios.delete(`${this.$baseURL}theo/api/agent/requests/delete/${id}`, {
          headers: {
            'Accept': 'application/json',
            Authorization: `Bearer ${this.token}`,
          },
        });
        if (response.status === 200) {
          toast.success("Agent deleted successfully!");
          this.fetchRequests();
        } else {
          toast.error("Failed to delete agent.");
        }
      } catch (error) {
        console.log(error)
        toast.error("Error deleting agent.");
      }
        },
        reject: () => {
          // console.log("Delete cancelled");
        },
      });
    },
  }
};
</script>
