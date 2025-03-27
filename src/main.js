import { createApp } from "vue";
import App from "./app/ui/App.vue";
import store from "./app/store/store";
import router from "./app/router/router";

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
