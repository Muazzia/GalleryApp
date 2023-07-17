import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.pexels.com/v1/",
  headers: {
    Authorization: "mnWm7bgNuCMKN5Zg1IzpGBZjT28bTiJJl7pKgqvjesKScudLTGB5rX1C",
  },
});

class ApiClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = () => {
    return axiosInstance.get<T>(this.endpoint).then((res) => res.data);
  };
  getSearch = (query: string, pageParam: any) => {
    return axiosInstance
      .get<T>(this.endpoint, {
        params: {
          query: query,
          page: pageParam,
        },
      })
      .then((res) => res.data);
  };
  getPhoto = (id: number) => {
    return axiosInstance
      .get<T>(`${this.endpoint}/${id}`)
      .then((res) => res.data);
  };
}

export default ApiClient;
