import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "63cff4df72a64b35bfe63eca8601712d",
  },
});
