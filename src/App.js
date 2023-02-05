import { Box } from "@mui/material";
import { Navigate, Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import RouteLayout from "./components/RouteLayout"
import CityLayout from "./components/CityLayout";
import HomeLayout from "./Views/Home"
import HelpLayout from "./Views/Help"
import AboutLayout from "./Views/About"
import data from "./assets/masterList.json"

const {Pages, MasterList} = data

function App() {
  const Home = Pages[0],
        Help = Pages[1],
        About = Pages[2],
        Cities = MasterList[0].submenu,
        CagayanDeOro = MasterList[1].submenu,
        Cebu = MasterList[2].submenu

  return (
    <Box sx={{ height:'100%', overflow:'hidden'}} flex={1}>
      <Navbar prop={data} />
      <Box sx={{ height:'100%', overflow:'hidden' }} flex={1}>
        <Routes>

          {/* City route */}
          {
            Cities.map((data) => (
              <Route key="route.name" path={data.path} 
                element={<CityLayout data={data} />} 
              />  
            ))
          }

          {/* Cagayan de oro Route */}
          {
            CagayanDeOro.map((route) => (
              <Route key="route.name" path={route.path} element={<RouteLayout data={route} />} />  
            ))
          }
          
          {/* Cebu Route */}
          {
            Cebu.map((route) => (
              <Route key="route.name" path={route.path} element={<RouteLayout data={route} />} />  
            ))
          }

          {/* Home */}
          <Route path={Home.path} element={<HomeLayout />} />
          
          {/* Help */}
          <Route path={Help.path} element={<HelpLayout />} />

          {/* About */}
          <Route path={About.path} element={<AboutLayout />} />
          
          {/* Default page */}
          <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>
      </Box>
    </Box>
  );
}

export default App;
