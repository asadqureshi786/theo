<template>
    <div class="users_list">

        <div class="list_tabs d-flex gap-1 mb-3 mt-1">
            <button @click="activeTab = 1" type="button" :class="`action w-100  ${activeTab == 1 ? 'active' : ''} `">Agents</button>
            <button @click="activeTab = 2" type="button" :class="`action w-100  ${activeTab == 2 ? 'active' : ''} `">Email</button>
        </div>

        <div v-if="activeTab == 1" class="agent_contacts">
               <div class="search_user">
            <div class="searchBox icon_box">
                <span class="icon">
                    <i class="pi pi-search"></i>
                </span>
                <InputText type="text" v-model="searchInput" class="form-control" placeholder="Search" />
            </div>
                </div>
        <ul class="list">
            <li v-for="item in allAgents" :key="item.name">
                <div class="item" :class="{ 'active': item.active === true, 'online': item.online === true }" @click="agentID(item.id)" >
                    <div class="info">
                        <div class="p_img">
                            <img :src="item.profile ? item.profile : dp" alt="">
                        </div>
                        <div>
                            <p class="name">{{ item.name }}</p>
                            <p class="msg">{{ item.msg }}</p>
                        </div>
                    </div>
                    <div class="time">{{ item.time }}</div>
                </div>
            </li>
        </ul>
        </div>
        <div v-if="activeTab == 2" class="email_contacts">
                  <div class="search_user">
            <div class="searchBox icon_box">
                <span class="icon">
                    <i class="pi pi-search"></i>
                </span>
                <InputText type="text" v-model="searchEmail" class="form-control" placeholder="Search" />
            </div>
                </div>
        <ul class="list">
            <li v-for="item in filterEmail" :key="item.name">
                <div class="item" :class="{ 'active': item.active === true, 'online': item.online === true }" @click="emailID(item.id)" >
                    <div class="info">
                        <div class="p_img">
                            <img :src="dp" alt="">
                        </div>
                        <div>
                            <p class="name">{{ item.name }} {{ item.id }}</p>
                            <p class="msg">{{ item.msg }}</p>
                        </div>
                    </div>
                    <div class="time">{{ item.time }}</div>
                </div>
            </li>
        </ul>
        </div>
    </div>
</template>

<script>
import user1 from "@/assets/images/chatUser1.png"
import user2 from "@/assets/images/chatUser2.png"
import user3 from "@/assets/images/chatUser3.png"
import user4 from "@/assets/images/chatUser4.png"
import user5 from "@/assets/images/chatUser5.png"

// Dummy Image
import dp from "@/assets/images/dummy.jpg"


export default {
    name: 'Userslist',
    props : {
        allAgents : Array,
        agentID : Function,
        emailID : Function,
        emailContacts : Array,
    },
    data() {
        return {
            searchInput: '',
            searchEmail: '',
            img : user1,
            dp : dp,
            activeTab : 1,
            users: [
                { img: user1, name: 'Eion Morgan', msg: 'This player is really cool.', time: '5h', active: true, online: true },
                { img: user2, name: 'Ian Bell', msg: 'This player is really cool.', time: '5h', active: false, online: true },
                { img: user3, name: 'Shane Watson', msg: 'This player is really cool.', time: '5h', active: false, online: false },
                { img: user4, name: 'Ricky Ponting', msg: 'This player is really cool.', time: '5h', active: false, online: true },
                { img: user5, name: 'Chris Gayle', msg: 'This player is really cool.', time: '5h', active: false, online: false },
                { img: user3, name: 'Shane Watson', msg: 'This player is really cool.', time: '5h', active: false, online: false },
                { img: user4, name: 'Ricky Ponting', msg: 'This player is really cool.', time: '5h', active: false, online: true },
                { img: user5, name: 'Chris Gayle', msg: 'This player is really cool.', time: '5h', active: false, online: false },
            ]
        }
    },
    mounted(){
        console.log(this.allAgents);
    },
    computed: {
        filterChat() {
            return this.allAgents.filter((player) => {
                const query = this.searchInput.toLowerCase();
                return (
                    player.name.toLowerCase().includes(query)
                )
            })
        },
        filterEmail() {
            return this.emailContacts.filter((player) => {
                const query = this.searchEmail.toLowerCase();
                return (
                    player.name.toLowerCase().includes(query)
                )
            })
        }

    },
   

}
</script>