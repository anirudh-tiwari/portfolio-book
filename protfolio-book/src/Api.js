import fetchRequests from "./Requests";
const Api = {
  getUsers: () => {
    return fetchRequests.get("users/index.json");
  },
};
export default Api;
