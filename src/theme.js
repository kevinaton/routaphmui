import { createTheme } from "@mui/material/styles";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const theme = createTheme({
	palette:{
		primary:{
				main:'#82AAE3',
				light:'#BFEAF5'
		},
		secondary:{
				main:'#91D8E4',
				light:'#EAFDFC'
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