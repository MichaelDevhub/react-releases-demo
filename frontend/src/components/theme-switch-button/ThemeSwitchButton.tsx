import React from 'react';
import Button from '@mui/material/Button';
import {useTheme} from "@mui/material";
import {useAppDispatch} from "../../store";
import {toggleTheme} from "../../reducers/theme/themeSlice";

const ThemeSwitchButton = () => {
    const theme = useTheme();
    const dispatch = useAppDispatch();

    const handleThemeSwitch = () => {
        dispatch(toggleTheme());
    };

    return (
        <Button onClick={handleThemeSwitch} variant="outlined">
            Switch to {theme.palette.mode === 'light' ? 'Dark' : 'Light'} Theme
        </Button>
    );
};

export default ThemeSwitchButton;