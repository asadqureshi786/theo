<template>
  <div class="messages_page">
    <div class="users_side">
      <div class="hd formText f20 fw6">Messages</div>
      <Userslist :agentID="allMessages" :allAgents="allAgents" />
    </div>

    <div v-if="showChat" class="fix_not_Found mt-4 border-0">
        <i class="pi pi-exclamation-circle" ></i>No Chat Selected 
    </div>

    <div v-else class="chat_side ">
      <Chatbox  :agentDetail="agentDetail" :allMessages="allMessages"  :messages="messages"/>
    </div>
  </div>
</template>

<script>
// Components
import Userslist from "@/components/agents/Userslist.vue";
import Chatbox from "@/components/agents/Chatbox.vue";
import axios from "axios";

export default {
  name: "Messages",
  components: {
    Userslist,
    Chatbox,
  },
  data() {
    return {
      routeId: '',
      token: localStorage.getItem('token'),
      allAgents: [],
      agentID : '',
      agentDetail : {},
      messages : [],
      role : '',
      showChat : true,
      agentURL : '',
      chatActive : false,
    }
  },


  mounted() {
    this.allAgentsFun();
  },
  methods: {
    async allAgentsFun() {
      try {
        const response = await axios.get(this.$baseURL + "theo/api/agent/messages", {
          headers: {
            'Accept': 'application/json',
            Authorization: `Bearer ${this.token}`,
          },
        });
        if (response.status == 200) {
          this.allAgents = response.data;
        }
      } catch (error) {
      }
    },

    async allMessages(id) {
      this.chatActive = false;
      this.showChat = false;
      try {
        const response = await axios.get(this.$baseURL+`theo/api/agent/messages/${id}`, {
          headers: {
            'Accept': 'application/json',
            Authorization: `Bearer ${this.token}`,
          },
        }) 
        if(response.status == 200){
          this.agentDetail = response.data.conversation_with;
          this.messages = response.data.messages ;
          this.chatActive = true;
        }
      } catch (error) {
      }
    }
  }

};
</script>
