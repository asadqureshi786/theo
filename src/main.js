import { createApp } from 'vue'
import App from './App.vue'
import 'primeicons/primeicons.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import DatePicker from 'primevue/datepicker';
import InputText from 'primevue/inputtext';
import Dialog from 'primevue/dialog';
import Select from 'primevue/select';
import Editor from 'primevue/editor';
import FileUpload from 'primevue/fileupload';
import ProgressSpinner from 'primevue/progressspinner';
import ConfirmationService from 'primevue/confirmationservice';
import ConfirmDialog from 'primevue/confirmdialog';
import SpeedDial from 'primevue/speeddial';
import { createPinia } from 'pinia'
// import Axios
import axios from 'axios';
// Language 
import i18n from './i18n'







// CSS Animate
import 'animate.css';

// AOS Animate
import AOS from 'aos';
import 'aos/dist/aos.css';


// Vue Upload JS Plugin Start
import vueFilePond from 'vue-filepond'
import 'filepond/dist/filepond.min.css'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

import FilePondPluginImageResize from 'filepond-plugin-image-resize';
import FilePondPluginImageCrop from 'filepond-plugin-image-crop';
import FilePondPluginImageTransform from 'filepond-plugin-image-transform';

const FilePond = vueFilePond(
    FilePondPluginFileValidateType,
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginImageCrop,
    FilePondPluginImageTransform
  )
// Vue Upload JS Plugin End


// Vue Toastification Start
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
// Vue Toastification End


// Aos JS Start
// Initialize AOS
AOS.init({
    duration: 1000, // Animation duration in milliseconds
    once: true,     // Animation only happens once
    easing: 'ease-in-out', // Easing style
  });
// Aos JS End




import '@/assets/style/style.css'
import '@/assets/style/web.css'
import route from './route'

const app = createApp(App);

app.use(PrimeVue,{
    theme: {
        preset: Aura
    }
});

app.component('DatePicker', DatePicker);
app.component('InputText', InputText);
app.component('Dialog', Dialog);
app.component('FilePond', FilePond) // Register globally
app.component('Select', Select) // Register globally
app.component('Editor', Editor) // Register globally
app.component('FileUpload', FileUpload) // Register globally
app.component('ProgressSpinner', ProgressSpinner) // Register globally
app.component('ConfirmDialog', ConfirmDialog) // Register globally
app.component('SpeedDial', SpeedDial) // Register globally

app.use(Toast,  {
    // You can set your default options here
    position: 'top-right',
    timeout: 3000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true
});
app.use(ConfirmationService);

// Make AOS globally available
app.config.globalProperties.$AOS = AOS;

// SetBase Url
app.config.globalProperties.$baseURL = 'http://192.168.100.19:84/';
// app.config.globalProperties.$baseURL = 'https://jetnetixsolutions.com/Backend/';
// app.config.globalProperties.$baseURL = 'https://cac1-2407-aa80-14-a690-3544-273a-2bf2-b871.ngrok-free.app/';
// axios.defaults.withCredentials = true




 
// axios.defaults.withCredentials = true;

const pinia = createPinia()

app.use(route);
app.use(i18n);
app.use(pinia);
app.mount('#app');
// createApp(App).use(PrimeVue).use(route).mount('#app');

