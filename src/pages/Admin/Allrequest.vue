<template>
  <div>
    <!-- PAGE HEADER WITH TABS -->
    <div class="page_header">
      <h3 class="hd">Requests</h3>
      <div class="r_side">
        <!-- Tab Headers -->
        <div class="tabs_header_cs">
          <button
            v-for="(tab, index) in tabs"
            :key="index"
            @click="activeTab = index"
            :class="{ active: activeTab === index }"
          >
            {{ tab }}
          </button>
        </div>

        <!-- Add Button -->
        <!-- <button class="btn btn-primary" @click="addRequest = true">
          Add Request
        </button> -->
      </div>
    </div>

    <!-- SEPARATE TAB CONTENT SECTION -->
    <div class="tab-content mt-4">
      <div v-if="activeTab === 0">
        <Requests
          :proposedImages="proposedImages"
          :requestOthers="requestOthers"
          :requestsList="requestsList"
        />
      </div>
      <div v-if="activeTab === 1">
        <p>Header II content: Sed ut perspiciatis unde omnis...</p>
      </div>
      <div v-if="activeTab === 2">
        <p>Header III content: At vero eos et accusamus...</p>
      </div>
    </div>
  </div>

  <!-- Add Request Modal Section Start -->
  <Dialog
    v-model:visible="addRequest"
    maximizable
    modal
    header="Add Request"
    :style="{ width: '40rem' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
  >
    <form>
      <!-- Corrected from 'from' to 'form' -->
      <div class="row formFileds">
        <div class="col-12">
          <div class="form-group">
            <label> Job Title</label>
            <input type="text" class="form-control" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label> Country</label>
            <!-- <input type="text" class="form-control" /> -->
            <div class="d_select">
              <Select
                v-model="selectedCountry"
                editable
                :options="countries"
                optionLabel="name"
                placeholder="Select a City"
                class="w-full"
              />
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label> League</label>
            <input type="text" class="form-control" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label> Club</label>
            <input type="text" class="form-control" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label> Main Position</label>
            <input type="text" class="form-control" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label> Other Position</label>
            <input type="text" class="form-control" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label> Age Reference</label>
            <input type="text" class="form-control" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label> Name</label>
            <input type="text" class="form-control" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label> Email</label>
            <input type="email" class="form-control" />
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label> Additional Information</label>
            <textarea type="email" class="form-control"></textarea>
          </div>
        </div>
      </div>
      <div class="flex justify-end gap-2 modal_footer">
        <Button
          type="button"
          class="btn btn-secondary"
          label="Cancel"
          severity="secondary"
          @click="addRequest = false"
          >Cancel</Button
        >
        <Button
          type="button"
          class="btn btn-primary"
          label="Save"
          @click="addRequest = false"
          >Add</Button
        >
      </div>
    </form>
  </Dialog>
  <!-- Add Request Modal Section End -->
</template>

<script>
// Components
import Requests from "@/components/Requests.vue";
import {countries} from "@/components/Countrylist.js"

// Images
import user from "@/assets/images/users/user1.png";
import proposed1 from "@/assets/images/player1.png";
import proposed2 from "@/assets/images/player2.png";
import proposed3 from "@/assets/images/player3.png";
import proposed4 from "@/assets/images/player4.png";

export default {
  components: {
    Requests,
  },
  data() {
    return {
      countries : countries,
      activeTab: 0,
      addRequest: false,
      requestOthers: true,
      tabs: ["All", "Proposed", "Saved", "Accepted", "Archived"],
      requestsList: [
        {
          id: 1,
          profile: user,
          position: "Striker",
          league: "FIFA",
          club: "Real Madrid",
          agent: "John Cena",
          date: "10/Nov/2024",
        },
        {
          id: 2,
          profile: user,
          position: "GoalKeeper",
          league: "FIFA",
          club: "FC Barcelona",
          agent: "John Cena",
          date: "10/Nov/2024",
        },
        {
          id: 3,
          profile: user,
          position: "Striker",
          league: "FIFA",
          club: "Real Madrid",
          agent: "John Cena",
          date: "10/Nov/2024",
        },
        {
          id: 4,
          profile: user,
          position: "GoalKeeper",
          league: "FIFA",
          club: "FC Barcelona",
          agent: "John Cena",
          date: "10/Nov/2024",
        },
      ],
      proposedImages: [proposed1, proposed2, proposed3, proposed4],
    };
  },
};
</script>

<style scoped>
.active {
  background-color: #007bff;
  color: white;
}
</style>
@/components/Countrylist.js