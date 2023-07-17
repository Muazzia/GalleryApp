import { useInfiniteQuery } from "@tanstack/react-query";
import ApiClient from "../services/apiClient";
import { Photos } from "./usePhotos";

const useSearchPhotos = (name: string) => {
  const str = name ? "/search" : "/curated";
  const api = new ApiClient<Photos>(str);

  return useInfiniteQuery({
    queryKey: ["search", name],
    queryFn: ({ pageParam }) => api.getSearch(name, pageParam),
    staleTime: 24 * 60 * 60 * 1000,
    getNextPageParam: (lastPage) => {
      return lastPage.page + 1;
    },
  });
};

export default useSearchPhotos;
