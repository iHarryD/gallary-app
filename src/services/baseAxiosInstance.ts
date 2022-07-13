import axios from "axios";

export default function baseAxiosInstance() {
  return axios.create({
    baseURL: "https://b-gallery-app.vercel.app",
  });
}
