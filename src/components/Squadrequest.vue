<template>

    <!-- PAGE HEADER WITH TABS -->
    <div class="page_header">
        <h3 class="hd">Squad Requests</h3>
        <div class="searchBox icon_box">
            <span class="icon">
                <i class="pi pi-search"></i>
            </span>
            <InputText type="text" class="form-control" placeholder="Search" v-model="searchQuery" />
        </div>
    </div>

    <div class="spinner_center"  v-if="spinner" >
      <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="4" fill="transparent" stroke="#000" />
    </div>
    <div v-if="notFound" class="fix_not_Found mt-4">
        <i class="pi pi-exclamation-circle" ></i>No Record Found
    </div>

     

    <ul v-else class="request_items squad_request mt-4">
        <li class="item" v-for="request in requestsList" :key="request.id">
            <div class="rside">
                <div class="img">
                    <img :src="request.image" alt="" class="main_profile" />
                </div>
                <div class="detail">
                    <div class="top">
                        <div class="position">
                            <label for="">Player :</label>
                            <p class="text">{{ request.name }}</p>
                        </div>
                        <!-- <div class="league">
              <label for="">League:</label>
              <p class="text">{{ request.league.name }}</p>
            </div>
            <div class="position">
              <label for="">Club:</label>
              <p class="text">{{ request.club.name }}</p>
            </div> -->
                    </div>
                    <div class="bottom d-flex gap-3">
                        <div class="d-flex align-items-center gap-1">
                            <label for="">Agent:</label>
                            <p class="text">{{ request.agent.name }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="lside d-flex align-items-start gap-2">
                <div>
                    <p class="date">Posted: {{ request.created_at ? request.created_at.slice(0, -17) : '-' }}</p>
                    <div class="d-flex gap-2">
                        <button type="submit" @click.prevent="updateStatus(request.id, 'accepted')"
                            class="btn btn-primary">Accept</button>
                        <button type="submit" @click.prevent="updateStatus(request.id, 'rejected')"
                            class="btn btn-secondary">Reject</button>
                        <button type="submit" class="btn btn-secondary icon" @click="downloadAllAsZip">Documents<i
                                class="pi pi-download"></i></button>
                    </div>
                </div>
            </div>
        </li>
    </ul>


    <ConfirmDialog class="confirmation_modal"></ConfirmDialog>

</template>

<script>
import Playerproposed from "@/components/Playerproposed.vue";

// Images
import user from "@/assets/images/users/user1.png";
import proposed1 from "@/assets/images/player1.png";
import proposed2 from "@/assets/images/player2.png";
import proposed3 from "@/assets/images/player3.png";
import proposed4 from "@/assets/images/player4.png";

// Import Axios
import axios from "axios";
// Download Zip
import JSZip from 'jszip'
import { saveAs } from 'file-saver'


export default {
    name: "Squadrequest",
    components: {
        Playerproposed,
    },
    // props: {
    //   requestsList: Array,
    //   requestOthers: Boolean,
    //   proposedImages: Array,
    // },
    data() {
        return {
            token: localStorage.getItem("token"),
            requestsList: [],
            documents: [],
            notFound : false,
            spinner : false,

        };
    },

    mounted() {
        // Fetch requests when the component is mounted
        this.fetchRequests();
    },
    methods: {
        // Fetch All Requests
        async fetchRequests() {
            try {
                this.spinner = true;
                const response = await axios.get(
                    this.$baseURL + "theo/api/admin/squad-players-requests",
                    {
                        headers: {
                            Accept: "application/json",
                            Authorization: `Bearer ${this.token}`,
                        },
                    }
                );
          
                if (response.status === 200) {
                    this.requestsList = response.data;
                    this.spinner = false;
                    if(this.requestsList.length == 0){
                        this.notFound = true;
                    }
                    else{
                        this.notFound = false;
                    }

                    this.requestsList.forEach((file, index) => {
                        file.documents.forEach((doc) => {
                            this.documents.push(doc)
                        })
                    });
                } else {
                    console.error("Failed to fetch requests:", response.data);
                }
            } catch (error) {
                console.error("Error fetching requests:", error);
            }
        },

        // Download Document File
        async downloadAllAsZip(e) {
            e.preventDefault()

            const zip = new JSZip()

            if (!this.documents || this.documents.length === 0) {
                console.warn("⚠️ No documents to download.")
                return
            }

            const downloadPromises = this.documents.map(async (doc) => {
                const fileUrl = this.$baseURL + 'theo/public/uploads/images/' + doc.file
                console.log("Downloading:", fileUrl)

                try {
                    const response = await axios.get(fileUrl, {
                        responseType: 'blob',
                        headers: {
                            Accept: 'application/json',
                            Authorization: `Bearer ${this.token}`,
                        },
                    })

                    console.log("Blob size for", doc.file, ":", response.data.size)

                    const safeFileName = doc.file.replace(/[^a-zA-Z0-9.\-_]/g, '_')
                    console.log("Adding to zip:", safeFileName)
                    zip.file(safeFileName, response.data)

                } catch (error) {
                    console.error(error)
                }
            })

            await Promise.all(downloadPromises)

            zip.generateAsync({ type: 'blob' }).then((content) => {
                console.log("✅ ZIP ready, starting download")
                saveAs(content, 'documents.zip')
            })
        },

        // Accpect Request
        async updateStatus(id, value) {
            console.log(id, value)
            console.log('first', this.$baseURL + `theo/admin/squad-players-requests/${id}/update-status`)
            this.$confirm.require({
                message: `${value == "accepted" ? 'Are you sure you want to Accept?' : 'Are you sure you want to Reject?'}`,
                header: "",
                icon: `pi ${value == "accepted" ? 'pi-check-circle' : 'pi-exclamation-circle'} `,
                rejectProps: {
                    label: "Cancel",
                    severity: "secondary",
                    outlined: true,
                },
                acceptProps: {
                    label: `${value == "accepted" ? 'Accept' : 'Reject'}`,
                    severity: `${value == "accepted" ? 'successs' : 'danger'}`,
                },
                accept: async () => {
                    try {
                        const response = await axios.post(this.$baseURL + `theo/api/admin/squad-players-requests/${id}/update-status`, { status: value }, {
                            headers: {
                                Accept: "application/json",
                                Authorization: `Bearer ${this.token}`,
                            },
                        })
                        console.log(response);
                        if(response.status == 200){
                             this.fetchRequests();
                        }
                    } catch (error) {
                        console.log(error)
                    }
                },
                reject: () => {
                    console.log("Delete cancelled");
                },
            });

        }
    },
};
</script>
