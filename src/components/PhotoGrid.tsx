import { Box, SimpleGrid, Spinner } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useSearchPhotos from "../hooks/useSearchPhotos";
import useSearch from "../store";
import PhotoComp from "./PhotoComp";
import SkeletonComp from "./SkeletonComp";
import { Link } from "react-router-dom";

const PhotoGrid = () => {
  const search = useSearch((s) => s.search);
  const { data, isLoading, fetchNextPage, hasNextPage } =
    useSearchPhotos(search);
  const totalItems =
    data?.pages.reduce((acc, page) => acc + page.photos.length, 0) || 0;

  const skeArr = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <Box marginX={{ base: "10px", md: "20px", lg: "40px" }} marginY={10}>
        <InfiniteScroll
          dataLength={totalItems}
          next={() => fetchNextPage()}
          hasMore={hasNextPage ? true : false}
          loader={<Spinner />}
        >
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={3} mb={4}>
            {isLoading
              ? skeArr.map((s) => <SkeletonComp key={s} />)
              : data?.pages.map((page, index) => (
                  <React.Fragment key={index}>
                    {page.photos.map((photo) => (
                      <Link key={photo.id} to={`/${photo.id}`}>
                        <PhotoComp image={photo} />
                      </Link>
                    ))}
                  </React.Fragment>
                ))}
          </SimpleGrid>
        </InfiniteScroll>
      </Box>
    </>
  );
};

export default PhotoGrid;
