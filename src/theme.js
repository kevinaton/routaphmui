import { createTheme } from "@mui/material/styles";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { grey } from "@mui/material/colors";

export const theme = createTheme({
	palette:{
		primary:{
				main:'#0096FF',
				light:'#0096FF'
		},
		secondary:{
				main:'#91D8E4',
				light:'#EAFDFC'
		},
		blacktext:{
				main: grey[900]
		},
		discordColor:{
				main:'#5865f2',
				light:'#5865f2',
				contrastText: "#fff"
		}
	},
	typography: {
		fontFamily: [
				'Roboto',
				'"Helvetica Neue"',
				'Arial',
				'"Segoe UI"',
				'BlinkMacSystemFont',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
		].join(','),
	},
})