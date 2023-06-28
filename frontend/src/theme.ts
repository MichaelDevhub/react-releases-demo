import { createTheme } from '@mui/material/styles';

// Define your custom theme
const theme = createTheme({
    palette: {
        primary: {
            main: '#2c2c2c',
        },
        secondary: {
            main: '#00ff00',
        },
        error: {
            light: '#FCF5F4',
            main: '#BE2709',
        },
        info: {
            light: '#EFF4F9',
            main: '#00436B',
        }
    },
});

export default theme;