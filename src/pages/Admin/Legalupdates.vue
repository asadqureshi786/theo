<template>
  <div class="legal_update">
    <!-- Page Header Start -->
    <div class="page_header">
      <h3 class="hd">Legal Update</h3>
      <div class="r_side">
        <button class="btn btn-primary" @click="addUpdate = 'true'">
          <svg
            width="13"
            height="12"
            viewBox="0 0 13 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.08003 5.435C5.03003 5.43 4.97003 5.43 4.91503 5.435C3.72503 5.395 2.78003 4.42 2.78003 3.22C2.78003 1.995 3.77003 1 5.00003 1C6.22503 1 7.22003 1.995 7.22003 3.22C7.21503 4.42 6.27003 5.395 5.08003 5.435Z"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.70501 2C9.67501 2 10.455 2.785 10.455 3.75C10.455 4.695 9.70501 5.465 8.77001 5.5C8.73001 5.495 8.68501 5.495 8.64001 5.5"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.57999 7.28C1.36999 8.09 1.36999 9.41 2.57999 10.215C3.95499 11.135 6.20999 11.135 7.58499 10.215C8.79499 9.405 8.79499 8.085 7.58499 7.28C6.21499 6.365 3.95999 6.365 2.57999 7.28Z"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.67004 10C10.03 9.925 10.37 9.78 10.65 9.565C11.43 8.98 11.43 8.015 10.65 7.43C10.375 7.22 10.04 7.08 9.68504 7"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          Add Updates
        </button>
      </div>
    </div>
    <!-- Page Header End -->

 

    <!-- Main Section Start -->
    <div class="main_section">
      <div class="row">
        <div class="col-md-8">

        <div v-if="legalUpdate.length === 0"  class="fix_not_Found ">
         <i class="pi pi-exclamation-circle" ></i>No Record Found 
       </div>

          <div class="spinner_center"  v-if="spinner" >
           <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="4" fill="transparent" stroke="#000" />
         </div>
          <ul class="update_item">
            <li v-for="legal in legalUpdate" :key="legal.name">
              <div class="card">
                <div class="card-body">
                  <div class="updates">
                    <img :src="fLogo" alt="" class="sideLogo" />
                    <div>
                      <p class="light6 f18 fw5">{{ legal.title }}</p>
                      <p class="time silverCol f13">{{ legal.created_at_human }}</p>
                      <p class="desc f13 gtext pt-2">{{ legal.description }}</p>
                      <a
                        :href=" legal.url"
                        class="readMore my-2 primaryCol text-decoration-none d-flex align-items-center gap-2" target="_blank"
                      >
                        <span class="icon"
                          ><i class="pi pi-paperclip"></i
                        ></span>
                        Read Full Update
                      </a>

                      <img v-if="legal.image" :src="`${$baseURL}theo/public/uploads/images/${legal.image}`" alt="" class="cover img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <!-- <Sideplayers playerHeading="Recent Request" /> -->
              <div class="mt-4 d-none"></div>
              <Newsfeed :newsFeeds="newsFeeds" playerHeading="Newsfeed" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Main Section End -->
  </div>

  <!-- Add Update Modal Start -->
  <Dialog
    v-model:visible="addUpdate"
    maximizable
    modal
    header="Add Updates"
    :style="{ width: '40rem' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
  >
    <form @submit.prevent="addLegalUpdate">
      <div class="row formFileds">
        <div class="col-12">
          <div class="form-group">
            <label> Title</label>
            <input type="text" v-model="form.title" class="form-control" />
            <small v-if="errors.title" class="text-danger validate">{{
              errors.title[0]
            }}</small>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <label> URL</label>
            <input type="text" v-model="form.url" class="form-control" />
            <small v-if="errors.url" class="text-danger validate">{{
              errors.url[0]
            }}</small>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <label> Description</label>
            <input
              type="text"
              v-model="form.description"
              class="form-control"
            />
            <small v-if="errors.description" class="text-danger validate">{{
              errors.description[0]
            }}</small>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <label> Upload Images </label>
            <!-- <FilePond @select="onFileSelect" /> -->
            <FilePond
              name="image"
              ref="pond"
              label-idle="Drag & Drop your image or <span class='filepond--label-action'>Browse</span>"
              accepted-file-types="image/*"
              :allow-multiple="false"
              @updatefiles="handleFileUpdate"
            />
            <small v-if="errors.image" class="text-danger validate">{{
              errors.image[0]
            }}</small>
          </div>
        </div>
      </div>
      <div class="flex justify-end gap-2 modal_footer">
        <Button
          type="button"
          class="btn btn-secondary"
          label="Cancel"
          severity="secondary"
          @click="addUpdate = false"
          >Cancel</Button
        >
        <Button type="submit" class="btn spinner btn-primary" label="Save">
          <Spinner v-if="loading" /> Add
        </Button>
      </div>
    </form>
  </Dialog>
  <!-- Add Update Modal End -->
</template>

<script>
import Sideplayers from "@/components/Sideplayers.vue";
import Newsfeed from "@/components/Newsfeed.vue";

// Images
import fLogo from "@/assets/images/f_logo.png";
import cover from "@/assets/images/cover.jpg";

// import Axios
import axios from "axios";

// import Spinner
import Spinner from "@/components/Spinner.vue";

// Toast
import { useToast } from "vue-toastification";
const toast = useToast();

export default {
  name: "Legalupdates",
  components: {
    Sideplayers,
    Newsfeed,
    Spinner,
  },
  mounted() {
    this.fetchLegal();
  },
  data() {
    return {
      addUpdate: false,
      fLogo: fLogo,
      loading: false,
      errors: {},
      legalUpdate: [],
      newsFeeds: [],
      token: localStorage.getItem("token"),
      selectedFile: null,
      spinner : true,
      form: {
        title: "",
        description: "",
        url: "",
      },
    };
  },
  methods: {
    // Get Form Image
    handleFileUpdate(fileItems) {
      this.selectedFile = fileItems[0]?.file || null;
    },
    //Add Legal Updates Function Start
    async addLegalUpdate() {
      this.loading = true;
      const formData = new FormData();
      formData.append("title", this.form.title);
      formData.append("description", this.form.description);
      formData.append("url", this.form.url);
      if (this.selectedFile == null) {
        formData.append("", "");
      } else {
        formData.append("image", this.selectedFile);
      }
      
      console.log(
          this.$baseURL + "theo/api/admin/legal-updates/save",
          formData,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${this.token}`,
            },
          })
      
      try {
        const response = await axios.post(
          this.$baseURL + "theo/api/admin/legal-updates/save",
          formData,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${this.token}`,
            },
          }
        );
        if (response.status === 201) {
          this.loading = false;
          toast.success("Legal update added successfully!");
          this.fetchLegal();
          this.addUpdate = false,
            this.form = {
              title: "",
              url: "",
              description: "",
            };
        }
        console.log(response);
      } catch (error) {
        this.loading = false;
        this.errors = error.response.data.errors;
        console.error(error.response.data);
      }
    },
    //Add Legal Updates Function Start

    async fetchLegal() {
      try {
        this.spinner = true;
        const response = await axios.get(
          this.$baseURL + "theo/api/admin/legal-updates",
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${this.token}`,
            },
          }
        );
        if(response.status == 200){
          // this.legalUpdate = response.data;
               this.legalUpdate = response.data.legalUpdates;
        this.newsFeeds = response.data.newsFeeds;
          this.spinner = false;
        }

      } catch (error) {
        console.error("Error fetching legal updates:", error);
      }
    },
  },
};
</script>
