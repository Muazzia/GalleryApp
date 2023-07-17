import { useInfiniteQuery } from "@tanstack/react-query";
import ApiClient from "../services/apiClient";

export interface Photo {
  alt: string;
  id: number;
  src: {
    original: string;
    small: string;
    medium: string;
    large: string;
    large2x: string;
  };
}

export interface Photos {
  page: number;
  photos: Photo[];
}
const api = new ApiClient<Photos>("/curated");

const usePhotos = () => {
  return useInfiniteQuery({
    queryKey: ["photos"],
    queryFn: () => api.getAll(),
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default usePhotos;
