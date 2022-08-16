import { createApp } from 'vue';

import ActivateButton from './components/ActivateButton.vue';
import GetData from './components/GetData.vue';
import App from './App.vue';

const app = createApp(App);

app.component('activate-button', ActivateButton);
app.component('get-data', GetData);

app.mount("#app");
