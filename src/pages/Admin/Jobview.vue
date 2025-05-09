<template>
  <!-- Page Header Section Start -->
  <div class="page_header">
    <div class="heading_icon">
      <div id="goBack" @click="goback" class="cursor-pointer">
        <i class="pi pi-chevron-left"></i>
      </div>
      <h3 class="hd">Job View</h3>
    </div>
  </div>
  <!-- Page Header Section End -->

  <div class="jobView mt-5">
    <div class="row">
      <div class="col-md-8">
        <div class="card">
          <div class="card-body">
            <div class="personal_info">
              <div class="top">
                <div class="main">
                  <div class="lside">
                    <h5 class="primaryCol2 f30 fw6">Postion: Goalkeeper</h5>
                  </div>
                  <div class="rside">
                    <div class="bookmark_icon">
                      <i class="pi pi-bookmark"></i>
                    </div>
                  </div>
                </div>
                <div class="main">
                  <div class="d-flex align-items-center gap-4">
                    <p class="text f19 black fw5">LeagueL Liga</p>
                    <p class="text f19 black fw5">Club Al Nasar</p>
                  </div>
                  <div class="d-flex align-items-center gap-2">
                    <button class="btn btn-secondary">Received</button>
                    <button class="btn btn-primary" @click="showPropose = true" >Propose Player</button>
                  </div>
                </div>
                <div class="main">
                  <div class="d-flex align-items-center gap-4">
                    <p class="agent f14 silverCol">Agent: Rohat Ackaya</p>
                    <Playerproposed :proposedImages="proposedImages" />
                  </div>
                  <p class="ltext mt-4 f11">Posted: 10/November/2023</p>
                </div>
              </div>

              <div class="middle my-3">
                <div class="row">
                  <div class="col-md-6">
                    <div class="info">
                      <ul>
                        <li>
                          <label>Gender:</label>
                          <p class="data">Male</p>
                        </li>
                        <li>
                          <label>Position Main:</label>
                          <p class="data">Defender</p>
                        </li>
                        <li>
                          <label>Position Others:</label>
                          <p class="data">Left back, Midfield</p>
                        </li>
                        <li>
                          <label>Foot:</label>
                          <p class="data">Right</p>
                        </li>
                        <li>
                          <label>Age:</label>
                          <p class="data">23 - 26</p>
                        </li>
                        <li>
                          <label>Salary</label>
                          <p class="data">Not Provided</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="info">
                      <ul>
                        <li>
                          <label>Football Section:</label>
                          <p class="data">Men's Football</p>
                        </li>
                        <li>
                          <label>League:</label>
                          <p class="data">Defender</p>
                        </li>
                        <li>
                          <label>Club:</label>
                          <p class="data">Al Nasar</p>
                        </li>
                        <li>
                          <label>Nature of Transfer:</label>
                          <p class="data">Transfer</p>
                        </li>
                        <li>
                          <label>Club's Aimed Budget:</label>
                          <p class="data">Fee Transfer</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bottom">
                <div class="more_info">
                  <h5 class="f18 hd">More Information</h5>
                  <p class="desc">
                    Olympique Ardent Football Club (Ardent meaning Passionate)
                    is a professional French football club based in Lyon.
                    Founded on August 12, 1953, the club plays its home matches
                    at the Stade du Flambeau. Their traditional home colors are
                    navy blue and crimson red.
                    <br />
                    <br />
                    Olympique Ardent is regarded as one of the most competitive
                    clubs in French football, with 26 official titles.
                    Domestically, the club has claimed seven Ligue 1
                    championships, five Coupe de France titles, four Coupe de la
                    Ligue trophies, and three Trophée des Champions. On the
                    international stage, they achieved a historic feat in 1999
                    by winning both the UEFA Cup Winners’ Cup and the UEFA Super
                    Cup. The club also added the UEFA Intertoto Cup in 2004 and
                    triumphed in the Coupe des Nations Francophones in 2022.
                    <br />
                    <br />
                    Known for its dynamic youth academy and passionate fan base,
                    Olympique Ardent continues to be a symbol of ambition,
                    resilience, and pride in French football.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <Sideplayers playerHeading="Suggested Players" />
            <div class="mt-4"></div>
            <Sideplayers playerHeading="Recent Requests" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Propose Player Modal -->
  <Dialog
    v-model:visible="showPropose"
    maximizable
    modal
    header="Propose Player"
    :style="{ width: '40rem' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
  >
    <form>
      <!-- Corrected from 'from' to 'form' -->
      <div class="row formFileds">
        <div class="col-12">
          <div class="form-group">
            <label> Select Player</label>
            <div class="d_select" >
                <Select v-model="selectedCity" editable :options="cities" optionLabel="name" placeholder="Select a City" class="w-full" />
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <label> Player's Agent</label>
            <input type="text" class="form-control" />
          </div>
        </div>
      </div>
      <div class="flex justify-end gap-2 modal_footer">
        <Button
          type="button"
          class="btn btn-secondary"
          label="Cancel"
          severity="secondary"
          @click="showPropose = false"
          >Cancel</Button
        >
        <Button
          type="button"
          class="btn btn-primary"
          label="Save"
          @click="showPropose = false"
          >Propose</Button
        >
      </div>
    </form>
  </Dialog>
</template>

<script>
// Images
import proposed1 from "@/assets/images/player1.png";
import proposed2 from "@/assets/images/player2.png";
import proposed3 from "@/assets/images/player3.png";
import proposed4 from "@/assets/images/player4.png";

// Components
import Playerproposed from "@/components/Playerproposed.vue";
import Sideplayers from "@/components/Sideplayers.vue";
export default {
  name: "Jobview",
  components: {
    Playerproposed,
    Sideplayers,
  },
  data() {
    return {
      proposedImages: [proposed1, proposed2, proposed3, proposed4],
      playerHeading: "",
      showPropose : false,
      selectedCity: null,
            cities: [
                { name: 'New York', code: 'NY' },
                { name: 'Rome', code: 'RM' },
                { name: 'London', code: 'LDN' },
                { name: 'Istanbul', code: 'IST' },
                { name: 'Paris', code: 'PRS' },
                { name: 'Tokyo', code: 'TKY' },
                { name: 'Beijing', code: 'BJ' },
                { name: 'Moscow', code: 'MSK' },
                { name: 'Dubai', code: 'DXB' },
                { name: 'Berlin', code: 'BER' },
                { name: 'Madrid', code: 'MAD' },
                { name: 'Sydney', code: 'SYD' },
                { name: 'Mumbai', code: 'BOM' },
                { name: 'Cairo', code: 'CAI' },
                { name: 'Bangkok', code: 'BKK' },
                { name: 'Los Angeles', code: 'LA' },
                { name: 'Chicago', code: 'CHI' },
                { name: 'San Francisco', code: 'SF' },
                { name: 'Seoul', code: 'SEL' },
                { name: 'Buenos Aires', code: 'BA' },
                { name: 'Mexico City', code: 'MEX' },
                { name: 'Toronto', code: 'TOR' },
                { name: 'Vancouver', code: 'VAN' },
                { name: 'Rio de Janeiro', code: 'RIO' },
                { name: 'Johannesburg', code: 'JHB' },
                { name: 'Athens', code: 'ATH' },
                { name: 'Lagos', code: 'LOS' },
                { name: 'Amsterdam', code: 'AMS' },
                { name: 'Zurich', code: 'ZRH' },
                { name: 'Brussels', code: 'BRU' },
                { name: 'Lisbon', code: 'LIS' },
                { name: 'Stockholm', code: 'STO' },
                { name: 'Vienna', code: 'VIE' },
                { name: 'Warsaw', code: 'WAW' },
                { name: 'Helsinki', code: 'HEL' },
                { name: 'Oslo', code: 'OSL' },
                { name: 'Copenhagen', code: 'CPH' },
                { name: 'Prague', code: 'PRG' },
                { name: 'Budapest', code: 'BUD' }
            ],
    };
  },
  methods: {
    goback() {
      window.history.back();
    },
  },
};
</script>
