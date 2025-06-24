<template>
    <!-- <div v-if="filteredPlayers.length === 0" class="text-center text-danger">
        No record found.
      </div> -->
      <!-- {{filteredPlayers.length}} -->
    <div v-for="item in filteredPlayers" :key="allPlayers.name"  class="box_card">
        <img :src="item.image" class="profile_picture" >

        <div class="middle">
            <p class="name">{{item.name}}</p>
            <div class="desc agent" >
                <label>Agent:</label>
                <p class="text">agent</p>
            </div>
            <div class="desc club" >
                <label>Club:</label>
                <div class="club_img">
                    <img :src="item.club.logo_url" >
                    <p class="text">{{item.club.name}}</p>
                </div>
            </div>
        </div>
        <router-link class="btn btn-primary" :to="`player-profile/${item.id}`" >View</router-link>

        <div class="status">status</div>
    </div>
</template>

<script>
import Profile1 from "@/assets/images/profile1.jpg"
import club1 from "@/assets/images/club1.png"
export default {
    name : 'Playercard',
    props : {
        allPlayers : Array,
        searchQuery : String
    },
    data(){
        return(
            {
                Profile1 : Profile1,
                club1 : club1,
                city : "karachi",
            }
        )
    },

    computed : {
        filteredPlayers() {
      return this.allPlayers.filter((player) => {
        const query = this.searchQuery.toLowerCase();
        return (
          player.name.toLowerCase().includes(query)    ||
          player.club.toLowerCase().includes(query)
        //    ||
        //   player.club.toLowerCase().includes(query)
        );
      });
    },
    }
}
</script>