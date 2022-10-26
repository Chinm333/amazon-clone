import axios from "axios";
// axios fetching library - it easily help to use API
const instance = axios.create({
  baseURL: "http://127.0.0.1:5001/clone-621cc/us-central1/api", // cloud function
});

export default instance;
