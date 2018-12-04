<!-- src/components/Hello.vue -->
<template>
  <div
    :ref="handleId"
    v-draggable="draggableValue"
    class="size-container"
    :class="getSizeClasses"
    @mousedown="clickedOnContainer"
    @mouseup="mouseupOnContainer"
  >
    <iframe
      class="size-container__iframe"
      :class="{'size-container__draggable-active': dragActive}"
      :src="targetUrl"
    ></iframe>
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
      dragActive: false,
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
});
</script>

<style>
.size-container {
  display: block;
}
.size-container__iframe {
  width: 100%;
  height: 100%;
}
.size-container__draggable-handler {
  display: block;
  width: 50px;
  height: 50px;
  position: absolute;
  background: red;
}

.size-container__draggable {
  position: absolute;
  box-shadow: 15px 15px 35px rgba(0, 0, 0, 0.5);
  padding: 15px;
  background: black;
  border-radius: 6px;
  cursor: move;
}

.size-container__draggable-active {
  pointer-events: none;
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
