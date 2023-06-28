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
        document.body.style.backgroundColor = theme.palette.mode === 'dark' ? theme.palette.primary.main : theme.palette.common.white;
    }, [themeMode]);


    return (
        <ThemeProvider theme={theme}>
            <Header/>
            <Container maxWidth={false}>
                <Container
                    sx={{
                        width: '100%',
                        alignSelf: 'center',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: theme.spacing(2, 0, 0, 0),
                        [theme.breakpoints.up('sm')]: {
                            padding: theme.spacing(2, 0, 0, 0),
                        },
                    }}>
                    {children}
                </Container>
            </Container>
        </ThemeProvider>
    );
}


export default LayoutTemplate;