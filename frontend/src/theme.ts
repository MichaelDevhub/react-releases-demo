import {createTheme} from '@mui/material/styles';
import {ThemeMode} from "./types/theme.types";


export const getTheme = (theme: ThemeMode) => {
    const isDarkMode: boolean = theme === 'dark';
    return createTheme({
        palette: {
            mode: isDarkMode ? 'dark' : 'light',
            primary: {
                main: '#2c2c2c',
            },
            secondary: {
                main: '#ececec',
            },
            // error: {
            //     light: '#FCF5F4',
            //     main: '#BE2709',
            // },
            // info: {
            //     light: '#EFF4F9',
            //     main: '#00436B',
            // }
        },
    });
}