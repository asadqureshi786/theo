<template>
    <div class="footer">
        <div class="container">
            <div class="list">
                <a href="#home" class="logo">
                    <img :src="logo" class="img-fluid" alt="">
                </a>
                <div class="menu">
                   <div class="first">
                    <a href="#home" class="link">Home</a>
                    <a href="#Why" class="link">Who it's for</a>
                    <a href="#plans" class="link">Subscription</a>
                    <a href="#contact" class="link">Contact Us</a>
                   </div>
                   <p class="text last-bottom" >2025 © THEO All rights reserved.</p>
                </div>
                <div class="follow_us">
                    <p class="label">Follow Us:</p>
                    <div class="links">
                        <a class="link">
                            <i class="pi pi-instagram" ></i>
                        </a>
                        <a class="link">
                            <i class="pi pi-facebook" ></i>
                        </a>
                    </div>
                </div>  
            </div>
        </div>
    </div>
</template>

<script>
import logo from '@/assets/images/logo.png'

    export default {
        name : 'Footer',
        data() {
        return (
            {
                logo: logo,
            }
        )
    }
    }
</script>
