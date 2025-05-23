<template>
  <div class="banner" data-aos="fade-up" data-aos-duration="1000" >
    <h1 class="hd"> {{ $t('s1_m_hd')}}</h1>
    <div class="content">
      <p class="text">{{ $t('s1_text1') }}</p>
    </div>

    <div class="row justify-content-center">
      <div class="col-md-4">
        <form @submit.prevent="sendEmail">
          <div class="getNotiy">
            <div class="from-group">
              <input
                type="email"
                v-model="email"
                class="form-control"
               :placeholder="$t('email')"
              />
            </div>
            <button class="btn btn-primary":disabled="loading" >
                <div v-if="loading" class="spinner-border" :disabled="loading" role="status"> <span class="visually-hidden">Loading...</span></div>
                    {{ $t('get_notified') }}
            </button>
          </div>
        </form>
      </div>
      <div class="content mt-4" >
          <div class="row">
            <div class="col-md-12">
              <p class="text">{{ $t('s1_text2') }}</p>
              <p class="text">{{ $t('s1_text3') }}</p>

            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
// Email import Link
import * as emailjs from "emailjs-com";
import { useToast } from "vue-toastification";
const toast = useToast();


// import Axios
import axios from 'axios';

export default {
  name: "Banner",
  data() {
    return {
      name: "",
      email: "",
      message: "None 3",
      loading: false,
      // to : this.email,
    };
  },
  methods: {
    async sendEmail() {
      this.loading = true;
      console.log(`https://jetnetixsolutions.com/Backend/theo-email/email.php?to=${this.email}`);
      try {

            if(this.email.length == 0 ){
              this.loading = false;
              toast.error("Please Enter Your Email");
              return;
            }
            const response = await axios.post(`https://jetnetixsolutions.com/Backend/theo-email/email.php?to=${this.email}`);
            this.users = response.data;

            if(response.status == 200){
              this.loading = false;
              toast.success("Email Send Successfully!");
              this.email = "";
            }
            else{
              this.loading = false;
              toast.error("Email Not Send");
            }
            
            console.log('Response:', response);
            
          } catch (error) {
            toast.error('Error fetching users:', error);
            this.loading = false;
            // console.error('Error fetching users:', error);
          }






      // Email JS Code
      // this.loading = true;
      
      // const templateParams = {
      //     name: this.name,
      //     email: this.email,
      //     message: this.message,
      //   };
        
      //   if(this.email.length == 0 ){
      //       this.loading = false;
      //       toast.error("Please Enter Your Email");

      //   }
      //   else{
      //       emailjs.send(
      //     "service_pmaeb0q",
      //     "template_hsxznyb",
      //     templateParams,
      //     "s-ZJd5J4cI6c3MEDY"
      //   )
      //   .then((response) => {
      //     console.log("SUCCESS!", response.status, response.text);
      //     this.email = "";
      //     this.loading = false;
      //     toast.success("Email Send Successfully!");
      //   })
      //   .catch((error) => {
      //     console.error("FAILED...", error);
      //     this.loading = false;
      //     // this.$toast.error('Failed to send email.');        // ✅ Should now work
      //   });
      //   }
    },
  },
};
</script>


