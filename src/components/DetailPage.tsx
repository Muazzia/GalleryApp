import { Box, Image, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import usePhoto from "../hooks/usePhoto";

const DetailPage = () => {
  const params = useParams();
  const id = params.id || "0";
  const { data, error, isLoading } = usePhoto(parseInt(id));

  if (isLoading) return <Spinner />;
  if (error) return <Text color={"red"}>Image not found</Text>;
  if (data)
    return (
      <Box marginX={{ base: "10vw", lg: "70px" }} mt={"10px"}>
        <Image
          src={data.src.large2x}
          objectFit={"contain"}
          alt={data.alt}
          h={"80vh"}
          width={"90vw"}
        />
      </Box>
    );
  // throw error;
};

export default DetailPage;
