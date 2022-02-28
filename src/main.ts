import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';

const store = createPinia();
const i18n = createI18n({
  locale: 'en',
  messages: {
    en: {
      app: {
        title: 'Mini Rockbot',
        playing: 'Now Playing',
        queue: 'Coming up',
        topArtists: 'Top Artists',
        more: 'more...',
        searchArtists: 'Search Artists'
      }
    }
  }
});

const app = createApp(App)
app.use(ElementPlus)
app.use(store)
app.use(i18n)
app.mount('#app');
