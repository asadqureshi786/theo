<template>
  <div class="website" id="home">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-md-11">
          <Header :handleInteraction="handleInteraction" />
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-md-11">
          <Banner />
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-md-9">
          <img
            class="img-fluid"
            data-aos="fade-up"
            data-aos-duration="2000"
            :src="french == true ? frenchImg : BannerImg"
            alt=""
          />
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row justify-content-center d-none">
        <div class="col-md-10">
          <div class="trusted_section">
            <div class="content">
              <h1 class="headings mb-3">
                Trusted by Football Professionals Worldwide
              </h1>
              <p class="text">
                We are committed to continually enhancing our services to exceed
                your expectations and ensure your satisfaction
              </p>
            </div>
            <ul class="counters">
              <li>
                <p class="count">500+</p>
                <p class="labe">Connected Clubs</p>
              </li>
              <li>
                <p class="count">600+</p>
                <p class="labe">Registered Agencies</p>
              </li>
              <li>
                <p class="count">10k</p>
                <p class="labe">Deals Tracked</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Why Agents Section Start -->
      <div class="why_agents d-none" id="Why">
        <div class="row">
          <div class="col-md-12">
            <div class="headings">Why Agents Choose THEO?</div>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-md-6">
            <div class="content">
              <ul>
                <li>
                  <p class="heading">Built for Real Football Scenarios</p>
                  <p class="text">
                    We understand the football industry isn’t always formal.
                    Whether you're reaching out to a club contact, THEO adapts
                    the workflow.
                  </p>
                </li>
                <li>
                  <p class="heading">Make Smarter Moves</p>
                  <p class="text">
                    Use integrated scouting tools, track player stats, and get
                    contract alerts so you never miss a window.
                  </p>
                </li>
                <li>
                  <p class="heading">Collaborate & Expand Your Network</p>
                  <p class="text">
                    Invite trusted agents, form private circles, share
                    opportunities — or keep things private to your agency.
                  </p>
                </li>
                <li>
                  <p class="heading">Stay Compliant & Informed</p>
                  <p class="text">
                    Access legal updates, submit contracts for validation, and
                    stay ahead of FIFA changes with THEO’s Regulatory Hub.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-6">
            <img :src="sideImage1" class="img-fluid" alt="" />
          </div>
        </div>
      </div>
      <!-- Why Agents Section End -->
    </div>

    <!-- Plans Coming Soon Section Start -->
    <Plans />
    <!-- Plans Coming Soon Section End -->

    <div class="start_managing">
      <div class="container">
        <h1 class="hd" data-aos="fade-up" data-aos-duration="1500">
          {{ $t("s3_m_hd") }}
        </h1>
        <div class="content">
          <p class="text" data-aos="fade-up" data-aos-duration="1700">
            {{ $t("s3_text1") }}
          </p>
          <p class="text" data-aos="fade-up" data-aos-duration="1900">
            {{ $t("s3_text2") }}
          </p>
        </div>
        <div class="row justify-content-center ">
          <div class="col-md-4">
            <form @submit.prevent="sendEmail" class="coming_notify " data-aos="fade-up" data-aos-duration="2100">
              <input type="email" :placeholder="$t('email')" class="form-control" v-model="email"/>
              <button class="btn btn-white":disabled="loading" >
                    <div v-if="loading" class="spinner-border" :disabled="loading" role="status"> <span class="visually-hidden">Loading...</span></div>
                        {{ $t('notify_me') }}
            </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="contact_us d-none" id="contact">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="lside">
              <div>
                <div class="top">
                  <img :src="Star" class="img-fluid" alt="" />
                  <p class="sm_hd">GET IN TOUCH</p>
                </div>
                <h1 class="py-3">Tell Us How We Can helps</h1>
                <p class="text gray">
                  Have questions about THEO, need support, or want to explore
                  partnership opportunities? We’re here to help.
                </p>
              </div>
              <div class="social_address">
                <div class="links">
                  <div class="cricle">
                    <i class="pi pi-phone"></i>
                  </div>
                  <div>
                    <div class="label">Phone Number</div>
                    <div class="text">+187 654 3210</div>
                  </div>
                </div>
                <div class="links my-4">
                  <div class="cricle">
                    <i class="pi pi-clock"></i>
                  </div>
                  <div>
                    <div class="label">Phone Number</div>
                    <div class="text">Mon-Fri, 07.00-16.00</div>
                  </div>
                </div>
                <div class="links">
                  <div class="cricle">
                    <i class="pi pi-map-marker"></i>
                  </div>
                  <div>
                    <div class="label">Phone Number</div>
                    <div class="text">
                      123 Avenue du Football, Paris, France
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="rside">
              <div class="contact_form">
                <h2>Reach Out Directly</h2>
                <form action="">
                  <div class="from-group">
                    <label for=""> Name </label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div class="from-group">
                    <label for="">
                      {{ $t("email") }}
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="example@gmail.com"
                    />
                  </div>
                  <div class="from-group">
                    <label for=""> Message </label>
                    <textarea
                      name=""
                      class="form-control"
                      placeholder="Message"
                      rows="4"
                      id=""
                    ></textarea>
                  </div>
                </form>
                <div class="submit_Button d-flex justify-content-end">
                  <button class="btn btn-primary">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/web/Header.vue";
import Banner from "@/components/web/Banner.vue";
import Footer from "@/components/web/Footer.vue";
import Plans from "@/components/web/Plans.vue";

// Images
import BannerImg from "@/assets/images/web/banner.png";
import frenchImg from "@/assets/images/web/french.png";
import sideImage1 from "@/assets/images/web/sideImage1.png";
import Star from "@/assets/images/web/star.png";

import { useToast } from "vue-toastification";
const toast = useToast();


// import Axios
import axios from 'axios';

export default {
  name: "Home",
  components: {
    Header,
    Banner,
    Plans,
    Footer,
  },
  data() {
    return {
      BannerImg: BannerImg,
      french: false,
      frenchImg: frenchImg,
      sideImage1: sideImage1,
      Star: Star,
      loading: false,
      visible: false,
      language: "",
      email : '',
    };
  },

  mounted() {
    document.addEventListener("click", this.handleInteraction);
  },

  methods: {
    handleInteraction() {
      this.language = localStorage.getItem("lang");
      if (this.language == "fr") {
        this.french = true;
      } else {
        this.french = false;
      }
    },

    // Send Email Function Start
    async sendEmail() {
      this.loading = true;
      try {
        if (this.email.length == 0) {
          this.loading = false;
          toast.error("Please Enter Your Email");
          return;
        }
        const response = await axios.post(
          `https://jetnetixsolutions.com/Backend/theo-email/email.php?to=${this.email}`
        );
        this.users = response.data;

        if (response.status == 200) {
          this.loading = false;
          toast.success("Email Send Successfully!");
          this.email = "";
        } else {
          this.loading = false;
          toast.error("Email Not Send");
        }

      } catch (error) {
        toast.error("Error fetching users:", error);
        this.loading = false;
        // console.error('Error fetching users:', error);
      }
    },
    // Send Email Function End
  },
};
</script>



