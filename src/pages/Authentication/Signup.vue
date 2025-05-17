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
                  <input type="text" class="form-control" />
                </div>
              </div>

              <div class="col-md-12">
                <div class="form-group">
                  <label>Password</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              
              <div class="col-md-12">
                <div class="form-group">
                  <label>Password</label>
                  <input type="text" class="form-control" />
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
                >Forgot your passowrd?</a>
            </div>

            <button class="btn btn-primary mt-2 w-100">Sign up</button>

            <div
              class="dont_have_account d-flex justify-content-center gap-1 mt-4 align-content-center">
              <p class="text f13 fw5">Already have an account?</p>
              <router-link to="login" href="#" class="text f13 fw5">Sign in </router-link>
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
import cover from "@/assets/images/login/login3.jpg";

export default {
  name: "Signup",
  data() {
    return {
      logo: logo,
      sideCover: cover,
    };
  },
};
</script>
