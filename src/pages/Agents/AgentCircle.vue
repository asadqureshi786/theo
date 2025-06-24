<template>
  <div class="page_header">
    <h3 class="hd">Agent Circle</h3>
  </div>

  <div class="news_feeds mt-4">
    <div class="row">
      <div class="col-md-8">
       <Requests/>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <MyCircle playerHeading="My Circle" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sideplayers from "@/components/agents/Sideplayers.vue";
import MyCircle from "@/components/agents/MyCircle.vue";

// Images
import player from "@/assets/images/player2.png";
import cover from "@/assets/images/cover.jpg";

// Toast
import { useToast } from "vue-toastification";
const toast = useToast();

// Spinner
import Spinner from "@/components/Spinner.vue";

// import Axios
import axios from "axios";

import Requests from "@/components/agents/Requests.vue";

export default {
  name: "Newsfeeds",
  components: {
    Sideplayers,
    MyCircle,
    Spinner,
    Requests,
  },
  data() {
    return {
      editorValue: "",
      player: player,
      cover: cover,
      token: localStorage.getItem("token"),
    };
  },



};
</script>
