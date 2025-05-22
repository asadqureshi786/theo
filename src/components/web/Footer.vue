<template>
  <div class="footer">
    <div class="container">
      <div class="list">
        <a href="#home" class="logo">
          <img :src="logo" class="img-fluid" alt="" />
        </a>
        <div class="menu">
          <p class="text last-bottom">{{ $t('all_footer') }}</p>
        </div>

        <div class="d-flex align-items-center gap-3">
       
          <div class="follow_us pt-1">
            <p class="label">{{ $t('follow') }}</p>
            <div class="links">
              <a class="link"><i class="pi pi-instagram"></i></a>
              <a class="link"><i class="pi pi-facebook"></i></a>
            </div>
          </div>
        

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import logo from "@/assets/images/logo.png";


</script>

