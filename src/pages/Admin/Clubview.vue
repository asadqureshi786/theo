<template>
  <div class="club_view">
    <!-- Page Header Section Start -->
    <div class="page_header">
      <div class="heading_icon">
        <div id="goBack" @click="goback" class="cursor-pointer">
          <i class="pi pi-chevron-left"></i>
        </div>
        <h3 class="hd">Club View</h3>
      </div>
      <button class="btn btn-primary">
        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.08003 5.435C5.03003 5.43 4.97003 5.43 4.91503 5.435C3.72503 5.395 2.78003 4.42 2.78003 3.22C2.78003 1.995 3.77003 1 5.00003 1C6.22503 1 7.22003 1.995 7.22003 3.22C7.21503 4.42 6.27003 5.395 5.08003 5.435Z"
            stroke="white" stroke-linecap="round" stroke-linejoin="round" />
          <path
            d="M8.70501 2C9.67501 2 10.455 2.785 10.455 3.75C10.455 4.695 9.70501 5.465 8.77001 5.5C8.73001 5.495 8.68501 5.495 8.64001 5.5"
            stroke="white" stroke-linecap="round" stroke-linejoin="round" />
          <path
            d="M2.57999 7.28C1.36999 8.09 1.36999 9.41 2.57999 10.215C3.95499 11.135 6.20999 11.135 7.58499 10.215C8.79499 9.405 8.79499 8.085 7.58499 7.28C6.21499 6.365 3.95999 6.365 2.57999 7.28Z"
            stroke="white" stroke-linecap="round" stroke-linejoin="round" />
          <path
            d="M9.67004 10C10.03 9.925 10.37 9.78 10.65 9.565C11.43 8.98 11.43 8.015 10.65 7.43C10.375 7.22 10.04 7.08 9.68504 7"
            stroke="white" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

        Add Contact</button>
    </div>
    <!-- Page Header Section End -->

    <div class="info">
      <div class="row justify-content-center">
        <div class="col-md-4">
          <div class="text-center">
            <img :src="clubImg" alt="">
            <h4 class="light6 fw6" >Manchester City</h4>
            <div class="total_player mt-2 text-center" >
              <p class="light4 f13" >Total Players:</p>
              <div class="primaryLight1 f13 count" >28</div>
            </div>
            <p class="light4 fw5 mt-1 f13" >Current transfer record: <span class="fw4" >€102.30m</span></p>
          </div>
        </div>
      </div>
    </div>

    <!-- Contacts Section Start -->
    <div class="contact_lis">
      <Contactcard/>
    </div>
    <!-- Contacts Section End -->


    <!-- Documents Section Start -->
      <div class="light_head mt-5">Documents</div>
      <Documents class="" />
    <!-- Documents Section Start -->

  </div>
</template>

<script>
// Components
import Documents from "@/components/Documents.vue"
import Contactcard from "@/components/Contactcard.vue"

// Images
import clubimg from "@/assets/images/clubimg.png"

export default {
  name: 'Clubview',
  components : {
    Documents,
    Contactcard,
  },
  data(){
    return{
      clubImg : clubimg,
    }
  },
  methods: {
    goback() {
      window.history.back();
    },
  },
}
</script>