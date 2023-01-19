import { Box } from "@mui/material";
import { Navigate, Route, Routes } from "react-router";
import Navbar from "./components/Navbar";

// Cityies and about
import Cagayan from "./components/Cities/CagayanDeOroCity";
import Cebu from "./components/Cities/Cebu";
import About from "./components/About";

// Cagayan de oro routes
import RD from "./components/RouteCagayandeoro/rd";
import RC from "./components/RouteCagayandeoro/rc";

// Cebu Routes
import C03B from "./components/RouteCebu/03b.js"
import C03L from "./components/RouteCebu/03l.js"
import C03Q from "./components/RouteCebu/03q.js"
import C04B from "./components/RouteCebu/04b.js"
import C04H from "./components/RouteCebu/04h.js"
import C04I from "./components/RouteCebu/04i.js"
import C04L from "./components/RouteCebu/04l.js"
import C04M from "./components/RouteCebu/04m.js"
import C06B from "./components/RouteCebu/06b.js"
import C06C from "./components/RouteCebu/06c.js"
import C06G from "./components/RouteCebu/06g.js"
import C06H from "./components/RouteCebu/06h.js"
import C07B from "./components/RouteCebu/06b.js"
import C08F from "./components/RouteCebu/08f.js"
import C08G from "./components/RouteCebu/08g.js"
import C09C from "./components/RouteCebu/09c.js"
import C09F from "./components/RouteCebu/09f.js"
import C09G from "./components/RouteCebu/09g.js"
import C10F from "./components/RouteCebu/10f.js"
import C10G from "./components/RouteCebu/10g.js"
import C10H from "./components/RouteCebu/10h.js"


function App() {

  // Main data
  const navList = [

    {id:0, name:'Cities', submenu:[
      {name:'Cagayan de Oro City', component:Cagayan, path:'city/cagayandeorocity'},
      {name:'Cebu City', component:Cebu, path:'city/cebucity'},
      {name:'About', component:About, path:'about'}
    ]},
    {id:1, name:'Cagayan de Oro', submenu:[
      {name:'RD', path:'route/cagayandeoro/rd', component:RD},
      {name:'RC', path:'route/cagayandeoro/rc', component:RC},
    ]},
    {id:2, name:'Cebu', submenu:[
      {name:'03B', path:'route/cebu/03b', component:C03B},
      {name:'03L', path:'route/cebu/03l', component:C03L},
      {name:'03Q', path:'route/cebu/03q', component:C03Q},
      {name:'04B', path:'route/cebu/04b', component:C04B},
      {name:'04H', path:'route/cebu/04h', component:C04H},
      {name:'04I', path:'route/cebu/04i', component:C04I},
      {name:'04L', path:'route/cebu/04l', component:C04L},
      {name:'04M', path:'route/cebu/04m', component:C04M},
      {name:'06B', path:'route/cebu/06b', component:C06B},
      {name:'06C', path:'route/cebu/06c', component:C06C},
      {name:'06G', path:'route/cebu/06g', component:C06G},
      {name:'06H', path:'route/cebu/06h', component:C06H},
      {name:'07B', path:'route/cebu/07b', component:C07B},
      {name:'08F', path:'route/cebu/08f', component:C08F},
      {name:'08G', path:'route/cebu/08g', component:C08G},
      {name:'09C', path:'route/cebu/09c', component:C09C},
      {name:'09F', path:'route/cebu/09f', component:C09F},
      {name:'09G', path:'route/cebu/09g', component:C09G},
      {name:'10F', path:'route/cebu/10f', component:C10F},
      {name:'10G', path:'route/cebu/10g', component:C10G},
      {name:'10H', path:'route/cebu/10h', component:C10H},
    ]}
  ];

  return (
    <Box sx={{ height:'100%', overflow:'hidden'}} flex={1}>
      <Navbar prop={navList} />
      <Box sx={{ height:'100%', overflow:'hidden' }} flex={1}>
        <Routes>

          {/* City and About us route */}
          {
            navList[0].submenu.map((route) => (
              <Route key="route.name" path={route.path} element={<route.component />} />  
            ))
          }

          {/* Cagayan de oro Route */}
          {
            navList[1].submenu.map((route) => (
              <Route key="route.name" path={route.path} element={<route.component />} />  
            ))
          }
          
          {/* Cebu Route */}
          {
            navList[2].submenu.map((route) => (
              <Route key="route.name" path={route.path} element={<route.component />} />  
            ))
          }
          
          <Route path="*" element={<Navigate to="city/cagayandeorocity" replace />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
