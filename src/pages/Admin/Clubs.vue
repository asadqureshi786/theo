<template>
  <div class="clubs_page">
    <!-- PAGE HEADER -->
    <div class="page_header">
      <h3 class="hd">Clubs</h3>
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
      </div>
    </div>
    <!-- PAGE HEADER -->

    <!-- Clubs Card Section Start -->
    <div class="card mt-4">
      <div class="card-body">
        <div class="box_grid">
          <Clubcard :allClubs="allClubs" :searchQuery="searchQuery" />
        </div>
      </div>
    </div>
    <!-- Clubs Card Section End -->
  </div>
</template>

<script>
import Clubcard from "@/components/Clubcard.vue";
export default {
  name: "Clubs",
  components: {
    Clubcard,
  },
  data() {
    return {
      searchQuery: "",
      allClubs: [
        {
          total_player: "€-102.30m",
          current_transfer_record: "Spain",
        },
        {
          total_player: "€-102.30m",
          current_transfer_record: "Spain",
        },
        {
          total_player: "€-102.30m",
          current_transfer_record: "Spain",
        },
        {
          total_player: "€-102.30m",
          current_transfer_record: "Spain",
        },
        {
          total_player: "€-102.30m",
          current_transfer_record: "Spain",
        },
        {
          total_player: "€-102.30m",
          current_transfer_record: "Spain",
        },
        {
          total_player: "€-102.30m",
          current_transfer_record: "Spain",
        },
        {
          total_player: "€-102.30m",
          current_transfer_record: "Spain",
        },
        {
          total_player: "€-102.30m",
          current_transfer_record: "Spain",
        },
      ],
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
