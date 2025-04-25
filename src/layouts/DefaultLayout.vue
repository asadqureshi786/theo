<template>
    <Header/>
    <div class="main_wrapper">
        <div class="container-fluid">
            <router-view></router-view>
        </div>
    </div>
    <Footer/>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
    name : "DefaultLayout",
    components : {
        Header,
        Footer
    }
}
</script>


