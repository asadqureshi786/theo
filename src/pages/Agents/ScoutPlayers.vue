<template>
  <div class="page_header mb-4">
    <h3 class="hd">Scout Players</h3>
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
  
    
    </div>
  </div>
      <div class="spinner_center"  v-if="spinner" >
      <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="4" fill="transparent" stroke="#000" />
    </div>

    <div v-if="notFound" class="fix_not_Found mt-4">
        <i class="pi pi-exclamation-circle" ></i>No Record Found
    </div>
    
    <SquadPlayerCard v-else :searchQuery="searchQuery"  :scoutViewButton="scoutViewButton" :allPlayers="allPlayers" />
   

</template>

<script>
// Axios
import axios from "axios";

// Toast
import { useToast } from "vue-toastification";
const toast = useToast();

// Components
import Spinner from "@/components/Spinner.vue";
import SquadPlayerCard from "@/components/agents/SquadPlayerCard.vue";
export default {
  name: "SquadPlayer",
  components : {
    Spinner,
    SquadPlayerCard
  },
  data() {
    return {
      showModal: false,
      loading : false,
      searchQuery: "",
      errors : {},
      spinner : false,
      notFound : false,
      scoutViewButton : true,
      token : localStorage.getItem("token"),
      formData: {
        transferMarketUrl: "",
        documents: [],
      },
      allPlayers : [],
    };
  },

  mounted(){
    this.fetchPlayer();
  },

  methods: {
    handleFileUpdate(fileItems) {
      this.formData.documents = fileItems.map((fileItem) => fileItem.file);
    },

 
    // Fetch Squad Player
    async fetchPlayer(){
     this.spinner = true;
      try {
        const response = await axios.get(this.$baseURL+"theo/api/agent/scout-players/all-players",{
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${this.token}`,
            },
        })
        console.log("this one",response);
        if(response.status == 200){
          this.allPlayers = response.data;
          this.spinner = false;
          if(response.data.length === 0){
            this.notFound = true;
          }
          else{
            this.notFound = false;
          }
        }
      } catch (error) {
        this.spinner = false;
        
      }
    }



  },
};
</script>
