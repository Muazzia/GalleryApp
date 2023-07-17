import { useParams } from "react-router-dom";
import { Spinner, Text } from "@chakra-ui/react";

import usePhoto from "../hooks/usePhoto";
import PhotoComp from "./PhotoComp";

const DetailPage = () => {
  const params = useParams();
  const id = params.id || "0";
  const { data, error, isLoading } = usePhoto(parseInt(id));

  if (isLoading) return <Spinner />;
  if (error) return <Text color={"red"}>Image not found</Text>;
  if (data) return <PhotoComp image={data} size="original" />;
  // throw error;
};

export default DetailPage;
