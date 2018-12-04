import Vue from "vue";
import { Draggable } from "draggable-vue-directive";

const deviceContainer = {
  name: "device-container",
  template: require("./device-container.html"),
  props: {
    size: {
      type: String,
      required: true
    },
    targetUrl: {
      type: String
    }
  },
  directives: {
    Draggable
  },
  data() {
    return {
      dragActive: false,
      handleId: "handle-id",
      draggableValue: {
        handle: undefined
      }
    };
  },
  mounted() {
    this.draggableValue.handle = this.$refs[this.handleId];
  },
  methods: {
    clickedOnContainer(e: any) {
      this.dragActive = true;
    },
    mouseupOnContainer(e: any) {
      this.dragActive = false;
    }
  },
  computed: {
    getSizeClasses() {
      switch (this.size) {
        case "desktop":
          return "desktop-size";
        case "tablet":
          return "tablet-size size-container__draggable";
        case "mobile":
          return "mobile-size size-container__draggable";
      }
      return "";
    }
  }
};

export default deviceContainer;
