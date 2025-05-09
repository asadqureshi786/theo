<template>
    <div class="agent_view">
         <!-- Page Header Section Start -->
        <div class="page_header">
            <div class="heading_icon " >
                <div id="goBack" @click="goback" class="cursor-pointer" ><i class="pi pi-chevron-left"></i></div>
               <h3 class="hd">Agent View</h3>
            </div>
        </div>
        <!-- Page Header Section Ennd -->


        <!-- Documents Section Start -->
        <div class="light_head mt-5">
            Documents
        </div>
         <Documents class="" />
        <!-- Documents Section Start -->


        <!-- Table Section Start -->
         <div class="light_head mb-3 mt-5">
            Transfer History
        </div>
        <Simpletable class="" :headers="dealHeaders" :data="deals"/>
        <!-- Table Section Start -->
    </div>
</template>

<script>
// Components
import Documents from "@/components/Documents.vue"
import Simpletable from "@/components/Simpletable.vue"


export default {
    name : 'Agentview',
    components : {
        Documents,
        Simpletable,
    },
    data(){
        return{
            dealHeaders: ["Date", "Player Name", "Club Name", "Role", "Contact End", "Status"],
        deals: [
            ["Dec 12, 2023", "Enzo Delgado", "Marseille", "Striker", "USA","<button</button>"],
            // Add more deal data here
        ],
        }
    },
    methods : {
        goback(){
            window.history.back();
        }
    }
}
</script>