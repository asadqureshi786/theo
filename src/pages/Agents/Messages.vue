<template>
  <div class="messages_page">
    <div class="users_side">
      <div class="hd formText f20 fw6">Messages</div>
      <Userslist :agentID="allMessages" :allAgents="allAgents" />
    </div>
    <div class="chat_side">
      <Chatbox  :agentDetail="agentDetail" :allMessages="allMessages"  :messages="messages"/>
      <div  class="d-none no_chat_selected d-flex justify-content-center align-items-center h-100">
        <div   class="f30 fw4 silverCol" >No Chat Selected</div>
      </div>
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
        console.log(error);
      }
    },

    async allMessages(id) {
      this.chatActive = false;
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
        console.log(error)
      }
    }
  }

};
</script>
