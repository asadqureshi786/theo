
<template>
    <div v-if="filteredClub.length === 0" class="text-center text-danger">
        No record found.
    </div>
    <div v-for="item in filteredClub" :key="item.name" class="box_card">
        <img :src="clubimg" class="profile_picture">

        <div class="middle">
            <p class="name">{{ item.total_player }}</p>
            <div class="desc agent">
                <label>Total Players:</label>
                <p class="text">{{ item.current_transfer_record }}</p>
            </div>
            <div class="desc club">
                <label>Current transfer record:</label>
                <div class="club_img">
                    <!-- <p class="text">{{ item.country }}</p> -->
                </div>
            </div>
        </div>
        <router-link class="btn btn-primary" to="club-view">View</router-link>

        <div class="trashIcon">

            <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M19.75 5.48177C16.6975 5.17927 13.6267 5.02344 10.565 5.02344C8.75 5.02344 6.935 5.1151 5.12 5.29844L3.25 5.48177"
                    fill="#8F0301" />
                <path
                    d="M19.75 5.48177C16.6975 5.17927 13.6267 5.02344 10.565 5.02344C8.75 5.02344 6.935 5.1151 5.12 5.29844L3.25 5.48177"
                    stroke="#8F0301" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path
                    d="M8.29166 4.55551L8.49332 3.35467C8.63999 2.48384 8.74999 1.83301 10.2992 1.83301H12.7008C14.25 1.83301 14.3692 2.52051 14.5067 3.36384L14.7083 4.55551"
                    stroke="#8F0301" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path
                    d="M17.7792 8.37793L17.1833 17.6088C17.0825 19.0479 17 20.1663 14.4425 20.1663H8.55749C5.99999 20.1663 5.91749 19.0479 5.81666 17.6088L5.22083 8.37793"
                    stroke="#8F0301" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.96918 15.125H13.0217" stroke="#8F0301" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                <path d="M9.20834 11.458H13.7917" stroke="#8F0301" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>

        </div>
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
                    player.total_player.toLowerCase().includes(query) ||
                    player.current_transfer_record.toLowerCase().includes(query)
                );
            });
        },
    }
}
</script>