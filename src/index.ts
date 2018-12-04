import Vue from 'vue';
import App from './components/App.vue';
import SizeContainer from './components/SizeContainer.vue';

Vue.component('size-container', SizeContainer);

let v = new Vue({
  el: '#app',
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
