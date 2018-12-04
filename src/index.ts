import Vue from 'vue';
import Vuex from 'vuex'
import App from './components/App.vue';
import SizeContainer from './components/SizeContainer.vue';



Vue.use(Vuex)
Vue.component('size-container', SizeContainer);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})



let v = new Vue({
  el: '#app',
  store,
  template: `
        <div>
            <app  />
        </div>
    `,
  data: {},
  components: {
    App,
    SizeContainer
  }
});
