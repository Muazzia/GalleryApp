import {
  Box,
  Button,
  Flex,
  Image,
  Select,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { saveAs } from "file-saver";

import usePhoto from "../hooks/usePhoto";
import { Photo } from "../hooks/usePhotos";
import { useState } from "react";

const DetailPage = () => {
  const params = useParams();
  const id = params.id || "0";
  const { data, error, isLoading } = usePhoto(parseInt(id));

  const downloadType: Photo["src"] = {
    original: "original",
    landscape: "landscape",
    large: "large",
    large2x: "large2x",
    medium: "medium",
    portrait: "portrait",
    small: "small",
  };
  // const [downloadType, setDownloadType] = useState("");
  const [type, setType] = useState<keyof Photo["src"]>("original");

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value as "original");
  };

  const handleClick = () => {
    let url = data?.src[type] || "";
    saveAs(url, data?.alt);
  };

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
        <Flex justifyContent={"center"} mt={4} gap={3}>
          <Box>
            <Select onChange={handleOnChange}>
              {Object.keys(downloadType).map((k) => (
                <option value={k}>{k}</option>
              ))}
            </Select>
          </Box>
          <Button onClick={handleClick} colorScheme="teal" size="md">
            Download
          </Button>
        </Flex>
      </Box>
    );
  // throw error;
};

export default DetailPage;
