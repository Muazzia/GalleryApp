import { Box, Skeleton } from "@chakra-ui/react";

const SkeletonComp = () => {
  return (
    <Skeleton>
      <Box height={"300"}></Box>
    </Skeleton>
  );
};

export default SkeletonComp;
