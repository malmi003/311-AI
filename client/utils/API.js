import axios from "axios";

export default {
  getResponse: function(query) {
    return axios.post("/api", { params: { query: query } });
  }
};