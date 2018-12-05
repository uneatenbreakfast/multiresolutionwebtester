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
    },
    scroll: {
      type: Function
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

    setTimeout(this.addListeners, 5000);
  },
  methods: {
    ...mapActions(["setDraggedState"]),

    addListeners() {
      console.log("--");

      this.$refs.devcont.onscroll = () => {
        console.log("DDDxxxx 1");
      };

      document.addEventListener("wheel", () => {
        console.log("DDD");
      });

      this.$refs.devcont.addEventListener("wheel", () => {
        console.log("DDD");
      });

      this.$refs.devcont.contentWindow.addEventListener("wheel", () => {
        console.log("DDD wee");
      });

      this.$refs.devcont.onscroll = () => {
        console.log("DDDxxxx 1");
      };
    },
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
