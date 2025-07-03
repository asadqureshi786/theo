<template>
  <div class="messages_page">
    <div class="users_side">
      <div class="hd formText f20 fw6">Messages</div>
      <Userslist :emailContacts="emailContacts" :emailID="emailMessage" :agentID="allMessages" :allAgents="allAgents" />
    </div>

      <div v-if="showChat" class="fix_not_Found mt-4 border-0">
        <i class="pi pi-exclamation-circle" ></i>No Chat Selected 
    </div>

    <div v-else >
      <div v-if="agentChatShow" class="chat_side">
      <Chatbox :agentDetail="agentDetail" :allMessages="allMessages" :emailMessages="emailMessages"  :messages="messages"/>
    </div>

    

    <div v-if="emailChatShow" class="chat_side">
      <EmailChatbox :emailMessages="emailMessages" :emailData="emailData" />
    </div>
    </div>

  </div>
</template>

<script>
// Components
import Userslist from "@/components/Userslist.vue";
import Chatbox from "@/components/Chatbox.vue";
import EmailChatbox from "@/components/EmailChatbox.vue"
import axios from "axios";

export default {
  name: "Messages",
  components: {
    Userslist,
    Chatbox,
    EmailChatbox,
  },
  data() {
    return {
      routeId: '',
      agentChatShow : false,
      emailChatShow : false,
      token: localStorage.getItem('token'),
      allAgents: [],
      emailContacts: [],
      agentID : '',
      agentDetail : {},
      messages : [],
      role : '',
      agentURL : '',
      chatActive : false,
      showChat : true,
      emailMessages : [],
      emailData : {},

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
                console.log(response)
        // return
        if (response.status == 200) {
          this.allAgents = response.data.agents;
          this.emailContacts = response.data.emailContacts;
          // console.log("Jeeaha",this.emailContacts);
        }
        console.log("This One is",response.data)
      } catch (error) {
        console.log(error);
      }
    },

    async allMessages(id) {
      this.chatActive = false;
      try {
        const response = await axios.get(this.$baseURL+`theo/api/admin/messages/${id}`, {
          headers: {
            'Accept': 'application/json',
            Authorization: `Bearer ${this.token}`,
          },
        }) 
        if(response.status == 200){
          this.showChat = false;
          this.agentChatShow = true;
          this.emailChatShow = false;
          this.agentDetail = response.data.conversation_with;
          this.messages = response.data.messages ;
          this.chatActive = true;

          

        }
      } catch (error) {
        console.log(error)
      }
    },

    async emailMessage(id){
        try {
        const response = await axios.get(this.$baseURL+`theo/api/admin/emails/select-email?id=${id}`, {
          headers: {
            'Accept': 'application/json',
            Authorization: `Bearer ${this.token}`,
          },
        }) 
        console.log(response)
        // return;
        if(response.status == 200){
          this.showChat = false;
          this.agentChatShow = false;
          this.emailChatShow = true;
          this.emailMessages = response.data.messages;
          this.emailData = response.data.upperData;
          // this.chatActive = true;



        }
      } catch (error) {
        console.log(error)
      }
    }
  }

};
</script>
