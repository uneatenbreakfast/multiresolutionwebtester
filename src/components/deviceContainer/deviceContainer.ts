import { mapGetters, mapActions } from "vuex";
import { Draggable } from "draggable-vue-directive";

import "./device-container.scss";

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
    ...mapActions(["setDraggedState"]),

    clickedOnContainer(e: any) {
      this.setDraggedState(true);
    },
    mouseupOnContainer(e: any) {
      this.setDraggedState(false);
    }
  },
  computed: {
    ...mapGetters(["getIsBeginDragged"]),

    getSizeClasses() {
      switch (this.size) {
        case "desktop":
          return `desktop-size`;
        case "tablet":
          return `tablet-size size-container__draggable`;
        case "mobile":
          return `mobile-size size-container__draggable`;
      }
      return "";
    }
  }
};

export default deviceContainer;
