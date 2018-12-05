import Vue from "vue";
import Vuex from "vuex";
import createStore from "./store";
import registerComponent from "./registerComponents";
import "./index.scss";

Vue.use(Vuex);
registerComponent();
const store = createStore();

let v = new Vue({
  el: "#app",
  store,
  template: `
        <div>
            <app  />
        </div>
    `
});
