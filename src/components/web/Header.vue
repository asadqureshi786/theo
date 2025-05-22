<template>
  <header>
    <div class="main_header">
      <router-link to="home" class="logo">
        <img :src="logo" class="img-fluid" alt="" />
      </router-link>

      <div class="nav_links desktop_view d-none">
        <ul>
          <li><a href="#home" class="nav_item"><span class="text">Home</span></a></li>
          <li><a href="#Why" class="nav_item"><span class="text">Who it's for</span></a></li>
          <li><a href="#plans" class="nav_item"><span class="text">Subscription</span></a></li>
          <li><a href="#contact" class="nav_item"><span class="text">Contact us</span></a></li>
        </ul>
      </div>

      <div class="mobile_menu d-none">
        <div class="hamburger" @click="toggleMenu" id="hamburger">
          <i class="pi pi-bars"></i>
        </div>
        <div :class="['menu', { menu_show: isMenuOpen }]">
          <ul>
            <li><a href="#home" @click="closeMenu" class="nav_item"><span class="text">Home</span></a></li>
            <li><a href="#Why" @click="closeMenu" class="nav_item"><span class="text">Who it's for</span></a></li>
            <li><a href="#plans" @click="closeMenu" class="nav_item"><span class="text">Subscription</span></a></li>
            <li><a href="#contact" @click="closeMenu" class="nav_item"><span class="text">Contact us</span></a></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Language Dropdown Start -->
    <div ref="dropdownRef" class="language-switcher language" @click="toggleDropdown">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.959 1C13.4603 3.73835 14.8817 7.29203 14.959 11C14.8817 14.708 13.4603 18.2616 10.959 21M10.959 1C8.4577 3.73835 7.03623 7.29203 6.95898 11C7.03623 14.708 8.4577 18.2616 10.959 21M10.959 1C5.43614 1 0.958984 5.47715 0.958984 11C0.958984 16.5228 5.43614 21 10.959 21M10.959 1C16.4818 1 20.959 5.47715 20.959 11C20.959 16.5228 16.4818 21 10.959 21M1.459 8H20.459M1.45898 14H20.459"
          stroke="#1E1E1E"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <div class="text">
        <span class="icon"><i class="pi pi-angle-down"></i></span>
      </div>

      <div v-if="dropdownOpen" class="dropdown">
        <div @click.stop="changeLanguage('en')">English</div>
        <div @click.stop="changeLanguage('fr')">Français</div>
      </div>
    </div>
    <!-- Language Dropdown End -->
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useI18n } from 'vue-i18n';
import logo from '@/assets/images/logo.png';
import user1 from '@/assets/images/users/user1.png';

const props = defineProps({
  handleInteraction: Function
});

const { locale } = useI18n();

const isMenuOpen = ref(false);
const dropdownOpen = ref(false);
const dropdownRef = ref(null);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
}

function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value;
}

function changeLanguage(lang) {
  locale.value = lang;
  localStorage.setItem('lang', lang);
  dropdownOpen.value = false;
  props.handleInteraction?.(); // optional chaining in case it's not provided
}

function handleClickOutside(event) {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    dropdownOpen.value = false;
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
/* Your styles here */
</style>
