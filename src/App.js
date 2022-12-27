import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Box } from "@mui/material";

function App() {
  return (
    <Box style={{ height: "100%", overflow:'hidden'}} flex={1}>
      <Navbar />
      <Box style={{ height: "100%", overflow:'hidden' }} flex={1}>
        <Home />
      </Box>
    </Box>
  );
}

export default App;
