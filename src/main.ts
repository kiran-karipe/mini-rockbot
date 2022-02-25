import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n'

const store = createPinia();
const i18n = createI18n();
createApp(App).use(ElementPlus).use(store).use(i18n).mount('#app');
