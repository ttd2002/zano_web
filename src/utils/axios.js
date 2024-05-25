import axios from "axios";

//

import { BASE_URL } from "../config";

const axisoInstance = axios.create({ baseURL: BASE_URL });

axios.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject((error.response && error.response) || "Something went wrong")
);

export default axisoInstance;