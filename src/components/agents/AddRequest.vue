<template>
  <button class="btn btn-primary" @click="addRequest = true">
    Add Request
  </button>

  <!-- Add Request Modal Section Start -->
  <Dialog
    v-model:visible="addRequest"
    maximizable
    modal
    header="Add Request"
    :style="{ width: '40rem' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
  >
    <form>
      <!-- Corrected from 'from' to 'form' -->
      <div class="row formFileds">
        <div class="col-12">
          <div class="form-group">
            <label> Job Title</label>
            <input type="text" v-model="formData.job_title" class="form-control" />
            <small v-if="errors.job_title" class="text-danger validate" >{{errors.job_title[0]}}</small>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label> Country</label>
            <!-- <input type="text" class="form-control" /> -->
            <div class="d_select">
              <Select
                v-model="selectedCountry"
                editable
                @change="selectLeague"
                :options="allCountries"
                optionLabel="name"
                placeholder="Select club"
                class="w-full"
              />
              <!-- :options="leagues" -->
            </div>
            <small v-if="errors.country_id" class="text-danger validate" >{{errors.country_id[0]}}</small>

          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label> League</label>
               <div class="d_select">
            <Select v-model="selectedLeague" @change="fetchAllClub"  editable :options="leagues" optionLabel="name" placeholder="League"
            class="w-full" />
            </div>
            <small v-if="errors.league_id" class="text-danger validate" >{{errors.league_id[0]}}</small>

        </div>
    </div>
    <div class="col-md-6">
        <div class="form-group">
            <label> Club</label>
             <div class="d_select">
            <Select v-model="selectedClub" @change="fetchAllClub"  editable :options="clubs" optionLabel="name" placeholder="Clubs"
            class="w-full" />
            </div>
            <small v-if="errors.club_id" class="text-danger validate" >{{errors.club_id[0]}}</small>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label> Main Position</label>
            <input type="text" v-model="formData.main_position" class="form-control" />
            <small v-if="errors.main_position" class="text-danger validate" >{{errors.main_position[0]}}</small>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label> Other Position</label>
            <input type="text" v-model="formData.other_position" class="form-control" />
            <small v-if="errors.other_position" class="text-danger validate" >{{errors.other_position[0]}}</small>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label> Age Reference</label>
            <input type="text" v-model="formData.age_reference" class="form-control" />
            <small v-if="errors.age_reference" class="text-danger validate" >{{errors.age_reference[0]}}</small>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label> Name</label>
            <input type="text" v-model="formData.name" class="form-control" />
            <small v-if="errors.name" class="text-danger validate" >{{errors.name[0]}}</small>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label> Email</label>
            <input type="email" v-model="formData.email" class="form-control" />
            <small v-if="errors.email" class="text-danger validate" >{{errors.email[0]}}</small>
        </div>
    </div>
    <div class="col-md-12">
        <div class="form-group">
            <label> Additional Information</label>
            <textarea type="email" v-model="formData.additional_information" class="form-control"></textarea>
            <small v-if="errors.additional_information" class="text-danger validate" >{{errors.additional_information[0]}}</small>
          </div>
        </div>
      </div>
      <div class="flex justify-end gap-2 modal_footer">
        <button
          type="button"
          class="btn btn-secondary"
          label="Cancel"
          severity="secondary"
          @click="addRequest = false"
          >Cancel</button
        >
        <button
          type="submit"
          class="btn btn-primary spinner"
          label="Save"
          @click="addRequestFunction"
          >
          <Spinner v-if="loading"  />
          Add</button
        >
      </div>
    </form>
  </Dialog>
  <!-- Add Request Modal Section End -->
</template>

<script>
// Axios
import axios from "axios";

// Spinner
import Spinner from "@/components/Spinner.vue";

// Toast
import { useToast } from "vue-toastification";
const toast = useToast();

export default {
  name: "AddRequest",
  components : {
    Spinner,
  },
  data() {
    return {
      addRequest: false,
      token: localStorage.getItem('token'),
      selectedCountry: null,
      loading : false,
      leagues : [],
      clubs :[],
      selectedClub: null,
      allCountries: [],
      errors: {},
      formData: {
        job_title: "",
        country_id: '',
        league_id: '',
        club_id: '',
        main_position: "",
        other_position: "",
        age_reference: "",
        name: "",
        email: "",
        additional_information: "",
      },
    };
  },

  mounted() {
    this.fetchCountries();
  },

  methods: {
    // Method to handle form fetch Country
      async fetchCountries() {
      try {
        const response = await axios.get(this.$baseURL + 'theo/api/agent/requests/countries', {
          headers: {
            'Accept': 'application/json',
            Authorization: `Bearer ${this.token}`,
          },
        })
        if (response.status == 200) {
          this.allCountries = response.data;
        }
      } catch (error) {
        console.log(error)
      }
    },

    // Select League
     async selectLeague() {
      this.countryID = this.selectedCountry?.id
      if(this.selectedCountry?.id){
        try {
        const response = await axios.get(this.$baseURL + `theo/api/agent/requests/${this.countryID}/leagues`, {
          headers: {
            'Accept': 'application/json',
            Authorization: `Bearer ${this.token}`,
          },
        })
        if (response.status == 200  && response.data.length >= 1) {
          this.leagues = response.data;
          this.selectedLeague = 'League';
        }else{
          this.leagues = '';
          this.selectedLeague = 'League';
        }
      } catch (error) {
        console.log(error)
      }
      }
    },

    // Select All Clubs
    async fetchAllClub() {
      this.leagueID = this.selectedLeague?.id;
      if(this.leagueID){
        try {
          const response = await axios.get(this.$baseURL + `theo/api/agent/requests/${this.leagueID}/clubs`, {
            headers: {
              'Accept': 'application/json',
              Authorization: `Bearer ${this.token}`,
            },
          })
          if (response.status == 200) {
            this.clubs = response.data;
          }
        } catch (error) {
          console.log(error)
        }
      }
    },

    // Add Request Function
    async addRequestFunction(e) {
        e.preventDefault();
        // this.errors = {};
        this.formData.country_id = this.selectedCountry?.id || '';
        this.formData.league_id = this.selectedLeague?.id|| '';   
        this.formData.club_id = this.selectedClub?.id|| '';   
        this.loading = true;
        
        try {
          const response = await axios.post(this.$baseURL + 'theo/api/agent/requests/save', this.formData, {
            headers: {
              'Accept': 'application/json',
              Authorization: `Bearer ${this.token}`,
            },
          });
          if (response.status == 201) {
            toast.success(response.data.message);
            this.addRequest = false;
            this.loading = false;
              this.$emit('request-added')
          }
        } catch (error) {
          this.errors = error.response.data;
          this.loading = false;
            if(error.response.data){
            }
            else{
                this.errors = {};
            }
            console.error(error.response.data);
        
        }
    }
  },

};
</script>
