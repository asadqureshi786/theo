<template>
    <div v-if="filteredPlayers.length === 0" class="text-center text-danger">
        No record found.
    </div>
    <div v-for="item in filteredPlayers" :key="allPlayers.id" class="box_card">
        <img :src="agent" class="profile_picture">

        <div class="middle">
            <p class="name">{{ item.name }}</p>
            <div class="desc agent">
                <label>User Level:</label>
                <p class="text">{{ item.userlevel }}</p>
            </div>
            <div class="desc club">
                <label>Country:</label>
                <div class="club_img">
                    <p class="text">{{ item.country }}</p>
                </div>
            </div>
        </div>
        <router-link class="btn btn-primary" :to="`agent-view/${item.id}`">View</router-link>

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
import agent from "@/assets/images/agent.png"
import club1 from "@/assets/images/club1.png"
export default {
    name: 'Agentcard',
    props: {
        allPlayers: Array,
        searchQuery: String
    },
    data() {
        return (
            {
                agent: agent,
                club1: club1,
                city: "karachi",
            }
        )
    },

    computed: {
        filteredPlayers() {
            return this.allPlayers.filter((player) => {
                const query = this.searchQuery.toLowerCase();
                return (
                    player.name.toLowerCase().includes(query) ||
                    player.userlevel.toLowerCase().includes(query) ||
                    player.country.toLowerCase().includes(query)
                );
            });
        },
    }
}
</script>