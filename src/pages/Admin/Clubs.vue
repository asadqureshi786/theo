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

    <div class="spinner_center"  v-if="spinner" >
      <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="4" fill="transparent" stroke="#000" />
    </div>

    <!-- Clubs Card Section Start -->
    <div class="card mt-4 ">
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
        console.log(response);
      } catch (error) {
        console.log(error)
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
        console.log();
      } catch (error) {
        console.log(error)
      }
      }
    },

    // Fetch Clubs
    async fetchClubd(){
      this.spinner = true;
      
      this.leagueID = this.selectedLeague?.id;
      if(this.selectedLeague?.id){
        try {
          console.log(this.$baseURL+`theo/api/admin/club/${this.leagueID}/clubs`, {
          headers: {
            'Accept': 'application/json',
            Authorization: `Bearer ${this.token}`,
          },
        });
        const response = await axios.get(this.$baseURL+`theo/api/admin/clubs/${this.leagueID}/clubs`, {
          headers: {
            'Accept': 'application/json',
            Authorization: `Bearer ${this.token}`,
          },
        })
        if (response.status == 200  && response.data.length >= 1) {
          this.spinner = false
          console.log(response)
          this.allClubs = response.data;
          // this.selectedLeague = 'League';
        }else{
          this.spinner = false
          // this.leagues = '';
          // this.selectedLeague = 'League';
        }
        console.log();
      } catch (error) {
        this.spinner = false
        console.log(error)
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
