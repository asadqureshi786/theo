<template>
    <Header/>
    <div class="agent_layout main_wrapper">
        <div class="container-fluid">
            <router-view></router-view>
        </div>
    </div>
    <Footer/>
</template>

<script>
import Header from "@/components/agents/Header.vue"
import Footer from "@/components/agents/Footer.vue"
export default {
    name : "AgentLayout",
    components : {
        Header,
        Footer
    }
}
</script>


