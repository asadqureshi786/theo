<template>
  <div class="agent_view">
    <!-- Page Header Section Start -->
    <div class="page_header">
      <div class="heading_icon">
        <div id="goBack" @click="goback" class="cursor-pointer">
          <i class="pi pi-chevron-left"></i>
        </div>
        <h3 class="hd">Agent View</h3>
      </div>
    </div>
    <!-- Page Header Section End -->

    <div class="profile_section">
      <div class="lside">
        <img :src="Agent" alt="" />
        <button class="btn btn-primary w-100">Send Message</button>
      </div>
      <div class="rside">
        <p class="name light6 fw6 f24">{{detail.name}}</p>
        <div class="dts my-1">
          <p class="text">Deals Completed:</p>
          <p class="count">15</p>
        </div>
        <div class="dts">
          <p class="text">User-level:</p>
          <p class="count">THEO - Black</p>
        </div>

        <div class="card main_card mt-3">
          <div class="card-body p-3">
            <h2 class="light6 f19 heading">General Information</h2>
            <div class="general_detail">
              <div class="box">
                <label>Name</label>
                <p class="text">{{detail.name}}</p>
              </div>
              <div class="box">
                <label>Email</label>
                <p class="text">{{detail.email}}</p>
              </div>
              <div class="box">
                <label>Country</label>
                <p class="text">{{detail.country}}</p>
              </div>
              <div class="box">
                <label>Date</label>
                <p class="text">{{detail.created_at}}</p>
              </div>
              <div class="box">
                <label>Certification Status</label>
                <p class="text">{{detail.certification_status}}</p>
              </div>
            </div>
            <div class="row formFileds d-none">
              <div class="col-6">
                <div class="form-group">
                  <label> Name</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label> Email</label>
                  <input type="email" class="form-control" />
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label> Country</label>
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
              <div class="col-6">
                <div class="form-group">
                  <label> City</label>
                  <div class="d_select">
                    <Select
                      v-model="selectedCity"
                      editable
                      :options="cities"
                      optionLabel="name"
                      placeholder="Select a City"
                      class="w-full"
                    />
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label> Date</label>
                  <div class="d_date">
                    <DatePicker v-model="date" />
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label> Certifiaction Status</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Documents Section Start -->
    <div class="light_head d-none mt-5">Documents</div>
    <Documents class="d-none" />
    <!-- Documents Section Start -->

     <!-- All Players Squad Section Start -->
    <div class="d-flex mt-5 justify-content-between align-items-center">
      <div class="light_head ">Players  <!-- Correct usage --> </div>
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
    </div>
    <div class="tab-content mt-4">
      <div v-if="activeTab === 0">
        <Dynamictable :t_head="player_head" :t_body="player_body" />
      </div>
      <div v-if="activeTab === 1">
         <Dynamictable :t_head="player_head" :t_body="player_body" />
      </div>
      <div v-if="activeTab === 2">
         <Dynamictable :t_head="player_head" :t_body="player_body" />
      </div>
      <div v-if="activeTab === 3">
         <Dynamictable :t_head="player_head" :t_body="player_body" />
      </div>
      <div v-if="activeTab === 4">
         <Dynamictable :t_head="player_head" :t_body="player_body" />
      </div>
    </div>
    <!-- All Players Squad Section End -->
  </div>
</template>

<script>
// Components
import Documents from "@/components/Documents.vue";
import Simpletable from "@/components/Simpletable.vue";
import Dynamictable from "@/components/Dynamictable.vue";

// Routes
import { useRoute } from 'vue-router';

// Axios
import axios from "axios";

// Images
import Agent from "@/assets/images/agent.png";

export default {
  name: "Agentview",
  components: {
    Documents,
    Simpletable,
    Dynamictable,
  },
  data() {
    return {
      Agent: Agent,
      routeId : '',
      token : localStorage.getItem('token'),
      activeTab: 0,
      tabs: ["All", "My Squad", "Followed", "Approached", "Accepted"],
      detail : {},
      player_head: [
        {
          key: "checkbox",
          label: "",
        },
        {
          key: "date",
          label: "Date",
        },
        {
          key: "player_name",
          label: "Player Name",
        },
        {
          key: "club_name",
          label: "Club Name",
        },
        {
          key: "role",
          label: "Role",
        },
        {
          key: "contract_end",
          label: "Contract End",
        },
        {
          key: "status",
          label: "Status",
        },
        {
          key: "action",
          label: "",
        },
      ],
      player_body: [
        {
          checkbox: `<label for="check1" class="table_check_list" class="text-center">
            <input id="check1" type="checkbox" />
            <div class="c_checkbox"><i class="pi pi-check" ></i></div>
            </label>`,
            date: `<div class="text">Dec 12, 2023</div>`,
            player_name: `<div class="text fw6">Enzo Delgado</div>`,
            club_name: `<div class="text fw6">Marseille</div>`,
            role: `<div class="text">Strike</div>`,
          contract_end: `<div class="text">12/02/2022</div>`,
          status: `<div class="status">My Player</div>`,
          action: `<div class="dropdown action_dropdown text-center">
                  <div class="dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <span class="dots">
                    <i class="pi pi-ellipsis-v" ></i>
                    </span>
                    </div>
                  <ul class="dropdown-menu action_dropdown_menu">
                    <li><a class="dropdown-item" href="#">View</a></li>
                    <li><a class="dropdown-item" href="#">Edit</a></li>
                    <li><a class="dropdown-item" href="#">Delete</a></li>
                    </ul>
                </div>`,
              },
         {
          checkbox: `<label for="check2" class="table_check_list" class="text-center">
            <input id="check2" type="checkbox" />
            <div class="c_checkbox"><i class="pi pi-check" ></i></div>
            </label>`,
            date: `<div class="text">Dec 12, 2023</div>`,
            player_name: `<div class="text fw6">Enzo Delgado</div>`,
          club_name: `<div class="text fw6">Marseille</div>`,
          role: `<div class="text">Strike</div>`,
          contract_end: `<div class="text">12/02/2022</div>`,
          status: `<div class="status">My Player</div>`,
          action: `<div class="dropdown action_dropdown text-center">
                  <div class="dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span class="dots">
                    <i class="pi pi-ellipsis-v" ></i>
                    </span>
                    </div>
                  <ul class="dropdown-menu action_dropdown_menu">
                    <li><a class="dropdown-item" href="#">View</a></li>
                    <li><a class="dropdown-item" href="#">Edit</a></li>
                    <li><a class="dropdown-item" href="#">Delete</a></li>
                  </ul>
                  </div>`,
                },
                {
          checkbox: `<label for="check3" class="table_check_list" class="text-center">
            <input id="check3" type="checkbox" />
            <div class="c_checkbox"><i class="pi pi-check" ></i></div>
            </label>`,
          date: `<div class="text">Dec 12, 2023</div>`,
          player_name: `<div class="text fw6">Enzo Delgado</div>`,
          club_name: `<div class="text fw6">Marseille</div>`,
          role: `<div class="text">Strike</div>`,
          contract_end: `<div class="text">12/02/2022</div>`,
          status: `<div class="status">My Player</div>`,
          action: `<div class="dropdown action_dropdown text-center">
            <div class="dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <span class="dots">
                    <i class="pi pi-ellipsis-v" ></i>
                    </span>
                    </div>
                  <ul class="dropdown-menu action_dropdown_menu">
                    <li><a class="dropdown-item" href="#">View</a></li>
                    <li><a class="dropdown-item" href="#">Edit</a></li>
                    <li><a class="dropdown-item" href="#">Delete</a></li>
                  </ul>
                </div>`,
        },
      ],
      selectedCity: null,
      selectedCountry: null,
      cities: [
        { name: "New York", code: "NY" },
        { name: "Rome", code: "RM" },
        { name: "London", code: "LDN" },
        { name: "Istanbul", code: "IST" },
        { name: "Paris", code: "PRS" },
        { name: "Tokyo", code: "TKY" },
        { name: "Beijing", code: "BJ" },
        { name: "Moscow", code: "MSK" },
        { name: "Dubai", code: "DXB" },
        { name: "Berlin", code: "BER" },
        { name: "Madrid", code: "MAD" },
        { name: "Sydney", code: "SYD" },
        { name: "Mumbai", code: "BOM" },
        { name: "Cairo", code: "CAI" },
        { name: "Bangkok", code: "BKK" },
        { name: "Los Angeles", code: "LA" },
        { name: "Chicago", code: "CHI" },
        { name: "San Francisco", code: "SF" },
        { name: "Seoul", code: "SEL" },
        { name: "Buenos Aires", code: "BA" },
        { name: "Mexico City", code: "MEX" },
        { name: "Toronto", code: "TOR" },
        { name: "Vancouver", code: "VAN" },
        { name: "Rio de Janeiro", code: "RIO" },
        { name: "Johannesburg", code: "JHB" },
        { name: "Athens", code: "ATH" },
        { name: "Lagos", code: "LOS" },
        { name: "Amsterdam", code: "AMS" },
        { name: "Zurich", code: "ZRH" },
        { name: "Brussels", code: "BRU" },
        { name: "Lisbon", code: "LIS" },
        { name: "Stockholm", code: "STO" },
        { name: "Vienna", code: "VIE" },
        { name: "Warsaw", code: "WAW" },
        { name: "Helsinki", code: "HEL" },
        { name: "Oslo", code: "OSL" },
        { name: "Copenhagen", code: "CPH" },
        { name: "Prague", code: "PRG" },
        { name: "Budapest", code: "BUD" },
      ],
      countries: [
        { name: "Afghanistan", code: "AF" },
        { name: "Albania", code: "AL" },
        { name: "Algeria", code: "DZ" },
        { name: "Andorra", code: "AD" },
        { name: "Angola", code: "AO" },
        { name: "Antigua and Barbuda", code: "AG" },
        { name: "Argentina", code: "AR" },
        { name: "Armenia", code: "AM" },
        { name: "Australia", code: "AU" },
        { name: "Austria", code: "AT" },
        { name: "Azerbaijan", code: "AZ" },
        { name: "Bahamas", code: "BS" },
        { name: "Bahrain", code: "BH" },
        { name: "Bangladesh", code: "BD" },
        { name: "Barbados", code: "BB" },
        { name: "Belarus", code: "BY" },
        { name: "Belgium", code: "BE" },
        { name: "Belize", code: "BZ" },
        { name: "Benin", code: "BJ" },
        { name: "Bhutan", code: "BT" },
        { name: "Bolivia", code: "BO" },
        { name: "Bosnia and Herzegovina", code: "BA" },
        { name: "Botswana", code: "BW" },
        { name: "Brazil", code: "BR" },
        { name: "Brunei", code: "BN" },
        { name: "Bulgaria", code: "BG" },
        { name: "Burkina Faso", code: "BF" },
        { name: "Burundi", code: "BI" },
        { name: "Cabo Verde", code: "CV" },
        { name: "Cambodia", code: "KH" },
        { name: "Cameroon", code: "CM" },
        { name: "Canada", code: "CA" },
        { name: "Central African Republic", code: "CF" },
        { name: "Chad", code: "TD" },
        { name: "Chile", code: "CL" },
        { name: "China", code: "CN" },
        { name: "Colombia", code: "CO" },
        { name: "Comoros", code: "KM" },
        { name: "Congo (Congo-Brazzaville)", code: "CG" },
        { name: "Costa Rica", code: "CR" },
        { name: "Croatia", code: "HR" },
        { name: "Cuba", code: "CU" },
        { name: "Cyprus", code: "CY" },
        { name: "Czechia (Czech Republic)", code: "CZ" },
        { name: "Democratic Republic of the Congo", code: "CD" },
        { name: "Denmark", code: "DK" },
        { name: "Djibouti", code: "DJ" },
        { name: "Dominica", code: "DM" },
        { name: "Dominican Republic", code: "DO" },
        { name: "Ecuador", code: "EC" },
        { name: "Egypt", code: "EG" },
        { name: "El Salvador", code: "SV" },
        { name: "Equatorial Guinea", code: "GQ" },
        { name: "Eritrea", code: "ER" },
        { name: "Estonia", code: "EE" },
        { name: 'Eswatini (fmr. "Swaziland")', code: "SZ" },
        { name: "Ethiopia", code: "ET" },
        { name: "Fiji", code: "FJ" },
        { name: "Finland", code: "FI" },
        { name: "France", code: "FR" },
        { name: "Gabon", code: "GA" },
        { name: "Gambia", code: "GM" },
        { name: "Georgia", code: "GE" },
        { name: "Germany", code: "DE" },
        { name: "Ghana", code: "GH" },
        { name: "Greece", code: "GR" },
        { name: "Grenada", code: "GD" },
        { name: "Guatemala", code: "GT" },
        { name: "Guinea", code: "GN" },
        { name: "Guinea-Bissau", code: "GW" },
        { name: "Guyana", code: "GY" },
        { name: "Haiti", code: "HT" },
        { name: "Honduras", code: "HN" },
        { name: "Hungary", code: "HU" },
        { name: "Iceland", code: "IS" },
        { name: "India", code: "IN" },
        { name: "Indonesia", code: "ID" },
        { name: "Iran", code: "IR" },
        { name: "Iraq", code: "IQ" },
        { name: "Ireland", code: "IE" },
        { name: "Israel", code: "IL" },
        { name: "Italy", code: "IT" },
        { name: "Jamaica", code: "JM" },
        { name: "Japan", code: "JP" },
        { name: "Jordan", code: "JO" },
        { name: "Kazakhstan", code: "KZ" },
        { name: "Kenya", code: "KE" },
        { name: "Kiribati", code: "KI" },
        { name: "Kuwait", code: "KW" },
        { name: "Kyrgyzstan", code: "KG" },
        { name: "Laos", code: "LA" },
        { name: "Latvia", code: "LV" },
        { name: "Lebanon", code: "LB" },
        { name: "Lesotho", code: "LS" },
        { name: "Liberia", code: "LR" },
        { name: "Libya", code: "LY" },
        { name: "Liechtenstein", code: "LI" },
        { name: "Lithuania", code: "LT" },
        { name: "Luxembourg", code: "LU" },
        { name: "Madagascar", code: "MG" },
        { name: "Malawi", code: "MW" },
        { name: "Malaysia", code: "MY" },
        { name: "Maldives", code: "MV" },
        { name: "Mali", code: "ML" },
        { name: "Malta", code: "MT" },
        { name: "Marshall Islands", code: "MH" },
        { name: "Mauritania", code: "MR" },
        { name: "Mauritius", code: "MU" },
        { name: "Mexico", code: "MX" },
        { name: "Micronesia", code: "FM" },
        { name: "Moldova", code: "MD" },
        { name: "Monaco", code: "MC" },
        { name: "Mongolia", code: "MN" },
        { name: "Montenegro", code: "ME" },
        { name: "Morocco", code: "MA" },
        { name: "Mozambique", code: "MZ" },
        { name: "Myanmar (formerly Burma)", code: "MM" },
        { name: "Namibia", code: "NA" },
        { name: "Nauru", code: "NR" },
        { name: "Nepal", code: "NP" },
        { name: "Netherlands", code: "NL" },
        { name: "New Zealand", code: "NZ" },
        { name: "Nicaragua", code: "NI" },
        { name: "Niger", code: "NE" },
        { name: "Nigeria", code: "NG" },
        { name: "North Korea", code: "KP" },
        { name: "North Macedonia", code: "MK" },
        { name: "Norway", code: "NO" },
        { name: "Oman", code: "OM" },
        { name: "Pakistan", code: "PK" },
        { name: "Palau", code: "PW" },
        { name: "Palestine State", code: "PS" },
        { name: "Panama", code: "PA" },
        { name: "Papua New Guinea", code: "PG" },
        { name: "Paraguay", code: "PY" },
        { name: "Peru", code: "PE" },
        { name: "Philippines", code: "PH" },
        { name: "Poland", code: "PL" },
        { name: "Portugal", code: "PT" },
        { name: "Qatar", code: "QA" },
        { name: "Romania", code: "RO" },
        { name: "Russia", code: "RU" },
        { name: "Rwanda", code: "RW" },
        { name: "Saint Kitts and Nevis", code: "KN" },
        { name: "Saint Lucia", code: "LC" },
        { name: "Saint Vincent and the Grenadines", code: "VC" },
        { name: "Samoa", code: "WS" },
        { name: "San Marino", code: "SM" },
        { name: "Sao Tome and Principe", code: "ST" },
        { name: "Saudi Arabia", code: "SA" },
        { name: "Senegal", code: "SN" },
        { name: "Serbia", code: "RS" },
        { name: "Seychelles", code: "SC" },
        { name: "Sierra Leone", code: "SL" },
        { name: "Singapore", code: "SG" },
        { name: "Slovakia", code: "SK" },
        { name: "Slovenia", code: "SI" },
        { name: "Solomon Islands", code: "SB" },
        { name: "Somalia", code: "SO" },
        { name: "South Africa", code: "ZA" },
        { name: "South Korea", code: "KR" },
        { name: "South Sudan", code: "SS" },
        { name: "Spain", code: "ES" },
        { name: "Sri Lanka", code: "LK" },
        { name: "Sudan", code: "SD" },
        { name: "Suriname", code: "SR" },
        { name: "Sweden", code: "SE" },
        { name: "Switzerland", code: "CH" },
        { name: "Syria", code: "SY" },
        { name: "Taiwan", code: "TW" },
        { name: "Tajikistan", code: "TJ" },
        { name: "Tanzania", code: "TZ" },
        { name: "Thailand", code: "TH" },
        { name: "Timor-Leste", code: "TL" },
        { name: "Togo", code: "TG" },
        { name: "Tonga", code: "TO" },
        { name: "Trinidad and Tobago", code: "TT" },
        { name: "Tunisia", code: "TN" },
        { name: "Turkey", code: "TR" },
        { name: "Turkmenistan", code: "TM" },
        { name: "Tuvalu", code: "TV" },
        { name: "Uganda", code: "UG" },
        { name: "Ukraine", code: "UA" },
        { name: "United Arab Emirates", code: "AE" },
        { name: "United Kingdom", code: "GB" },
        { name: "United States", code: "US" },
        { name: "Uruguay", code: "UY" },
        { name: "Uzbekistan", code: "UZ" },
        { name: "Vanuatu", code: "VU" },
        { name: "Vatican City", code: "VA" },
        { name: "Venezuela", code: "VE" },
        { name: "Vietnam", code: "VN" },
        { name: "Yemen", code: "YE" },
        { name: "Zambia", code: "ZM" },
        { name: "Zimbabwe", code: "ZW" },
      ],
    };
  },
  mounted(){
    // this.routeId = route.para
    const route = useRoute()
    this.routeId = route.params.id;
    this.getAgent();
  },
  methods: {
    goback() {
      window.history.back();
    },

    // Get Agent View JS Start
    async getAgent(){
      console.log("Your Api",this.$baseURL+`theo/api/admin/agents`)
      try{
        const response = await axios.get(this.$baseURL+`theo/api/admin/agents/${this.routeId}`,{
             headers: {
              'Accept' : 'application/json',
              Authorization: `Bearer ${this.token}`, 
            },
        })
        if(response.status == 200){
          this.detail = response.data;
          console.log(response.data)
        }
      }catch(error){  
        console.log(error)
      }
    }
    // Get Agent View JS End

  },
};
</script>
