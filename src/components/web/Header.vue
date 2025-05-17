<template>

    <header>
        <div class="main_header" >
            <router-link to="home" class="logo">
                <img :src="logo" class="img-fluid" alt="">
            </router-link>

           


            <div class="nav_links desktop_view d-none ">
                <ul>
                    <li>
                        <a href="#home" exact active-class="active" class="nav_item">
                            <span class="text">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#Why" exact active-class="active" class="nav_item">
                            <span class="text">Who its's for</span>
                        </a>
                    </li>
                    <li>
                        <a href="#plans" exact active-class="active" class="nav_item">
                            <span class="text">Subscription</span>
                        </a>
                    </li>
                    <li>
                        <a href="#contact" exact active-class="active" class="nav_item">
                            <span class="text">Contact us</span>
                        </a>
                    </li>
                </ul>
            </div>
            <!-- <button class="btn btn-primary  sign_up desktop_view" >Sign up</button> -->


            <div class="mobile_menu d-none" >
                <div class="hamburger"  @click="toggleMenu" id="hamburger">
                    <i class="pi pi-bars"></i>
                </div>
                <div :class="['menu', { menu_show: isMenuOpen }]">
                    <ul>
                    <li>
                        <a href="#home" @click="closeMenu" exact active-class="active" class="nav_item">
                            <span class="text">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#Why" @click="closeMenu" exact active-class="active" class="nav_item">
                            <span class="text">Who its's for</span>
                        </a>
                    </li>
                    <li>
                        <a href="#plans" @click="closeMenu" exact active-class="active" class="nav_item">
                            <span class="text">Subscription</span>
                        </a>
                    </li>
                    <li>
                        <a href="#contact" @click="closeMenu" exact active-class="active" class="nav_item">
                            <span class="text">Contact us</span>
                        </a>
                    </li>
                </ul>
                </div>
            </div>

        </div>
    </header>

</template>

<script>
import logo from '@/assets/images/logo.png'
import user1 from '@/assets/images/users/user1.png'

export default {
    name: "Header",
    data() {
        return (
            {
                logo: logo,
                user1: user1,
                isMenuOpen: false,
            }
        )
    },
    methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu(){
        this.isMenuOpen = false;
    }
  },
}
</script>


