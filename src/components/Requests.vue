<template>
    <ul class="request_items">
        <li class="item" v-for="request in requestsList" :key="request.id">
          <div class="rside">
            <input v-if="requestOthers" class="req_checkbox" type="checkbox" />
            <div class="img">
              <img :src="request.profile" alt="" />
            </div>
            <div class="detail">
              <div class="top">
                <div class="position">
                  <label  for="">Position:</label>
                  <p class="text">{{ request.position }}</p>
                </div>
                <div class="league">
                  <label for="">League:</label>
                  <p class="text">{{ request.league }}</p>
                </div>
                <div class="position">
                  <label for="">Club:</label>
                  <p class="text">{{ request.club }}</p>
                </div>
              </div>
              <div class="bottom d-flex gap-3">
                <div class="d-flex align-items-center gap-1" >
                  <label for="">Agent:</label>
                  <p class="text">{{ request.agent }}</p>
                </div>
                <div class="player_proposed" v-if="requestOthers" >
                  <div class="img">
                    <img v-for="(smImg, index) in proposedImages" key="index" :src="smImg" :class="'img' + index" alt="">
                  </div>
                  <p class="text">+3 players Proposed</p>
                </div>
              </div>
            </div>
          </div>
          <div class="lside">
            <p class="date">Posted: {{ request.date }}</p>
            <div class="d-flex gap-2">
              <button class="btn btn-secondary">Unsaved </button>
              <button class="btn btn-primary">View</button>
            </div>
          </div>
        </li>
      </ul>
</template>

<script>


    export default {
        name : 'Requests',
        props : {
            requestsList : Array,
            requestOthers : Boolean,
            proposedImages : Array,
          
        }
    }
</script>