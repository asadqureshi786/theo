<template>
  <div class="clubs_page">
    <!-- PAGE HEADER -->
    <div class="page_header">
      <h3 class="hd">Clubs</h3>
      <div class="r_side">
        <div class="form-group">
          <div class="d_select">
            <Select v-model="selectedCountry" @change="selectLeague" editable :options="countries" optionLabel="name"
              placeholder="Country" class="w-full" />
          </div>
        </div>
        <div class="form-group">
          <div class="d_select">
            <Select v-model="selectedLeague" @change="fetchClubd" editable :options="leagues" optionLabel="name" placeholder="League"
              class="w-full" />
          </div>
        </div>
        <div class="searchBox icon_box">
          <span class="icon">
            <i class="pi pi-search"></i>
          </span>
          <label class="visually-hidden" for="searchInput">Search</label>
          <InputText type="text" class="form-control" placeholder="Search" v-model="searchQuery" />
        </div>
      </div>
    </div>
    <!-- PAGE HEADER -->

    <div class="fix_spinner_center"  v-if="spinner" >
      <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="4" fill="transparent" stroke="#000" />
    </div>

    <div v-if="leagues.length === 0 || allClubs.length === 0"  class="fix_not_Found mt-4">
        <i class="pi pi-exclamation-circle" ></i>No Record Found 
    </div>

    <!-- Clubs Card Section Start -->
    <div v-else class="card mt-4 ">
      <div class="card-body">
        <div class="box_grid">
          <Clubcard :allClubs="allClubs" :searchQuery="searchQuery" />
        </div>
      </div>
    </div>
    <!-- Clubs Card Section End -->
   
  </div>
</template>

<script>
import Clubcard from "@/components/Clubcard.vue";

// import Countries
// import { countries } from "@/components/Countrylist.js"

// Axios
import axios from "axios"

export default {
  name: "Clubs",
  components: {
    Clubcard,
  },
  data() {
    return {
      searchQuery: "",
      token: localStorage.getItem('token'),
      selectedCountry: null,
      selectedLeague: null,
      countryID: '',
      leagueID: '',
      spinner : false,
      countries: [],
      leagues: [],
      allClubs: [],
    };
  },

  mounted() {
    this.fetchCulbs();
  },

  methods: {
    async fetchCulbs() {
      try {
        const response = await axios.get(this.$baseURL + 'theo/api/admin/clubs', {
          headers: {
            'Accept': 'application/json',
            Authorization: `Bearer ${this.token}`,
          },
        })
        if (response.status == 200) {
          this.countries = response.data;
        }
      } catch (error) {
      }
    },
    async selectLeague() {
      this.countryID = this.selectedCountry?.id
      if(this.selectedCountry?.id){
        try {
                          this.allClubs = [];
        const response = await axios.get(this.$baseURL + `theo/api/admin/clubs/${this.countryID}/leagues`, {
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
      }
      }
    },

    // Fetch Clubs
    async fetchClubd(){
      this.spinner = true;
      
      this.leagueID = this.selectedLeague?.id;
      if(this.selectedLeague?.id){
        try {
        const response = await axios.get(this.$baseURL+`theo/api/admin/clubs/${this.leagueID}/clubs`, {
          headers: {
            'Accept': 'application/json',
            Authorization: `Bearer ${this.token}`,
          },
        })
        if (response.status == 200  && response.data.length >= 1) {
          this.spinner = false
          this.allClubs = response.data;
        }else{
          this.spinner = false
        }
      } catch (error) {
        this.spinner = false
      }finally {
        this.spinner = false
      }
      }
    }

  }

};
</script>

<style scoped>
.active {
  background-color: #007bff;
  color: white;
}
</style>
