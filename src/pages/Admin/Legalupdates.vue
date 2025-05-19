<template>
    <div class="legal_update">
        <!-- Page Header Start -->
        <div class="page_header">
            <h3 class="hd">Legal Update</h3>
            <div class="r_side">
                <button class="btn btn-primary" @click="addUpdate = 'true'">
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

                    Add Updates
                </button>
            </div>
        </div>
        <!-- Page Header End -->


        <!-- Main Section Start -->
        <div class="main_section">
            <div class="row">
                <div class="col-md-8">
                    <ul class="update_item">
                        <li v-for="legal in legalUpdate" :key="legal.name">
                            <div class="card">
                                <div class="card-body">
                                    <div class="updates">
                                        <img :src="fLogo" alt="" class="sideLogo">
                                        <div>
                                            <p class="light6 f18 fw5">{{ legal.heading }}</p>
                                            <p class="time silverCol  f13">{{ legal.time }}</p>
                                            <p class="desc f13 gtext pt-2">{{ legal.desc }}</p>
                                            <a href="#"
                                                class="readMore my-2 primaryCol text-decoration-none d-flex align-items-center gap-2">
                                                <span class="icon"><i class="pi pi-paperclip"></i></span>
                                                Read Full Update
                                            </a>
                                            <img :src="legal.img" alt="" class="cover img-fluid">
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
                            <Sideplayers playerHeading="Recent Request" />
                            <div class="mt-4"></div>
                            <Newsfeed playerHeading="Newsfeed" />
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
        <from>
          <div class="row formFileds">
            <div class="col-12">
              <div class="form-group">
                <label> Title</label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <label> URL</label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <label> Description</label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-12 ">
              <div class="form-group">
                <label>
                  Upload Images
                </label>
                <FilePond />
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
            <Button
              type="button"
              class="btn btn-primary"
              label="Save"
              @click="addUpdate = false"
              >Add</Button
            >
          </div>
        </from>
      </Dialog>
    <!-- Add Update Modal End -->


</template>

<script>
import Sideplayers from "@/components/Sideplayers.vue";
import Newsfeed from "@/components/Newsfeed.vue";

// Images
import fLogo from "@/assets/images/f_logo.png"
import cover from "@/assets/images/cover.jpg"
export default {
    name: "Legalupdates",
    components: {
        Sideplayers,
        Newsfeed,
    },
    data() {
        return {
            addUpdate : false,
            fLogo: fLogo,
            legalUpdate: [
                {
                    heading: 'French Football Federation (FFF) - Changes to Youth Transfers',
                    time: '20 h',
                    desc: 'The FFF has revised its policies regarding the transfer of players under 18 years old. Clubs and agents are now required to submit additional documentation verifying educational support programs for minors.',
                    img: cover,
                },
                {
                    heading: 'French Football Federation (FFF) - Changes to Youth Transfers',
                    time: '20 h',
                    desc: 'The FFF has revised its policies regarding the transfer of players under 18 years old. Clubs and agents are now required to submit additional documentation verifying educational support programs for minors.',
                    img: cover,
                },
                {
                    heading: 'French Football Federation (FFF) - Changes to Youth Transfers',
                    time: '20 h',
                    desc: 'The FFF has revised its policies regarding the transfer of players under 18 years old. Clubs and agents are now required to submit additional documentation verifying educational support programs for minors.',
                    img: cover,
                }
            ]
        }
    }
};
</script>
