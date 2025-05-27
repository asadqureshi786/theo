<template>
  <div class="login_page auth_page">
    <div class="r_side">
      <div class="login_content">
        <img :src="logo" class="img-fluid logo_img" />
        <div class="content">
          <h2 class="hd">Welcome Back !</h2>
          <p class="hd_text">
            Enter to get unlimited access to data & information.
          </p>

          <form>
            <div class="row formFileds">
              <div class="col-md-12">
                <div class="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    v-model="form.email"
                    class="form-control"
                  />
                  <small v-if="errors.email" class="text-danger validate">{{
                    errors.email
                  }}</small>
                </div>
              </div>

              <div class="col-md-12">
                <div
                  class="form-group transition"
                  :class="{ 'mb-4': errors.password }"
                >
                  <label>Password</label>
                  <input
                    type="password"
                    v-model="form.password"
                    class="form-control"
                  />
                  <small v-if="errors.password" class="text-danger validate">{{
                    errors.password
                  }}</small>
                </div>
              </div>
            </div>

            <div class="d-flex justify-content-between align-items-center">
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

            <button
              type="button"
              @click="handleSubmit"
              to="admin/dashboard"
              class="btn btn-primary spinner mt-2 w-100"
            ><Spinner v-if="loading" />
              Log in
            </button>

            <div
              class="dont_have_account d-flex justify-content-center gap-1 mt-4 align-content-center"
            >
              <p class="text f13 fw5">Dont' have an account?</p>
              <router-link to="signup" href="#" class="text f13 fw5"
                >Register here
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
</template>

<script>
import logo from "@/assets/images/logo.png";
import cover from "@/assets/images/login/login1.jpg";

// import Axios
import axios from "axios";

// import Toast
import { useToast } from "vue-toastification";
const toast = useToast();

import Spinner from "@/components/Spinner.vue";

export default {
  name: "Login",
  components: {
    Spinner,
  },
  data() {
    return {
      logo: logo,
      sideCover: cover,
      loading: false,
      form: {
        email: "",
        password: "",
      },
      errors: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
async handleSubmit() {
  console.log(this.$baseURL + "theo/public/api/login");
  console.log(this.form);

  this.loading = true;
  this.errors = {}; // clear errors before validation

  // Validation
  if (this.form.email.length === 0 && this.form.password.length === 0) {
    this.errors.email = "The email field is required.";
    this.errors.password = "The password field is required.";
    this.loading = false;
    return; // stop execution
  } else if (this.form.email.length === 0) {
    this.errors.email = "The email field is required.";
    this.errors.password = "";
    this.loading = false;
    return;
  } else if (this.form.password.length === 0) {
    this.errors.password = "The password field is required.";
    this.errors.email = "";
    this.loading = false;
    return;
  }

  // If validation passed
  this.errors.email = "";
  this.errors.password = "";

  try {
    
    axios.defaults.withCredentials = true;
    await axios.get(this.$baseURL+'theo/public/sanctum/csrf-cookie');

    const response = await axios.post(
      this.$baseURL + "theo/public/api/login",
      this.form
    );

    this.users = response.data;

    if (response.status === 200 && response.data.access_token) {
      sessionStorage.setItem("token", response.data.access_token);
      console.log(response.data.access_token);

      toast.success("Login complete! Welcome to the CRM.");

      setTimeout(() => {
        this.$router.push({ path: "/admin/dashboard" });
        this.loading = false;

        // Clear form fields
        this.form.email = "";
        this.form.password = "";
        this.form.password_confirmation = "";
      }, 500);

      this.errors = {};
    } else {
      console.error("Error:", response.statusText || "Login failed");
      this.loading = false;
    }
  } catch (error) {
    this.loading = false;

    // Defensive check if error.response exists
    if (error.response && error.response.data && error.response.data.message) {
      toast.error(error.response.data.message);
    } else {
      toast.error("An unexpected error occurred");
    }

    // Optionally set this.errors from backend errors here
    // this.errors = error.response?.data?.errors || {};
  }
}

  },
};
</script>
