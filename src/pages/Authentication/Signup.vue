<template>
  <div class="login_page auth_page">
    <div class="r_side">
      <div class="login_content">
        <img :src="logo" class="img-fluid logo_img" />
        <div class="content">
          <h2 class="hd">Create Account</h2>
          <p class="hd_text">Enter your email and password to signup.</p>
          <form>
            <div class="row formFileds">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Email</label>
                  <input type="text" v-model="form.name" class="form-control" />
                  <small v-if="errors.email" class="text-danger validate">{{
                    errors.name[0]
                  }}</small>
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    v-model="form.email"
                    class="form-control"
                  />
                  <small v-if="errors.email" class="text-danger validate">{{
                    errors.email[0]
                  }}</small>
                </div>
              </div>

              <div class="col-md-12">
                <div class="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    v-model="form.password"
                    class="form-control"
                  />
                  <small v-if="errors.password" class="text-danger validate">{{
                    errors.password[0]
                  }}</small>
                </div>
              </div>

              <div class="col-md-12">
                <div
                  class="form-group mb-0 transition"
                  :class="{ 'mb-4': errors.password_confirmation }"
                >
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    v-model="form.password_confirmation"
                    class="form-control"
                  />
                  <small
                    v-if="errors.password_confirmation"
                    class="text-danger validate"
                    >{{ errors.password_confirmation[0] }}</small
                  >
                </div>
              </div>

              <div class="col-md-12">
                <div class="form-group">
                  <label>Plans</label>
                  <select
                    name=""
                    class="form-control"
                    id=""
                    v-model="form.plan"
                  >
                    <option value="" disabled selected>Select a plan</option>
                    <option value="blue">THEO BLUE – €948</option>
                    <option value="gold">THEO GOLD – €1548</option>
                    <option value="black">THEO BLACK – €2388</option>
                  </select>
                  <small v-if="errors.email" class="text-danger validate">{{
                    errors.email[0]
                  }}</small>
                </div>
                <div class="from-group">
                  <div class="stripe_card">
                    <div id="card-element"></div>
                  <div v-if="error" class="text-danger validate">{{ error }}</div>
                  </div>
                </div>
              </div>

              <div class="col-md-12">
                
              </div>
            </div>

            <div class="d-flex justify-content-between align-items-center">
              <!-- length {{errors.length}} -->
              <div class="remember_me d-flex align-items-center gap-2">
                <label for="check1" class="table_check_list">
                  <input id="check1" type="checkbox" />
                  <div class="c_checkbox"><i class="pi pi-check"></i></div>
                </label>
                <span class="text f13 fw5">Remember me</span>
              </div>
              <a href="#" class="primaryCol f13 fw5 text-decoration-none"
                >Forgot your passowrd?</a
              >
            </div>
            <div class="d-flex gap-2 align-items-center">
                  <button
              type="button"
                @click="showDemo = true"
            
              class="btn btn-primary spinner mt-2 w-100"
            >
             Demo Request
            </button>
            <button
              type="button"
               @click="handleSubmit"
              class="btn btn-primary spinner mt-2 w-100"
            >
              <Spinner v-if="loading" /> Sign up
            </button>
            </div>
            <div
              class="dont_have_account d-flex justify-content-center gap-1 mt-4 align-content-center"
            >
              <p class="text f13 fw5">Already have an account?</p>
              <router-link to="login" href="#" class="text f13 fw5">
                Sign in
              </router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="l_side">
      <img :src="sideCover" class="img-fluid" />
    </div>
  </div>


  <Dialog
    v-model:visible="showDemo"
    maximizable
    modal
    header="Demo Request"
    :style="{ width: '40rem' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
  >
    <form @submit.prevent="addAgent"> 
      <!-- Corrected from 'from' to 'form' -->
      <div class="row formFileds">
        <div class="col-12">
          <div class="form-group">
            <label> Email</label>
            <input  type="email" v-model="demoEmail" class="form-control" />
              <!-- <small v-if="errors.name" class="text-danger validate">{{errors.name[0]}}</small> -->
            </div>
          </div>
  
      </div>
      <div class="flex justify-end gap-2 modal_footer">
        <button
          type="button"
          class="btn btn-secondary"
          label="Cancel"
          severity="secondary"
          @click="showDemo = false"
          >Cancel</button
        >
        <button
          type="submit"
          class="btn btn-primary spinner"
          label="Save"
          @click.prevent="demoReq"
          > <Spinner v-if="demoLoad"  /> Send</button
        >
      </div>
    </form>
  </Dialog>



</template>

<script>
// Images
import logo from "@/assets/images/logo.png";
import cover from "@/assets/images/login/login3.jpg";

// import Axios
import axios from "axios";

// import Toast
import { useToast } from "vue-toastification";

// Import Stripe
import { loadStripe } from "@stripe/stripe-js";

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
      loading: false,
      showDemo : true,
      demoEmail : '',
      form: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        plan: "",
        payment_method_id: "",
      },
      errors: {},
      // Stripe Return
      stripe: null,
      elements: null,
      card: null,
      error: "",
      demoLoad : false,
    };
  },

  async mounted() {
    this.stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
    this.elements = this.stripe.elements();
    this.card = this.elements.create("card");
    this.card.mount("#card-element");
  },

  methods: {
    async handleSubmit() {
      this.loading = true;
      this.error = null;
      if (!this.card || !this.stripe) {
        this.error = "Card input is not initialized. Please refresh the page.";
        this.loading = false;
        return;
      }
      const { paymentMethod, error: stripeError } =
        await this.stripe.createPaymentMethod({
          type: "card",
          card: this.card,

          billing_details: {
            name: this.form.name,
            email: this.form.email,
          },
        });
        
        if (stripeError) {
          this.loading = false;
        this.error = stripeError.message;
        return;
      }
      console.log("Payment Method Created:", paymentMethod);

      try {
        const response = await axios.post(this.$baseURL + "theo/api/register", {
          ...this.form,
          payment_method_id: paymentMethod.id,
        });
        console.log(this.form);
        toast.success("Signup complete! Welcome to the CRM.");
        if (response.status == 201) {
          setTimeout(() => {
            this.$router.push({ path: "/login" });
            this.loading = false;
            this.form.email = "";
            this.form.name = "";
            this.form.password = "";
            this.form.password_confirmation = "";
          }, 500);
          this.errors = {};
        }
      } catch (error) {
        this.loading = false;
        this.errors = error.response.data;    
      }
    },

    async demoReq(){
      this.demoLoad = true;
      console.log(this.$baseURL+"theo/api/demo-request",{email : this.demoEmail},{
        headers: {
              'Accept' : 'application/json',
            },
        });
      try {
        const response = await axios.post(this.$baseURL+"theo/api/demo-request",{email : this.demoEmail},{
             headers: {
              'Accept' : 'application/json',
            },
        })
        if(response.status == 200){
            toast.success(response.data.message);
            this.demoLoad = false;
            this.showDemo = false;
        }
        console.log(response)
      } catch (error) {
        
      }
    }
  },
};
</script>
