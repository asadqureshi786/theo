<template>
  <div class="contact_card">
    <div
      v-if="contactList.length == 0"
      class="no_record_found d-flex justify-content-center align-items-center"
    >
      <h4 class="f20 fw6">
        <i class="pi pi-exclamation-circle"></i>
        <span class="text">No Contact Found</span>
      </h4>
    </div>
    <ul class="main_parent mt-4">
      <li v-for="(item, index) in contactList" :key="item.id">
        <div class="card">
          <div class="header primaryCol  fw5">
            {{ item.name }}
            <div class="action_icon">
              <div class="edit_icon" @click=" editAgent = 'false'; handleId(item.id);">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#8F0301">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <g id="style=linear">
                      <g id="edit">
                        <path
                          id="vector"
                          d="M18.4101 3.6512L20.5315 5.77252C21.4101 6.6512 21.4101 8.07582 20.5315 8.9545L9.54019 19.9458C9.17774 20.3082 8.70239 20.536 8.19281 20.5915L4.57509 20.9856C3.78097 21.072 3.11061 20.4017 3.1971 19.6076L3.59111 15.9898C3.64661 15.4803 3.87444 15.0049 4.23689 14.6425L3.70656 14.1121L4.23689 14.6425L15.2282 3.6512C16.1068 2.77252 17.5315 2.77252 18.4101 3.6512Z"
                          stroke="#8F0301"
                          stroke-width="1.2"
                        ></path>
                        <path
                          id="vector_2"
                          d="M15.2282 3.6512C16.1068 2.77252 17.5315 2.77252 18.4101 3.6512L20.5315 5.77252C21.4101 6.6512 21.4101 8.07582 20.5315 8.9545L18.7283 10.7576L13.425 5.45432L15.2282 3.6512Z"
                          stroke="#8F0301"
                          stroke-width="1.2"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div class="trashIcon cursor-pointer" @click="handleDelete(item.id)">
                <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.75 5.48177C16.6975 5.17927 13.6267 5.02344 10.565 5.02344C8.75 5.02344 6.935 5.1151 5.12 5.29844L3.25 5.48177"
                    fill="#8F0301"
                  />
                  <path
                    d="M19.75 5.48177C16.6975 5.17927 13.6267 5.02344 10.565 5.02344C8.75 5.02344 6.935 5.1151 5.12 5.29844L3.25 5.48177"
                    stroke="#8F0301"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.29166 4.55551L8.49332 3.35467C8.63999 2.48384 8.74999 1.83301 10.2992 1.83301H12.7008C14.25 1.83301 14.3692 2.52051 14.5067 3.36384L14.7083 4.55551"
                    stroke="#8F0301"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.7792 8.37793L17.1833 17.6088C17.0825 19.0479 17 20.1663 14.4425 20.1663H8.55749C5.99999 20.1663 5.91749 19.0479 5.81666 17.6088L5.22083 8.37793"
                    stroke="#8F0301"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.96918 15.125H13.0217"
                    stroke="#8F0301"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.20834 11.458H13.7917"
                    stroke="#8F0301"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <ul class="list">
            <li>
              <div class="item">
                <div class="icon">
                  <i class="pi pi-envelope"></i>
                </div>
                <p class="text">{{ item.email }}</p>
              </div>
            </li>
            <li>
              <div class="item">
                <div class="icon">
                  <i class="pi pi-user"></i>
                </div>
                <p class="text">{{ item.role }}</p>
              </div>
            </li>
            <li>
              <div class="item">
                <div class="icon">
                  <i class="pi pi-phone"></i>
                </div>
                <p class="text">{{ item.phone }}</p>
              </div>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>

  <ConfirmDialog class="confirmation_modal"></ConfirmDialog>

</template>

<script>
import axios from "axios";

// Toast
import { useToast } from "vue-toastification";
const toast = useToast();

export default {
  name: "Contactcard",
  props: {
    contactList: Array,
    routeId : String,
    fetchContact : Function,
  },
  data() {
    return {
      token : localStorage.getItem('token'),
      contacts: [
        {
          header: "John William",
          email: "abc@mail.com",
          name: "Sporting Director",
          number: "+1-238-9453",
        },
        {
          header: "Emily Smith",
          email: "emily.smith@mail.com",
          name: "Marketing Manager",
          number: "+1-567-1234",
        },
        {
          header: "Michael Johnson",
          email: "michael.johnson@mail.com",
          name: "Head Coach",
          number: "+1-789-6543",
        },
        {
          header: "Sarah Brown",
          email: "sarah.brown@mail.com",
          name: "Team Doctor",
          number: "+1-345-9876",
        },
      ],
    };
  },
  methods : {
    // Delete Contact 
      async deleteContact(contactID) {
        console.log(`${this.$baseURL}theo/api/admin/clubs/${this.routeId}/delete-contact/${contactID}`, {
          headers: {
            'Accept': 'application/json',
            Authorization: `Bearer ${this.token}`,
          },
        });
      try {
        const response = await axios.delete(`${this.$baseURL}theo/api/admin/clubs/${this.routeId}/delete-contact/${contactID}`, {
          headers: {
            'Accept': 'application/json',
            Authorization: `Bearer ${this.token}`,
          },
        });
        if (response.status === 200) {
          toast.error("Agent deleted successfully!");
          this.fetchContact();
        } else {
          toast.error("Failed to delete agent.");
        }
      } catch (error) {
        console.log(error)
        toast.error("Error deleting agent.");
      }
    },

    handleDelete(contactID){
        this.$confirm.require({
        message: "Are you sure you want to delete?",
        header: "",
        icon: "pi pi-exclamation-circle",
        rejectProps: {
          label: "Cancel",
          severity: "secondary",
          outlined: true,
        },
        acceptProps: {
          label: "Delete",
          severity: "danger",
        },
        accept: () => {
          this.deleteContact(contactID);
        },
        reject: () => {
          // console.log("Delete cancelled");
        },
      });
    }
    
  }
};
</script>
