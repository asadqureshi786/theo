<template>
  <div class="club_view">
    <!-- Page Header Section Start -->
    <div class="page_header">
      <div class="heading_icon">
        <div id="goBack" @click="goback" class="cursor-pointer">
          <i class="pi pi-chevron-left"></i>
        </div>
        <h3 class="hd">Club View</h3>
      </div>
      <button class="btn btn-primary" @click="AddContact = true" >
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

        Add Contact
      </button>
    </div>
    <!-- Page Header Section End -->

    <div class="info">
      <div class="row justify-content-center">
        <div class="col-md-4">
          <div class="text-center">
            <img :src="clubImg" alt="" />
            <h4 class="light6 fw6">Manchester City</h4>
            <div class="total_player mt-2 text-center">
              <p class="light4 f13">Total Players:</p>
              <div class="primaryLight1 f13 count">{{player_count}}</div>
            </div>
            <p class="light4 fw5 mt-1 f13">
              Current transfer record: <span class="fw4">€102.30m</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Contacts Section Start -->
    <div class="contact_lis">
      <Contactcard :fetchContact="fetchContact" :routeId="routeId" :contactList="contactList" class="mt-5" />
    </div>
    <!-- Contacts Section End -->

  

        <!-- Table Section Start -->
    <div class="light_head mb-3 mt-5">Players</div>
    <Dynamictable :t_head="player_head" :t_body="player_body" />
    <!-- Table Section Start -->





    <!-- Add Contact Modal Section Start -->
      <Dialog
    v-model:visible="AddContact"
      maximizable
      modal
      header="Add Contact"
      :style="{ width: '40rem' }"
      :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
    >
      <form @submit.prevent="addContact" > <!-- Corrected from 'from' to 'form' -->
        <div class="row formFileds">
          <div class="col-12">
            <div class="form-group">
              <label> Name</label>
              <input type="text" v-model="contact.name" class="form-control" />
              <small v-if="c_Error.name" class="text-danger validate">{{c_Error.name[0]}}</small>

            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label> Role</label>
              <input type="text" v-model="contact.role" class="form-control" />
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label> Email</label>
              <input type="email" v-model="contact.email" class="form-control" />
              <small v-if="c_Error.email" class="text-danger validate">{{c_Error.email[0]}}</small>

            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label> Phone Number</label>
              <input type="text" v-model="contact.phone" class="form-control" />
            </div>
          </div>
         
        </div>
        <div class="flex justify-end gap-2 modal_footer">
          <Button
            type="button"
            class="btn btn-secondary"
            label="Cancel"
            severity="secondary"
            @click="AddContact = false ; c_Error = []"
            >Cancel</Button
          >
          <Button
            type="submit"
            class="btn btn-primary spinner"
            label="Save"
            ><Spinner  v-if="loading" /> Add</Button
          >
        </div>
      </form>
    </Dialog>
    <!-- Add Contact Modal Section End -->


  </div>
</template>

<script>

// Components
import Documents from "@/components/Documents.vue";
import Contactcard from "@/components/Contactcard.vue";
import Dynamictable from "@/components/Dynamictable.vue";

// Images
import ukLogo from "@/assets/images/flag/uk.png"
import frLogo from "@/assets/images/flag/france.png"

// Images
import clubimg from "@/assets/images/clubimg.png";

// Routes
import { useRoute } from 'vue-router';

// Axios
import axios from "axios"

// Toast
import { useToast } from "vue-toastification";
const toast = useToast();


// Spinner
import Spinner from "@/components/Spinner.vue";



export default {
  name: "Clubview",
  components: {
    Documents,
    Contactcard,
    Dynamictable,
    Spinner,
  },
  data() {
    return {
      ukLogo : ukLogo,
      frLogo : frLogo,
      clubImg: clubimg,
      routeId : '',
      loading : false,
      c_Error : [],
      AddContact : false,
      player_count : '-',
      contactList : [],
      player_data : [],
      token : localStorage.getItem('token'),
      contact : {
        name : '',
        role : '',
        email : '',
        phone: '',
      },
    
      player_head: [
        {
          key: "checkbox",
          label: "",
        },
        {
          key: "join_date",
          label: "Join Date",
        },
        {
          key: "player_name",
          label: "Player Name",
        },
        {
          key: "dob",
          label: "Date of Birth",
        },
        {
          key: "nationality",
          label: "Nationality",
        },
        {
          key: "role",
          label: "Role",
        },
        {
          key: "mv",
          label: "MV",
        },
        {
          key: "contract_end",
          label: "Contract End",
        },
      ],

      player_body: [],
    };
  },
  mounted(){
    const route = useRoute()
    this.routeId = route.params.id;
    this.fetchContact();
  },
  methods: {
    goback() {
      window.history.back();
    },
    // Add Contact JS Start

     async addContact(){
      try {
        this.loading = true;
        this.c_Error = [];
        const response = await axios.post(this.$baseURL+`theo/api/admin/clubs/${this.routeId}/store-contact`,this.contact,{
          headers: {
            'Accept': 'application/json',
            Authorization: `Bearer ${this.token}`,
          },
        });
        if(response.status == 200){
          this.loading = false;
          this.AddContact = false;
          this.fetchContact();
          toast.success("Contact added successfully!");
          this.contact = {
            name :"",
            role :"",
            email :"",
            phone :"",
          }
        }
      } catch (error) {
        this.loading = false;
        this.c_Error = error.response.data; 
      }
    },
    // Add Contact JS End

    // Fetch Contact JS Start
    async fetchContact(){
      try {
        const response = await axios.get(this.$baseURL+`theo/api/admin/clubs/${this.routeId}`,{
          headers: {
            'Accept': 'application/json',
            Authorization: `Bearer ${this.token}`,
          },
        })
        if(response.status == 200){
            this.contactList = response.data.contacts;
            this.player_count = response.data.players_count;
            this.player_data =  response.data.players;
            this.player_body = this.player_data.map((player,index)=>({

            checkbox: `<label for="check1" class="table_check_list" class="text-center">
                        <input id="check1" type="checkbox" />
                        <div class="c_checkbox"><i class="pi pi-check" ></i></div>
                      </label>`,

            join_date: `<div class="text">${player.joining_date ? player.joining_date.slice(0, -8) : '-'}</div>`,

            player_name: `<div class="text fw6">${player.name}</div>`,

            dob: `<div class="text fw6">${player.joining_dob ? player.joining_dob.slice(0, -8) : '-'}</div>`,

            // nationality: `<div class="flag_imges "><img class="img-fluid" src="${ukLogo}" ><img class="img-fluid" src="${frLogo}" ></div>`,

            nationality: `<div class="text">${player.citizenship ? player.citizenship : '-'}</div>`,

            role: `<div class="text">${player.position ? player.position : '-'}</div>`,

            mv: `<div class="text">€${player.mv ? player.mv : '-'}m</div>`,

            contract_end: `<div class="text">${player.contract_expire ? player.contract_expire : '-'}</div>`,
            }))
        }
      } catch (error) {
      }
    }
    // Fetch Contact JS End


  },
};
</script>
