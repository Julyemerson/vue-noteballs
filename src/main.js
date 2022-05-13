import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./Routes";
import App from "./App.vue";

import "@/assets/styles/tailwind.scss";

createApp(App).use(createPinia()).use(router).mount("#app");
