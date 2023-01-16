import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { AppBar, Box, Collapse, CssBaseline, Divider, IconButton, List, ListItemButton, ListItemIcon, ListItemText, SwipeableDrawer, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { ChevronLeft, ChevronRight, InfoOutlined, ExpandLess, ExpandMore } from '@mui/icons-material';
import RouteOutlinedIcon from '@mui/icons-material/RouteOutlined';
import {Link} from 'react-router-dom';

const drawerWidth = 240;

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



export default function Navbar(data) {

	// adding theme
	const theme = useTheme()

	// Highlight menu that is currently active
	const [pathName, setPath] = React.useState(window.location.pathname)
	const handleListItemClick = (event, pathSelected) => {
		setPath('/' + pathSelected)
	}
	
	// Get about in the data and the cities
	const aboutDetails = data.prop.filter((element) => {
		return element.name == 'About'
	})
	const cityList = data.prop.filter((element) => {
		return element.name != 'About'
	})

	// Handle the sidemenu toggle
	const [open, setOpen] = React.useState(false);
	const toggleDrawer = (state) => (event) => {
		if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setOpen(state)
	};
	
	// Handle the collapse of jeepneyroutes
	const [routeOpen, setRouteOpen] = React.useState(false);
	const handleRouteClick = () => {
		setRouteOpen(!routeOpen);
	};

	return (
		<Box 
			sx={{ flexGrow: 1, bgcolor: 'background.paper' }}
		>
			<CssBaseline />
			<AppBar position="static" open={open} color="inherit">
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
				open={open}
				onClose={toggleDrawer(false)}
				onOpen={toggleDrawer(true)}
				sx={{ 
					width:drawerWidth, 
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
					<ListItemButton onClick={handleRouteClick}>
						<ListItemIcon><RouteOutlinedIcon /></ListItemIcon>
						<ListItemText primary='Jeepney Routes' />
						{routeOpen ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
					<Collapse in={routeOpen} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							{ 
								cityList.map((city) => (
									<RouterLink key={city.name} to={`${city.path}`}>
										<ListItemButton selected={pathName == '/' + city.path} onClick={(event) => {toggleDrawer(false), handleListItemClick(event, city.path)}} sx={{ pl:4 }}>
												<DrawerListItemText primary={city.name} />
										</ListItemButton>
									</RouterLink>
								))
							}
						</List>
					</Collapse>
					
					{/* Add city route details soon */}
					{/* <ListItemButton onClick={handleCityClick}>
						<ListItemIcon><LocationCityOutlined /></ListItemIcon>
						<ListItemText primary='Cities' />
						{cityOpen ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
					<Collapse in={cityOpen} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<ListItemButton sx={{ pl:4 }}>
								<ListItemText primary="Cagayan de Oro City" />
							</ListItemButton>
							<ListItemButton sx={{ pl:4 }}>
								<ListItemText primary="Cebu City" />
							</ListItemButton>
						</List>
					</Collapse> */}

					<RouterLink underline='none' to={aboutDetails[0].path} >
						<ListItemButton selected={pathName == '/' + aboutDetails[0].path} onClick={(event) => {toggleDrawer(false), handleListItemClick(event, aboutDetails[0].path)}}>
								<ListItemIcon><InfoOutlined /></ListItemIcon>
								<DrawerListItemText primary={aboutDetails[0].name} />
						</ListItemButton>
					</RouterLink>
				</List>
			</SwipeableDrawer>
		</Box>
	);
}