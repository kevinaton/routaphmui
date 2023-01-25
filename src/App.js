import { Box } from "@mui/material";
import { Navigate, Route, Routes } from "react-router";
import Navbar from "./Views/Navbar";
import MasterList from "./assets/masterList"
import RouteLayout from "./components/RouteLayout"
import CityLayout from "./components/CityLayout";

function App() {

  return (
    <Box sx={{ height:'100%', overflow:'hidden'}} flex={1}>
      <Navbar prop={MasterList} />
      <Box sx={{ height:'100%', overflow:'hidden' }} flex={1}>
        <Routes>

          {/* City and About us route */}
          {
            MasterList[0].submenu.map((data) => (
              <Route key="route.name" path={data.path} element={<CityLayout data={data} />} />  
            ))
          }

          {/* Cagayan de oro Route */}
          {
            MasterList[1].submenu.map((route) => (
              <Route key="route.name" path={route.path} element={<RouteLayout data={route} />} />  
            ))
          }
          
          {/* Cebu Route */}
          {
            MasterList[2].submenu.map((route) => (
              <Route key="route.name" path={route.path} element={<RouteLayout data={route} />} />  
            ))
          }
          
          <Route path="*" element={<Navigate to="city/cagayandeorocity" replace />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
