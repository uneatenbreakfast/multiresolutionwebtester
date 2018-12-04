<!-- src/components/Hello.vue -->
<template>
  <div>
    <div class="url-container">
      <input class="url-container__link-input" v-model="targetUrlInput">
      <button class="url-container__submit-button" @click="setTargetUrl">Go</button>
    </div>

    <size-container size="desktop" :targetUrl="targetUrl"/>
    <size-container size="tablet" :targetUrl="targetUrl"/>
    <size-container size="mobile" :targetUrl="targetUrl"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      targetUrlInput: "https://toyota/",
      targetUrl: ""
    };
  },
  methods: {
    setTargetUrl() {
      this.targetUrl = this.targetUrlInput;
    }
  }
});
</script>

<style>
.url-container {
  display: flex;
  border: 1px solid gray;
  padding: 10px;
  border-radius: 5px;
}

.url-container__link-input {
  width: 100%;
  padding: 10px;
}

.url-container__submit-button {
  width: 100px;
  padding: 10px;
}
</style>
