<template>
  <div class="page_header">
    <h3 class="hd">All Players</h3>
    <div class="r_side">
      <div class="searchBox icon_box">
        <span class="icon">
          <i class="pi pi-search"></i>
        </span>
        <InputText
          type="text"
          class="form-control"
          placeholder="Search"
          v-model="searchQuery"
        />
      </div>
      <button class="btn btn-primary" @click="addPlayer = true">
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

        Add Players
      </button>
      <Dialog
        v-model:visible="addPlayer"
        maximizable
        modal
        header="Add Player"
        :style="{ width: '40rem' }"
        :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
      >
        <from>
          <div class="grid">
            <div class="col-12">
              <div class="form-group">
                <label> Transfer Market Url</label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-12 mt-3">
              <div class="form-group">
                <label>
                  Documents
                  <p class="subTxt">
                    Kindly upload valid documentation confirming your
                    authorization to act on behalf of the player.
                  </p>
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
              @click="addPlayer = false"
              >Cancel</Button
            >
            <Button
              type="button"
              class="btn btn-primary"
              label="Save"
              @click="addPlayer = false"
              >Add</Button
            >
          </div>
        </from>
      </Dialog>
    </div>
  </div>

  <div class="card mt-4">
    <div class="card-body">
      <div class="player_grid">
        <Playercard :searchQuery="searchQuery" :allPlayers="allPlayers" />
      </div>
    </div>
  </div>
</template>

<script>
import Playercard from "@/components/Playercard.vue";
import Profile1 from "@/assets/images/Profile1.jpg";
import Profile2 from "@/assets/images/Profile2.jpg";
export default {
  name: "Players",
  components: {
    Playercard,
  },
  data() {
    return {
      Profile1: Profile1,
      Profile2: Profile2,
      searchQuery: "",
      addPlayer: true,
      allPlayers: [
        {
          image: Profile1,
          name: "Cristiano Ronaldo",
          agent: "Sheikh Mohammad Bin Salman",
          club: "Al Nasar",
          status: "Pending",
        },
        {
          image: Profile2,
          name: "Mesit Ozil",
          agent: "Zidane",
          club: "Real Madrid",
          status: "Completed",
        },
        {
          image: Profile1,
          name: "Leo Messi",
          agent: "Sheikh Mohammad Bin Salman",
          club: "FC Barcelona",
          status: "Pending",
        },
        {
          image: Profile1,
          name: "Cristiano Ronaldo",
          agent: "Sheikh Mohammad Bin Salman",
          club: "Al Nasar",
          status: "Pending",
        },
        {
          image: Profile2,
          name: "Mesit Ozil",
          agent: "Zidane",
          club: "Real Madrid",
          status: "Completed",
        },
        {
          image: Profile1,
          name: "Leo Messi",
          agent: "Sheikh Mohammad Bin Salman",
          club: "FC Barcelona",
          status: "Pending",
        },
        {
          image: Profile1,
          name: "Cristiano Ronaldo",
          agent: "Sheikh Mohammad Bin Salman",
          club: "Al Nasar",
          status: "Pending",
        },
        {
          image: Profile2,
          name: "Mesit Ozil",
          agent: "Zidane",
          club: "Real Madrid",
          status: "Completed",
        },
        {
          image: Profile1,
          name: "Leo Messi",
          agent: "Sheikh Mohammad Bin Salman",
          club: "FC Barcelona",
          status: "Pending",
        },
      ],
    };
  },
};
</script>
