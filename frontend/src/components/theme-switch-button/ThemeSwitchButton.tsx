import React from 'react';
import {IconButton, useTheme} from "@mui/material";
import {useAppDispatch} from "../../store";
import {toggleTheme} from "../../reducers/theme/themeSlice";


const ThemeSwitchButton = () => {
    const theme = useTheme();
    const dispatch = useAppDispatch();

    const handleThemeSwitch = () => {
        dispatch(toggleTheme());
    };

    return <IconButton onClick={handleThemeSwitch} sx={{
        borderRadius: '50%',
        border: `3px solid ${theme.palette.common.white}`,
        width: 40,
        height: 40,
        padding: 0,
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.main : theme.palette.common.white,
        '&:hover': {
            backgroundColor: theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.common.white,
        }
    }}/>;
};

export default ThemeSwitchButton;