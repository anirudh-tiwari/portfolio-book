import axios from "axios";
const baseURL = "https://getautonami.com/";

var fetchRequests = {
  get: (endpoints) => {
    return axios.get(baseURL + endpoints).catch((err) => {
      console.log("An error occurred");
    });
  },
};
export default fetchRequests;
