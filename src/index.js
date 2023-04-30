import { createApp } from "vue";
import { createPinia } from "pinia";
import "./assets/scss/main.scss";
import Page from "./Page.vue";

const pinia = createPinia();

createApp(Page).use(pinia).mount("#page");