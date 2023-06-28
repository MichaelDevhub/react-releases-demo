import React, {ReactNode, useEffect} from 'react';
import Header from "../header/Header";
import {Container, ThemeProvider} from "@mui/material";
import {getTheme} from "../../theme";
import {ThemeMode} from "../../types/theme.types";
import {useAppSelector} from "../../store";

interface ILayoutTemplateProps {
    children: ReactNode | ReactNode[];

}
const LayoutTemplate = ({children}: ILayoutTemplateProps) => {
    const themeMode: ThemeMode = useAppSelector((state) => state.theme.mode);
    let theme = getTheme(themeMode);

    useEffect(() => {
        theme = getTheme(themeMode);
    }, [themeMode]);


    return (
        <ThemeProvider theme={theme}>
            <Header/>
            <Container sx={{
                display: 'flex',
                justifyContent: 'center',
                paddingTop: theme.spacing(2),
                backgroundColor: theme.palette.background.default,
            }}>
                {children}
            </Container>
        </ThemeProvider>
    );
}


export default LayoutTemplate;