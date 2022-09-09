import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID YvJ2jPeBVraxbhjtADqCyPfsQAIYD6lY9pEGz-YWUXU",
  },
});
