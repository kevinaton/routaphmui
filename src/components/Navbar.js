import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { AppBar, Box, Collapse, CssBaseline, Divider, IconButton, List, ListItemButton, ListItemIcon, ListItemText, SwipeableDrawer, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { ChevronLeft, ChevronRight, InfoOutlined, ExpandLess, ExpandMore, LocationCityOutlined } from '@mui/icons-material';
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
	const handleListItemClick = (pathSelected) => {
		setPath('/' + pathSelected)
	}
	
	// Get about in the data and the cities
	const aboutDetails = data.prop.city.filter((element) => {
		return element.name == 'About'
	})
	const cityList = data.prop.city.filter((element) => {
		return element.name != 'About'
	})

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
	
	// Handle the collapse of city list
	const [routeOpen, setRouteOpen] = React.useState(false);
	const handleRouteClick = () => {
		setRouteOpen(!routeOpen);
	};

	// Handle the collapse of cdo route
	const [cdoOpen, setCdoOpen] = React.useState(false);
	const handleCdoClick = () => {
		setCdoOpen(!cdoOpen)
	}



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
						<ListItemIcon><LocationCityOutlined /></ListItemIcon>
						<ListItemText primary='Cities' />
						{routeOpen ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
					<Collapse in={routeOpen} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							{ 
								cityList.map((route) => (
									<RouterLink key={route.name} to={`${route.path}`}>
										<ListItemButton selected={pathName == '/' + route.path} onClick={() => { toggleDrawer(false); handleListItemClick(route.path) }} sx={{ pl:4 }}>
												<DrawerListItemText primary={route.name} />
										</ListItemButton>
									</RouterLink>
								))
							}
						</List>
					</Collapse>

					
					<ListItemButton onClick={handleCdoClick}>
						<ListItemIcon><RouteOutlinedIcon /></ListItemIcon>
						<ListItemText primary='Cagayan de Oro' />
						{cdoOpen ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
					<Collapse in={cdoOpen} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							{ 
								data.prop.cdo.map((cdo) => (
									<RouterLink key={cdo.name} to={`${cdo.path}`}>
										<ListItemButton selected={pathName == '/' + cdo.path} onClick={() => { toggleDrawer(false); handleListItemClick(cdo.path) }} sx={{ pl:4 }}>
												<DrawerListItemText primary={cdo.name} />
										</ListItemButton>
									</RouterLink>
								))
							}
						</List>
					</Collapse>
					
					

					<RouterLink underline='none' to={aboutDetails[0].path} >
						<ListItemButton selected={pathName == '/' + aboutDetails[0].path} onClick={() => { toggleDrawer(false); handleListItemClick(aboutDetails[0].path) }}>
								<ListItemIcon><InfoOutlined /></ListItemIcon>
								<DrawerListItemText primary={aboutDetails[0].name} />
						</ListItemButton>
					</RouterLink>
				</List>
			</SwipeableDrawer>
		</Box>
	);
}