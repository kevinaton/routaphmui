import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { AppBar, Box, Collapse, CssBaseline, Divider, IconButton, List, ListItemButton, ListItemIcon, ListItemText, SwipeableDrawer, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { ChevronLeft, ChevronRight, LocationCityOutlined, InfoOutlined, ExpandLess, ExpandMore } from '@mui/icons-material';
import RouteOutlinedIcon from '@mui/icons-material/RouteOutlined';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'space-between',
}));

export default function Navbar() {
	const theme = useTheme()
	const [open, setOpen] = React.useState(false);
	const [routeOpen, setRouteOpen] = React.useState(false);
	const [cityOpen, setCityOpen] = React.useState(false);
	const toggleDrawer = (state) => (event) => {
		if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setOpen(state);
	}
	const handleRouteClick = () => {
		setRouteOpen(!routeOpen);
	}
	const handleCityClick = () => {
		setCityOpen(!cityOpen);
	}

	return (
		<Box 
			sx={{ flexGrow: 1 }}
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
						<ListItemText primary='Routes' />
						{routeOpen ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
					<Collapse in={routeOpen} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<ListItemButton sx={{ pl:4 }}>
								<ListItemText primary="Cagayan de Oro City" />
							</ListItemButton>
							<ListItemButton sx={{ pl:4 }}>
								<ListItemText primary="Cebu City" />
							</ListItemButton>
						</List>
					</Collapse>
					<ListItemButton onClick={handleCityClick}>
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
					</Collapse>
					<ListItemButton>
						<ListItemIcon><InfoOutlined /></ListItemIcon>
						<ListItemText primary='About' />
					</ListItemButton>
				</List>
			</SwipeableDrawer>
		</Box>
	);
}