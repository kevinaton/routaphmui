import Navbar from "./components/Navbar";
import Cagayan from "./components/CagayanDeOroCity";
import { Box } from "@mui/material";
import { Navigate, Route, Routes } from "react-router";
import Cebu from "./components/Cebu";
import About from "./components/About";

function App() {

  // List of city with route
  const cityList = [
    {name:'Cagayan de Oro City', path:'route/cagayandeorocity'},
    {name:'Cebu City', path:'route/cebucity'}
  ];

  return (
    <Box sx={{ height:'100%', overflow:'hidden'}} flex={1}>
      <Navbar prop={cityList} />
      <Box sx={{ height:'100%', overflow:'hidden' }} flex={1}>
        <Routes>
          <Route path="route/cagayandeorocity" element={<Cagayan />} />
          <Route path="route/cebucity" element={<Cebu />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Navigate to="route/cagayandeorocity" replace />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
