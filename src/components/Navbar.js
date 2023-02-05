import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { AppBar, Box, Collapse, CssBaseline, Divider, IconButton, List, ListItemButton, ListItemIcon, ListItemText, SwipeableDrawer, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { ChevronLeft, ChevronRight, InfoOutlined, ExpandLess, ExpandMore, LocationCityOutlined, HelpOutline, LocationOnOutlined } from '@mui/icons-material';
import RouteOutlinedIcon from '@mui/icons-material/RouteOutlined';
import {Link} from 'react-router-dom';

const drawerWidth = 260;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'space-between',
}))

const RouterLink = styled(Link)({
	textDecoration:'none'
})

const DrawerListItemText = styled(ListItemText) (({ theme }) => ({
	color:theme.palette.blacktext.main,
}))

const drawerFooter = {
	mt:5,
	pl:2
}

export default function Navbar(data) {

	// Get current year
	function automatedYear() {
		return new Date().getFullYear();
	}
	
	// adding theme
	const theme = useTheme()

	// Highlight menu that is currently active
	const [pathName, setPath] = React.useState(window.location.pathname)
	const handleListItemClick = (pathSelected, toggleState) => {
		setPath('/' + pathSelected)
		setState(toggleState)
	}
	
	// Get about, help and home
	const homeDetails = data.prop.Pages[0]
	const helpDetails = data.prop.Pages[1]
	const aboutDetails = data.prop.Pages[2]

	// Get cityList
	const cityList = data.prop.MasterList[0].submenu

	// Get Nav details
	const cities = data.prop.MasterList[0],
				cdoRoutes = data.prop.MasterList[1],
				cebuRoutes = data.prop.MasterList[2]

	// Handle the sidemenu toggle
	const [state, setState] = React.useState(false);
	const toggleDrawer = (open) => (event) => {
		if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
			setState(open)
	};
	
	// Handle the collapse in navbar
	const [routeOpen, setRouteOpen] = React.useState({});
	const handleRouteClick = (id) => {
		setRouteOpen((prevState) => ({ ...prevState, [id]: !prevState[id]}));
	};



	return (
		<Box 
			sx={{ flexGrow: 1, bgcolor: 'background.paper' }}
		>
			<CssBaseline />
			<AppBar position="static" open={state} color="inherit">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="open drawer"
						sx={{ mr: 2 }}
						onClick={ toggleDrawer(true) }
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						routa.ph
					</Typography>
				</Toolbar>
			</AppBar>
			<SwipeableDrawer
				anchor="left"
				open={state}
				onClose={toggleDrawer(false)}
				onOpen={toggleDrawer(true)}
				sx={{ 
					width:drawerWidth,
					position:'relative',
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: drawerWidth,
						boxSizing: 'border-box'
					}
				}}
			>
				<DrawerHeader>
					<Typography variant="h6" component="div">Menu</Typography>
					<IconButton onClick={toggleDrawer(false)}>
						{theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
					</IconButton>
				</DrawerHeader>
				<Divider />
				<List
					sx={{ width:'100%'}}
					component="nav"
					disablePadding
				>
					<RouterLink underline='none' to={homeDetails.path} >
						<ListItemButton selected={pathName == '/' + homeDetails.path} onClick={() => { toggleDrawer(false); handleListItemClick(homeDetails.path, false) }}>
								<ListItemIcon><LocationOnOutlined /></ListItemIcon>
								<DrawerListItemText primary={homeDetails.name} />
						</ListItemButton>
					</RouterLink>

					<ListItemButton onClick={() => handleRouteClick(cities.id)}>
						<ListItemIcon><LocationCityOutlined /></ListItemIcon>
						<ListItemText primary={cities.name} />
						{routeOpen[cities.id] ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
					<Collapse in={routeOpen[cities.id]} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							{ 
								cityList.map((route) => (
									<RouterLink key={route.name} to={`${route.path}`}>
										<ListItemButton selected={pathName == '/' + route.path} onClick={() => { toggleDrawer(false); handleListItemClick(route.path, false) }} sx={{ pl:4 }}>
												<DrawerListItemText primary={route.name} />
										</ListItemButton>
									</RouterLink>
								))
							}
						</List>
					</Collapse>

					
					<ListItemButton onClick={() => handleRouteClick(cdoRoutes.id)}>
						<ListItemIcon><RouteOutlinedIcon /></ListItemIcon>
						<ListItemText primary={cdoRoutes.name} />
						{routeOpen[cdoRoutes.id] ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
					<Collapse in={routeOpen[cdoRoutes.id]} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							{ 
								cdoRoutes.submenu.map((cdo) => (
									<RouterLink key={cdo.name} to={`${cdo.path}`}>
										<ListItemButton selected={pathName == '/' + cdo.path} onClick={() => { toggleDrawer(false); handleListItemClick(cdo.path, false) }} sx={{ pl:4 }}>
												<DrawerListItemText primary={cdo.name} />
										</ListItemButton>
									</RouterLink>
								))
							}
						</List>
					</Collapse>

					<ListItemButton onClick={() => handleRouteClick(cebuRoutes.id)}>
						<ListItemIcon><RouteOutlinedIcon /></ListItemIcon>
						<ListItemText primary={cebuRoutes.name} />
						{routeOpen[cebuRoutes.id] ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
					<Collapse in={routeOpen[cebuRoutes.id]} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							{ 
								cebuRoutes.submenu.map((route) => (
									<RouterLink key={route.name} to={`${route.path}`}>
										<ListItemButton selected={pathName == '/' + route.path} onClick={() => { toggleDrawer(false); handleListItemClick(route.path, false) }} sx={{ pl:4 }}>
												<DrawerListItemText primary={route.name} />
										</ListItemButton>
									</RouterLink>
								))
							}
						</List>
					</Collapse>
					
					<RouterLink underline='none' to={aboutDetails.path} >
						<ListItemButton selected={pathName == '/' + aboutDetails.path} onClick={() => { toggleDrawer(false); handleListItemClick(aboutDetails.path, false) }}>
								<ListItemIcon><InfoOutlined /></ListItemIcon>
								<DrawerListItemText primary={aboutDetails.name} />
						</ListItemButton>
					</RouterLink>

					<RouterLink underline='none' to={helpDetails.path} >
						<ListItemButton selected={pathName == '/' + helpDetails.path} onClick={() => { toggleDrawer(false); handleListItemClick(helpDetails.path, false) }}>
								<ListItemIcon><HelpOutline /></ListItemIcon>
								<DrawerListItemText primary={helpDetails.name} />
						</ListItemButton>
					</RouterLink>

				</List>
				<Typography sx={drawerFooter}>Copyright &copy; {automatedYear()} routa.ph All Rights Reserved</Typography>
				
			</SwipeableDrawer>
		</Box>
	);
}