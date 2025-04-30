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



// Vue Upload JS Plugin
import vueFilePond from 'vue-filepond'
import 'filepond/dist/filepond.min.css'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'


const FilePond = vueFilePond(
    FilePondPluginFileValidateType,
    FilePondPluginImagePreview
  )





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

app.use(route);
app.mount('#app');
// createApp(App).use(PrimeVue).use(route).mount('#app');

