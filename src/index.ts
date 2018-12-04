import Vue from "vue";
import Vuex from "vuex";
import store from "./store";
import registerComponent from "./registerComponents";

Vue.use(Vuex);
registerComponent();

let v = new Vue({
  el: "#app",
  store,
  template: `
        <div>
            <app  />
        </div>
    `
});
