<template>
  <div class="page_header">
    <h3 class="hd">Newsfeed</h3>
  </div>

  <div class="news_feeds mt-4">
    <div class="row">
      <div class="col-md-8">
        <div class="editor">
          <Editor v-model="editorValue" editorStyle="height: 220px" />
          <button
            @click.prevent="addNewsfeed"
            class="btn spinner btn-primary px-4"
          >
            <Spinner v-if="loading" /> Post
          </button>
        </div>
        <div class="feed_list">
          <ul>
            <li v-for="news in newsFeeds" :key="news.id">
              <div class="card mt-4">
                <div class="card-body">
                  <div class="top">
                    <div class="lside">
                      <img :src="player" class="profile img-fluid" />
                      <div>
                        <p class="black f14 fw5">Tom Lewis</p>
                        <div class="d-flex align-items-center gap-2">
                          <span class="formText fw3 f11">20 h</span>
                          <span class="dot"></span>
                          <i class="pi pi-globe"></i>
                        </div>
                      </div>
                    </div>
                    <div class="action" :style="{ height: '' }">
                      <SpeedDial
                        :model="getMenuItems(news)"
                        showIcon="pi pi-ellipsis-h"
                        :transitionDelay="80"
                        direction="left"
                        :style="{ left: 'calc(50% - 2rem)', bottom: 0 }"
                      />
                      <Toast />
                    </div>
                  </div>
                  <p class="desc" v-html="news.content"></p>

                  <!-- <img :src="cover" class="cover_img img-fluid" /> -->
                  <div class="social_icon">
                    <div class="icon">
                      <i class="pi pi-thumbs-up-fill"></i>
                    </div>
                    <p class="text">{{news.likes_count}}</p>
                    <div class="dot"></div>
                    <p class="text">4 Comments</p>
                  </div>

                  <div class="bottom_icon">
                    <div
                      class="action_social" :class="{'active' : news.is_liked == true}"
                      @click.prevent="postLiked(news.id)"
                    >
                      <span class="icon rotate"
                        ><i class="pi pi-thumbs-up"></i
                      ></span>
                      <span class="title">Like</span>
                    </div>
                    <div
                      class="action_social"
                      @click="showComment = !showComment"
                    >
                      <span class="icon"><i class="pi pi-comments"></i></span>
                      <span class="title">Comment</span>
                    </div>
                  </div>

                  <div
                    class="comment_box mt-3 position-relative"
                    v-if="showComment"
                  >
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Write a comment"
                      v-model="userInput.comment"
                      ref="commentInput"
                      @keydown.enter="addComment(news.id)"
                      :class="{ inputError: showError }"
                    />
                    <div class="send" @click="addComment(news.id)">
                      <i class="pi pi-send"></i>
                    </div>
                  </div>

                  
                  
                </div>
              </div>
              <Commentlist  :id="news.id" :count="news.comments_count"  :comments="news.comments" />
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <Sideplayers playerHeading="Recent Request" />
            <div class="mt-4"></div>
            <Newsfeed playerHeading="Legal Updates" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sideplayers from "@/components/Sideplayers.vue";
import Newsfeed from "@/components/Newsfeed.vue";
import Commentlist from "@/components/Commentlist.vue";
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

export default {
  name: "Newsfeeds",
  components: {
    Sideplayers,
    Newsfeed,
    Commentlist,
    Spinner,
  },
  data() {
    return {
      editorValue: "",
      player: player,
      cover: cover,
      like : false,
      showComment: false,
      loading: false,
      token: localStorage.getItem("token"),
      showError: false,
      newsFeeds: [],
      userInput: {
        comment : "",
      },
      comments: [],
    };
  },

  mounted() {
    this.fetchNewsFeed();
  },

  methods: {
    // Add Newsfeed JS Start
    async addNewsfeed() {
      this.loading = true;
      try {
        const response = await axios.post(
          this.$baseURL + "theo/api/admin/posts",
          { content: this.editorValue },
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          }
        );
        if (response.status === 201) {
          this.editorValue = "";
          this.loading = false;
          this.fetchNewsFeed();
          toast.success("Newsfeed added successfully!");
        } else {
          this.loading = false;
          toast.error("Failed to add newsfeed.");
        }
        console.log("Newsfeed added successfully:", response);
      } catch (error) {
        if (error.response.data.errors) {
          toast.error(error.response.data.errors.content[0]);
        }
        this.loading = false;
        console.error("Error adding newsfeed:", error);
      }
    },
    // Add Newsfeed JS End

    // Fetch Newsfeed JS Start
    async fetchNewsFeed() {
      try {
        const response = await axios.get(
          this.$baseURL + `theo/api/admin/posts`,
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          }
        );
        if (response.status == 200) {
          this.newsFeeds = response.data;
          this.comments = response.data;
          console.error(response.data);
        }
      } catch (error) {
        console.log(error.response);
      }
    },
    // Fetch Newsfeed JS End

    // Get Action Items
    getMenuItems(item) {
      return [
        {
          label: "Delete",
          icon: "pi pi-trash",
          command: () => this.deletePost(item.id), // Pass item ID
        },
      ];
    },

    // Delete Posts
    async deletePost(id) {
      try {
        const response = await axios.delete(
          this.$baseURL + `theo/api/admin/posts/${id}`,
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          }
        );
        if (response.status == 200) {
          this.fetchNewsFeed();
          toast.success("Post Deleted successfully");
        }
      } catch (error) {
        console.log(error.response);
      }
    },

    // Likes Count JS Start
    async postLiked(id) {
      try {
        const response = await axios.post(
          this.$baseURL + `theo/api/admin/posts/${id}/like`,
          {}, // empty body
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${this.token}`,
            },
          }
        );
        if(response.status == 200){
          console.error(response.data);
          this.fetchNewsFeed();
        }
      } catch (error) {}
    },
    // Likes Count JS End

  

    // Add Comment JS Start
    async addComment(id) {
      console.log(  this.$baseURL + `theo/api/admin/posts/${id}/comment`,this.userInput,{
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${this.token}`,
            },
          })
      try {
        const response = await axios.post(
          this.$baseURL + `theo/api/admin/posts/${id}/comment`,this.userInput,{
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${this.token}`,
            },
          }
        );
        console.log(response)
        if(response.status == 200){
          this.fetchNewsFeed();
          this.userInput.comment = "";
          toast.success("Comment added successfully!");
          this.fetchNewsFeed();
        } else {
          toast.error("Failed to add comment.");
        }
      } catch (error) {}
    },
    // Add Comment JS End

  },
};
</script>
