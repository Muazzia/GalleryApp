import { Box } from "@chakra-ui/react";
import "./HomePage.css";
import PhotoGrid from "./components/PhotoGrid";
import SearchBar from "./components/SearchBar";

function App() {
  // if (search)
  return (
    <>
      <Box className="box" marginTop={20}>
        <SearchBar />
      </Box>
      <PhotoGrid />
    </>
  );
}

export default App;
