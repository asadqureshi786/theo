
<template>
    <div v-if="filteredClub.length === 0" class="text-center text-danger">
        No record found.
    </div>
    <div v-for="item in filteredClub" :key="item.name" class="box_card">
        <img :src="item.logo_url" class="profile_picture">

        <div class="middle">
            <p class="name">{{ item.name }}</p>
            <div class="desc agent">
                <label>Total Players: {{item.players_count}} </label>
                <p class="text">{{ item.total_player }}</p>
            </div>
            <div class="desc club">
                <label>Current transfer record:</label>
                <div class="club_img">
                    <p class="text">{{ item.current_transfer_record }}</p>
                </div>
            </div>
        </div>
        <router-link class="btn btn-primary" :to="`club-view/${item.id}`">View</router-link>

       
    </div>
</template>

<script>
import clubimg from "@/assets/images/clubimg.png"
import club1 from "@/assets/images/club1.png"
export default {
    name: 'Clubcard',
    props: {
        allClubs: Array,
        searchQuery: String
    },
    data() {
        return (
            {
                clubimg : clubimg,
                club1: club1,
                city: "karachi",
            }
        )
    },

    computed: {
        filteredClub() {
            return this.allClubs.filter((player) => {
                const query = this.searchQuery.toLowerCase();
                return (
                    player.name.toLowerCase().includes(query)
                    //  || player.current_transfer_record.toLowerCase().includes(query)
                );
            });
        },
    }
}
</script>