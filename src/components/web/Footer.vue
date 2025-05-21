<template>
  <div class="footer">
    <div class="container">
      <div class="list">
        <a href="#home" class="logo">
          <img :src="logo" class="img-fluid" alt="" />
        </a>
        <div class="menu">
          <p class="text last-bottom">2025 © THEO All rights reserved.</p>
        </div>
       <div class="d-flex align-items-center gap-3">
         <div class="language">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.959 1C13.4603 3.73835 14.8817 7.29203 14.959 11C14.8817 14.708 13.4603 18.2616 10.959 21M10.959 1C8.4577 3.73835 7.03623 7.29203 6.95898 11C7.03623 14.708 8.4577 18.2616 10.959 21M10.959 1C5.43614 1 0.958984 5.47715 0.958984 11C0.958984 16.5228 5.43614 21 10.959 21M10.959 1C16.4818 1 20.959 5.47715 20.959 11C20.959 16.5228 16.4818 21 10.959 21M1.459 8H20.459M1.45898 14H20.459"
              stroke="#1E1E1E"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div class="text">
            EN <span class="icon"><i class="pi pi-angle-down"></i></span>
          </div>
        </div>
        <div class="follow_us">
          <p class="label">Follow Us:</p>
          <div class="links">
            <a class="link">
              <i class="pi pi-instagram"></i>
            </a>
            <a class="link">
              <i class="pi pi-facebook"></i>
            </a>
          </div>
        </div>
       </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "@/assets/images/logo.png";

export default {
  name: "Footer",
  data() {
    return {
      logo: logo,
    };
  },
};
</script>
