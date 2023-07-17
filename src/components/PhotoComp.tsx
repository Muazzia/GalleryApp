import { Image } from "@chakra-ui/react";
import { Photo } from "../hooks/usePhotos";

interface Props {
  image: Photo;
  size?: "medium" | "original" | "small" | "large" | "large2x";
}

const PhotoComp = ({ image, size }: Props) => {
  const s = size ? size : "large2x";
  return (
    <Image
      objectFit={"cover"}
      src={image.src[s]}
      alt={image.alt}
      // boxSize={"xl"}
      width={"100%"}
      height={{ base: "350px", md: "400px", lg: "550px" }}
    />
  );
};

export default PhotoComp;
