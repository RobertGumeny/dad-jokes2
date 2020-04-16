import Vue from "vue";
// @ts-ignore
import App from "./App.vue";
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from "./router";
import store from "./store";
import { Auth0Plugin, onAuth } from "@bcwdev/auth0-vue";
import { domain, clientId, audience } from "./authConfig";

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  audience,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});
Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  render: function (h) {
    return h(App);
  }
}).$mount("#app");
