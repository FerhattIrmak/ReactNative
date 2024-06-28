import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer FSlKYchJEmNTcUeQuyrsZ9zUGcjDrx6x8FbwM10gyTTQsEgmj_FoAEYt9v8R1sN8h4eUXMifVSHDnXyFTuRtsq9zSoCFo5ZJeGSDPwnmk5MsFh7_9rEVx8J3D-FYZnYx",
  },
});
