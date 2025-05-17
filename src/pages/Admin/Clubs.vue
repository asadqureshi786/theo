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
          name : 'Manchester City',
          total_player: "20",
          current_transfer_record: "€-102.30m",
        },
        {
          name : 'FC Barcelona',
          total_player: "30",
          current_transfer_record: "€-102.30m",
        },
        {
          name : 'Liverpool FC',
          total_player: "40",
          current_transfer_record: "€-102.30m",
        },
        {
          name : 'Manchester City',
          total_player: "10",
          current_transfer_record: "€-102.30m",
        },
        {
          name : 'Liverpool FC',
          total_player: "20",
          current_transfer_record: "€-102.30m",
        },
        {
          name : 'Manchester City',
          total_player: "35",
          current_transfer_record: "€-102.30m",
        },
        {
          name : 'Liverpool FC',
          total_player: "40",
          current_transfer_record: "€-102.30m",
        },
        {
          name : 'Manchester City',
          total_player: "9",
          current_transfer_record: "€-102.30m",
        }
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
