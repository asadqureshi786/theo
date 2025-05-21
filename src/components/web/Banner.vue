<template>
  <div class="banner" data-aos="fade-up" data-aos-duration="1000" >
    <h1 class="hd"> {{ $t('s1_m_hd')}}</h1>
    <div class="content">
      <p class="text">{{ $t('s1_text1') }}</p>
      <p class="text">
        {{ $t('s1_text2') }}
      </p>
    </div>
    <!-- <button class="btn btn-simple" >Get Started</button> -->

    <div class="row justify-content-center">
      <div class="col-md-4">
        <form @submit.prevent="sendEmail">
          <div class="getNotiy">
            <div class="from-group">
              <!-- <label for="">Email</label> -->

              <input
                type="email"
                v-model="email"
                class="form-control"
               :placeholder="$t('email')"
              />
            </div>
            <button class="btn btn-primary">
                <div v-if="loading" class="spinner-border" role="status"> <span class="visually-hidden">Loading...</span></div>
                    {{ $t('get_notified') }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// Email import Link
import * as emailjs from "emailjs-com";
import { useToast } from "vue-toastification";
const toast = useToast();

export default {
  name: "Banner",
  data() {
    return {
      name: "",
      email: "",
      message: "None 3",
      loading: false,
    };
  },
  methods: {
    sendEmail() {
      this.loading = true;
      
      const templateParams = {
          name: this.name,
          email: this.email,
          message: this.message,
        };
        
        if(this.email.length == 0 ){
            this.loading = false;
            toast.error("Please Enter Your Email");

        }
        else{
            emailjs.send(
          "service_pmaeb0q",
          "template_hsxznyb",
          templateParams,
          "s-ZJd5J4cI6c3MEDY"
        )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          this.email = "";
          this.loading = false;
          toast.success("Email Send Successfully!");
        })
        .catch((error) => {
          console.error("FAILED...", error);
          this.loading = false;
          // this.$toast.error('Failed to send email.');        // ✅ Should now work
        });
        }



    },
  },
};
</script>

<!-- 
    <div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
        <div>A message by {{name}} has been received. Kindly respond at your earliest convenience.</div>
        <div
        style="
            margin-top: 20px;
            padding: 15px 0;
            border-width: 1px 0;
            border-style: dashed;
            border-color: lightgrey;
        "
        >
        <table role="presentation">
            <tr>
            <td style="vertical-align: top">
                <div
                style="
                    padding: 6px 10px;
                    margin: 0 10px;
                    background-color: aliceblue;
                    border-radius: 5px;
                    font-size: 26px;
                "
                role="img"
                >
                &#x1F464;
                </div>
            </td>
            <td style="vertical-align: top">
                <div style="color: #2c3e50; font-size: 16px">
                <strong>{{name}}</strong>
                </div>
                <div style="color: #cccccc; font-size: 13px">{{time}}</div>
                <p style="font-size: 16px">{{email}}</p>
                <p style="font-size: 16px">{{message}}</p>
            </td>
            </tr>
        </table>
        </div>
    </div> -->
