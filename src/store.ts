import Vuex from "vuex";
import containerState from "./modules/containerState";

const store = () =>
  new Vuex.Store({
    modules: {
      containerState
    }
  });
export default store;
