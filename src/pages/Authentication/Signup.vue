<template>
  <div class="login_page">
    <div class="r_side">
      <div class="login_content">
        <img :src="logo" class="img-fluid logo_img" />
        <div class="content">
          <h2 class="hd">Create Account</h2>
          <p class="hd_text">Enter your email and password to signup.</p>
          <form>
            <div class="row formFileds">
              <div class="col-md-12">
                <div class="form-group">
                  <label>Email</label>
                  <input type="email" v-model="form.email" class="form-control" />
                  <small v-if="errors.email" class="text-danger validate">{{ errors.email[0] }}</small>

                </div>
              </div>

              <div class="col-md-12">
                <div class="form-group">
                  <label>Password</label>
                  <input type="password" v-model="form.password" class="form-control" />
                  <small v-if="errors.password" class="text-danger validate">{{ errors.password[0] }}</small>

                </div>
              </div>
              
              <div class="col-md-12">
                <div class="form-group mb-0 transition" :class="{'mb-4' : errors.password_confirmation }" >
                  <label>Confirm Password</label>
                  <input type="password" v-model="form.password_confirmation" class="form-control" />
                  <small v-if="errors.password_confirmation" class="text-danger validate">{{ errors.password_confirmation[0] }}</small>

                </div>
              </div>
              
            </div>

            <div class="d-flex justify-content-between  align-items-center" >
              <!-- length {{errors.length}} -->
              <div class="remember_me d-flex align-items-center gap-2">
                <label for="check1" class="table_check_list">
                  <input id="check1" type="checkbox" />
                  <div class="c_checkbox"><i class="pi pi-check"></i></div>
                </label>
                <span class="text f13 fw5">Remember me</span>
              </div>
              <a href="#" class="primaryCol f13 fw5 text-decoration-none"
                >Forgot your passowrd?</a>
            </div>

            <button type="button" @click="handleSubmit" class="btn btn-primary spinner mt-2 w-100"> <Spinner v-if="loading" /> Sign up</button>

            <div
              class="dont_have_account  d-flex justify-content-center gap-1 mt-4 align-content-center"  >
              <p class="text f13 fw5">Already have an account?</p>
              <router-link to="login" href="#" class="text f13 fw5">  Sign in </router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="l_side">
      <img :src="sideCover" class="img-fluid" />
    </div>
  </div>
</template>

<script>
// Images
import logo from "@/assets/images/logo.png";
import cover from "@/assets/images/login/login3.jpg";


// import Axios
import axios from 'axios';

// import Toast
import { useToast } from "vue-toastification";
const toast = useToast();

import Spinner from "@/components/Spinner.vue";

export default {
  name: "Signup",
  components: {
    Spinner,
  },
  data() {
    return {
      logo: logo,
      sideCover: cover,
      loading : false,
      form: {
        email: "",
        password: "",
        password_confirmation: "",
      },
      errors: {},
    };
  },

  methods: {
   async handleSubmit() {
     this.loading = true;
     try {
       const response = await axios.post(this.$baseURL+'theo/public/api/register',this.form);
       this.users = response.data;
       if(response.status == 200){
    //  if (response.data.access_token) {
        // const decodedToken = jwtDecode(response.data.access_token);
    //     console.log(decodedToken)

    //     // const userRole = decodedToken.user_data.role;

    //  }
        sessionStorage.setItem('token', response.data.access_token);
        setTimeout(() => {
            this.$router.push({ path: '/admin' });
            this.loading = false;
            this.form.email = '';
            this.form.password = '';
            this.form.password_confirmation = '';
        }, 500);
         toast.success("Signup complete! Welcome to the CRM.");
        
          this.errors = {};
        } else {
          console.error('Error:', response.statusText);
          this.loading = false;
        };
        
      } catch (error) {
        this.loading = false;
        this.errors = error.response.data;
      }
    },
  },


};
</script>
