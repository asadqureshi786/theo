<template>
    <ul class="request_items">
      {{ requestsLists}}
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
                
                
                <Playerproposed v-if="requestOthers" :proposedImages="proposedImages"   />
                
              </div>
            </div>
          </div>
          <div class="lside d-flex align-items-start gap-2">
            <div>
              <p class="date">Posted: {{ request.date }}  </p>
            <div  :class="{ 'd-flex gap-2': requestOthers }">
              <button v-if="requestOthers" class="btn btn-secondary">Unsaved </button>
              <router-link to="job-view" class="btn btn-primary">View</router-link>
            </div>
            </div>
            <div class="action">
              <i v-if="requestOthers" class="pi pi-ellipsis-v" ></i>
            </div>
          </div>
        </li>
      </ul>
</template>

<script>
import Playerproposed from "@/components/Playerproposed.vue"

    export default {
        name : 'Requests',
        components : {
          Playerproposed,
        },
        props : {
            requestsList : Array,
            requestOthers : Boolean,
            proposedImages : Array,
          
        }
    }
</script>