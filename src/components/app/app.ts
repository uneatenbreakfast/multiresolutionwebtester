import "./app.scss";

export const app = {
  name: "app",
  template: require("./app.html"),
  data() {
    return {
      targetUrlInput: "https://localhost/",
      targetUrl: "",
      mobileModeOn: true,
      tabletModeOn: true
    };
  },
  mounted() {
    this.setTargetUrl();
  },
  methods: {
    setTargetUrl() {
      this.targetUrl = this.targetUrlInput;
    },
    refreshUrl() {
      this.targetUrl = this.targetUrl + "/";
    }
  }
};
export default app;
