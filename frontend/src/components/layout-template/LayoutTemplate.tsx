import React, {ReactNode} from 'react';
import Header from "../header/Header";
import {Container, useTheme} from "@mui/material";

interface ILayoutTemplateProps {
    children: ReactNode | ReactNode[];

}
const LayoutTemplate = ({children}: ILayoutTemplateProps) => {
    const theme = useTheme();

    return (
        <div>
            <Header/>
            <Container sx={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: theme.palette.primary.contrastText
            }}>
                {children}
            </Container>
        </div>
    );
}


export default LayoutTemplate;