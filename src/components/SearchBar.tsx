import {
  Box,
  Heading,
  Input,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import { useRef } from "react";
import useSearch from "../store";
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  const setSearch = useSearch((s) => s.setSearch);
  const ref = useRef<HTMLInputElement>(null);
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={4}
      >
        <Heading as={"h1"} size={"2xl"} mb={5}>
          SnapShot
        </Heading>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (ref.current) {
              setSearch(ref.current?.value);
            }
          }}
        >
          <InputGroup>
            <Input
              width={"100%"}
              placeholder="Search..."
              ref={ref}
              onChange={(e) => {
                if (e.target.value === "") setSearch("");
              }}
            />
            <InputRightAddon as={"button"} children={<BsSearch />} />
          </InputGroup>
        </form>
      </Box>
    </>
  );
};

export default SearchBar;
