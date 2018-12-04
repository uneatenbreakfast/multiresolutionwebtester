<!-- src/components/Hello.vue -->
<template>
  <div
    v-draggable="draggableValue"
    class="size-container"
    :class="getSizeClasses"
    @mousedown="clickedOnContainer"
  >
    <div class="size-container__draggable-handler" :ref="handleId" :style="getDragStyleString()"></div>

    <iframe class="size-container__iframe" :src="targetUrl"></iframe>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Draggable } from "draggable-vue-directive";

export default Vue.extend({
  name: "size-container",
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
      dragging: false,
      x: 0,
      y: 0,
      handleId: "handle-id",
      draggableValue: {
        handle: undefined
      }
    };
  },
  mounted() {
    (<any>this.draggableValue).handle = this.$refs[this.handleId];
  },
  methods: {
    clickedOnContainer(e: any) {
      var rect = e.target.getBoundingClientRect();

      const handle = this.$refs[this.handleId];

      this.x = e.clientX - rect.left; //x position within the element.
      this.y = e.clientY - rect.top - 25; //y position within the element.
    },
    getDragStyleString(): string {
      return `top:${this.y}px;left:${this.x}`;
    },
    startDrag() {
      this.dragging = true;
    },
    stopDrag() {
      this.dragging = false;
    },
    doDrag(e: any) {
      if (this.dragging) {
        var rect = e.target.getBoundingClientRect();

        console.log("--------");
        console.log(rect);

        this.x = e.clientX - rect.left; //x position within the element.
        this.y = e.clientY - rect.top; //y position within the element.

        console.log(e, this.x, this.y);
        console.log("y: ", e.pageY, rect.top, e.target);
      }
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
});
</script>

<style>
.size-container {
  border: 1px red solid;
  display: block;
}
.size-container__iframe {
  width: 100%;
  height: 100%;
}
.size-container__draggable-handler {
  display: block;
  background: red;
  width: 50px;
  height: 50px;
  position: absolute;
}

.size-container__draggable {
  position: absolute;
  box-shadow: 15px 15px 35px rgba(0, 0, 0, 0.5);
  padding: 15px;
  background: black;
  border-radius: 6px;
  cursor: move;
}

/* Resolutions */
.desktop-size {
  width: 100vw;
  height: 100vh;
}
.tablet-size {
  /* iPad */
  width: 768px;
  height: 1024px;
}
.mobile-size {
  /* Iphone5 */
  width: 320px;
  height: 568px;
}
</style>
