import Vue from "vue";
import Vuex from "vuex";
import deviceContainer from "./components/deviceContainer/deviceContainer";
import app from "./components/app/app";

const registerComponent = () => {
  Vue.component(deviceContainer.name, deviceContainer);
  Vue.component(app.name, app);
};
export default registerComponent;
