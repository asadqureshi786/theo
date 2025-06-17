<template>
  <div class="messages_page">
    <div class="users_side">
      <div class="hd formText f20 fw6">Messages</div>
      <Userslist :agentID="allMessages" :allAgents="allAgents" />
    </div>
    <div class="chat_side">
      <Chatbox :agentDetail="agentDetail"  :messages="messages"/>
    </div>
  </div>
</template>

<script>
// Components
import Userslist from "@/components/Userslist.vue";
import Chatbox from "@/components/Chatbox.vue";
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
    }
  },


  mounted() {
    this.allAgentsFun();
  },
  methods: {
    async allAgentsFun() {
      try {
        const response = await axios.get(this.$baseURL + "theo/api/admin/messages", {
          headers: {
            'Accept': 'application/json',
            Authorization: `Bearer ${this.token}`,
          },
        });
        if (response.status == 200) {
          this.allAgents = response.data;
        }
      } catch (error) {
        console.log(error);
      }
    },

    async allMessages(id) {
      try {
        const response = await axios.get(this.$baseURL+`theo/api/admin/messages/${id}`, {
          headers: {
            'Accept': 'application/json',
            Authorization: `Bearer ${this.token}`,
          },
        })
        if(response.status == 200){
          this.agentDetail = response.data.conversation_with;
          this.messages = response.data.messages ;
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

};
</script>
