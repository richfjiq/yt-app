import axios from "axios";

const KEY = "AIzaSyDiex34NmVFecgDeBpZr2HjazdE9U5NHNU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
