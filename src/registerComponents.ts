import Vue from "vue";
import Vuex from "vuex";
import deviceContainer from "./components/deviceContainer/deviceContainer";

const registerComponent = () => {
  Vue.component(deviceContainer.name, deviceContainer);
};
export default registerComponent;
