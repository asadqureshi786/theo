<template>
    <ul class="request_items">
        <li class="item" v-for="request in requestsList" :key="request.id">
          <div class="rside">
            <div class="img">
              <img :src="request.profile" alt="" />
            </div>
            <div class="detail">
              <div class="top">
                <div class="position">
                  <label for="">Position:</label>
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
              <div class="bottom">
                <label for="">Agent:</label>
                <p class="text">{{ request.agent }}</p>
              </div>
            </div>
          </div>
          <div class="lside">
            <p class="date">Posted: {{ request.date }}</p>
            <button class="btn btn-secondary">View</button>
          </div>
        </li>
      </ul>
</template>

<script>
    export default {
        name : 'Requests',
        props : {
            requestsList : Array,
        }
    }
</script>