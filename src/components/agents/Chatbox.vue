<template>
  <div class="chat_box">
    <div class="header">
      <div class="info">
        <div class="p_img active">
          <img :src="profileImg" alt="" />
        </div>
        <div>
          <p class="name">{{agent.name }}</p>
          <p class="last_seen">Last seend 45 min ago</p>
        </div>
      </div>
      <div class="whatsApp_icon">
        <i class="pi pi-whatsapp" ></i>
      </div>
    </div>

    <ul class="msg_list" ref="scrollBox">
      <li
        v-for="(msg, index) in msgs"
        :key="index"
        :class="[
          msg.sender_id !== userId ? 'recieved_msg' : 'sender_msg',
          'messages',
        ]"
      >

      <!-- <div v-if="msg.type === 'receiver'" class="profile_img">
        <img :src="msg.profile" alt="" />
      </div> -->
        <div>
          <ul class="list">
            <li>
              <p class="msg">{{ msg.message }}</p>
            </li>
          </ul>
          <div class="msg_time">{{ msg.time }}</div>
        </div>

        <div v-if="msg.type === 'sender'" class="profile_img">
          <img :src="msg.profile" alt="" />
        </div>
      </li>
    </ul>

    <div class="chat_input">
      <div class="icon face"><i class="pi pi-face-smile"></i></div>
        <input type="text"  @keydown.enter="sendChat" v-model="formData.message" class="form-control" placeholder="Type a message" />
        <div class="d-flex links aling-items-center gap-3">
          <div class="icon d-flex g-4 align-items-center ">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.8296 3.086C6.2781 1.7735 8.0916 1.73375 8.62335 2.96675L8.66835 3.08675L9.2736 4.85675C9.4123 5.26267 9.63645 5.63413 9.93092 5.94607C10.2254 6.258 10.5833 6.50316 10.9806 6.665L11.1433 6.72575L12.9133 7.33025C14.2258 7.77875 14.2656 9.59225 13.0333 10.124L12.9133 10.169L11.1433 10.7743C10.7373 10.9129 10.3657 11.137 10.0536 11.4314C9.74154 11.7259 9.49627 12.0839 9.33435 12.4813L9.2736 12.6432L8.6691 14.414C8.2206 15.7265 6.4071 15.7662 5.8761 14.534L5.8296 14.414L5.2251 12.644C5.08648 12.2379 4.86237 11.8663 4.5679 11.5543C4.27343 11.2422 3.91544 10.9969 3.5181 10.835L3.3561 10.7743L1.5861 10.1698C0.272846 9.72125 0.233096 7.90775 1.4661 7.37675L1.5861 7.33025L3.3561 6.72575C3.76202 6.58704 4.13348 6.3629 4.44541 6.06843C4.75735 5.77396 5.0025 5.41602 5.16435 5.01875L5.2251 4.85675L5.8296 3.086ZM13.2493 0.5C13.3897 0.5 13.5272 0.539359 13.6462 0.613604C13.7653 0.687849 13.8611 0.794002 13.9228 0.92L13.9588 1.00775L14.2213 1.77725L14.9916 2.03975C15.1322 2.08752 15.2555 2.17596 15.3458 2.29386C15.4361 2.41176 15.4893 2.55381 15.4988 2.70202C15.5083 2.85022 15.4736 2.9979 15.399 3.12634C15.3245 3.25478 15.2135 3.3582 15.0801 3.4235L14.9916 3.4595L14.2221 3.722L13.9596 4.49225C13.9117 4.63282 13.8232 4.75602 13.7053 4.84624C13.5873 4.93647 13.4453 4.98964 13.2971 4.99904C13.1489 5.00844 13.0012 4.97363 12.8728 4.89903C12.7444 4.82443 12.6411 4.7134 12.5758 4.58L12.5398 4.49225L12.2773 3.72275L11.5071 3.46025C11.3665 3.41248 11.2432 3.32404 11.1529 3.20614C11.0626 3.08824 11.0094 2.94619 10.9999 2.79798C10.9904 2.64978 11.0251 2.5021 11.0997 2.37366C11.1742 2.24522 11.2852 2.1418 11.4186 2.0765L11.5071 2.0405L12.2766 1.778L12.5391 1.00775C12.5897 0.859569 12.6854 0.730931 12.8127 0.639874C12.9401 0.548817 13.0928 0.499906 13.2493 0.5Z"
                fill="black"
              />
              <path
                d="M5.8296 3.086C6.2781 1.7735 8.0916 1.73375 8.62335 2.96675L8.66835 3.08675L9.2736 4.85675C9.4123 5.26267 9.63645 5.63413 9.93092 5.94607C10.2254 6.258 10.5833 6.50316 10.9806 6.665L11.1433 6.72575L12.9133 7.33025C14.2258 7.77875 14.2656 9.59225 13.0333 10.124L12.9133 10.169L11.1433 10.7743C10.7373 10.9129 10.3657 11.137 10.0536 11.4314C9.74154 11.7259 9.49627 12.0839 9.33435 12.4813L9.2736 12.6432L8.6691 14.414C8.2206 15.7265 6.4071 15.7662 5.8761 14.534L5.8296 14.414L5.2251 12.644C5.08648 12.2379 4.86237 11.8663 4.5679 11.5543C4.27343 11.2422 3.91544 10.9969 3.5181 10.835L3.3561 10.7743L1.5861 10.1698C0.272846 9.72125 0.233096 7.90775 1.4661 7.37675L1.5861 7.33025L3.3561 6.72575C3.76202 6.58704 4.13348 6.3629 4.44541 6.06843C4.75735 5.77396 5.0025 5.41602 5.16435 5.01875L5.2251 4.85675L5.8296 3.086ZM13.2493 0.5C13.3897 0.5 13.5272 0.539359 13.6462 0.613604C13.7653 0.687849 13.8611 0.794002 13.9228 0.92L13.9588 1.00775L14.2213 1.77725L14.9916 2.03975C15.1322 2.08752 15.2555 2.17596 15.3458 2.29386C15.4361 2.41176 15.4893 2.55381 15.4988 2.70202C15.5083 2.85022 15.4736 2.9979 15.399 3.12634C15.3245 3.25478 15.2135 3.3582 15.0801 3.4235L14.9916 3.4595L14.2221 3.722L13.9596 4.49225C13.9117 4.63282 13.8232 4.75602 13.7053 4.84624C13.5873 4.93647 13.4453 4.98964 13.2971 4.99904C13.1489 5.00844 13.0012 4.97363 12.8728 4.89903C12.7444 4.82443 12.6411 4.7134 12.5758 4.58L12.5398 4.49225L12.2773 3.72275L11.5071 3.46025C11.3665 3.41248 11.2432 3.32404 11.1529 3.20614C11.0626 3.08824 11.0094 2.94619 10.9999 2.79798C10.9904 2.64978 11.0251 2.5021 11.0997 2.37366C11.1742 2.24522 11.2852 2.1418 11.4186 2.0765L11.5071 2.0405L12.2766 1.778L12.5391 1.00775C12.5897 0.859569 12.6854 0.730931 12.8127 0.639874C12.9401 0.548817 13.0928 0.499906 13.2493 0.5Z"
                fill="url(#paint0_linear_270_4943)"
                fill-opacity="0.9"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_270_4943"
                  x1="8.03532"
                  y1="0.5"
                  x2="8.03532"
                  y2="15.4292"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.581731" stop-color="#8F0301" />
                  <stop offset="1" stop-color="#4A0D0C" />
                </linearGradient>
              </defs>
            </svg>
            <span class="text">Ask AI</span>
          </div>
          <label class="icon d-flex justify-content-center align-items-center cursor_pointer"><i class="pi pi-paperclip"></i></label>
          <div  v-if="loader" class="spinner_loader d-flex justify-content-center align-items-center" >
          <spinner/>
          </div>
          <div  v-else @click="sendChat" class="icon cursor-pointer"><i class="pi pi-send"></i></div>
        </div>
    </div>
  </div>
</template>

<script>
import user1 from "@/assets/images/chatUser4.png";

import { useAuthStore } from '@/store/auth.js';
import axios from "axios";

// Spinner
import spinner from "@/components/Spinner.vue";

export default {
  name: "Chatbox",
  components : {
    spinner,
  },
  props: {
    agentDetail: Object,
    messages: Array,
    allMessages : Function,
  },
  data() {
    return {
      profileImg: user1,
      loader : false,
      formData : {
        message : '',
        receiver_id : '',
      },
      token: localStorage.getItem('token'),
      agent: {}, 
      msgs : [],
      user : useAuthStore(),
      userId : '',
    };
  },
  async mounted() {
    const res = await this.user.fetchUser();
    this.userId = res.user.id;
    console.log(this.agent.id);
    // if(this.agent.id >=1){
          setInterval(()=>{
      this.allMessages(this.agent.id);
      // console.log("Ub Chala");
    },1000)
    // }
  },
  watch: {
    agentDetail: {
      immediate: true,
      handler(newVal) {
        this.agent = newVal;
        this.formData.receiver_id = this.agent.id;
      },
    },
    messages : {
      immediate: true,
      handler(newVal){
      this.msgs = newVal
      }
    }
  },
    methods : {
      async sendChat(){
        this.loader = true;
        // console.log(this.formData.receiver_id)
      try{
        const response = await axios.post(this.$baseURL+`theo/api/agent/messages/send`,this.formData, {
          headers: {
            'Accept': 'application/json',
            Authorization: `Bearer ${this.token}`,
          },
        })

        if(response.status == 200){
          console.log("Message Sent");
          this.formData.message = '';
          this.loader = false;
          setTimeout(() => {
            this.scrollToBottom();
          }, 100);
        }
        console.log(response);
      }catch(error){
        this.loader = false;
        console.log(error)
      }
    },
    scrollToBottom() {
      const el = this.$refs.scrollBox
      if (el) {
        el.scrollTop = el.scrollHeight
      }
    }
  }
};
</script>
