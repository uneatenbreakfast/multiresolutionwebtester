export const app = {
  name: "app",
  template: require("./app.html"),
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
};
export default app;
