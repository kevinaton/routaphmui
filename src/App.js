import { Box } from "@mui/material";
import { Navigate, Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import MasterList from "./assets/masterList"
import RouteLayout from "./components/RouteLayout"
import CityLayout from "./components/CityLayout";
import About from "./Views/About";

function App() {

  return (
    <Box sx={{ height:'100%', overflow:'hidden'}} flex={1}>
      <Navbar prop={MasterList} />
      <Box sx={{ height:'100%', overflow:'hidden' }} flex={1}>
        <Routes>

          {/* City route */}
          {
            MasterList[1].submenu.map((data) => (
              <Route key="route.name" path={data.path} 
                element={<CityLayout data={data} />} 
              />  
            ))
          }

          {/* Cagayan de oro Route */}
          {
            MasterList[2].submenu.map((route) => (
              <Route key="route.name" path={route.path} element={<RouteLayout data={route} />} />  
            ))
          }
          
          {/* Cebu Route */}
          {
            MasterList[3].submenu.map((route) => (
              <Route key="route.name" path={route.path} element={<RouteLayout data={route} />} />  
            ))
          }

          {/* About */}
          <Route path={MasterList[0].path} element={<About />} />
          
          {/* Default page */}
          <Route path="*" element={<Navigate to="city/cagayandeorocity" replace />} />

        </Routes>
      </Box>
    </Box>
  );
}

export default App;
