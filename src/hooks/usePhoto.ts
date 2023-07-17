import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/apiClient";
import { Photo } from "./usePhotos";

const api = new ApiClient<Photo>("/photos");
const usePhoto = (id: number) => {
  return useQuery({
    queryKey: ["detailPhoto", id],
    queryFn: () => api.getPhoto(id),
    staleTime: 60 * 24 * 60 * 1000,
  });
};

export default usePhoto;
