import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import AxiosCreate from './config/interceptors';
import axios from 'axios';
AxiosCreate(axios);
createApp(App)
  .use(store)
  .use(router)
  .mount('#app');
