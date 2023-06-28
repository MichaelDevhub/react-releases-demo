import React from 'react';
import {Box} from "@mui/material";
import Lottie from "lottie-react";
import loadingAnimation from "../../animations/loading.json";
import loadingAnimationWhite from "../../animations/loading_white.json";
import {ThemeMode} from "../../types/theme.types";
import {useAppSelector} from "../../store";

const LoadingContainer = () => {
    const theme: ThemeMode = useAppSelector((state) => state.theme.mode);

    return <Box
        p={1}
        sx={{
            display: 'flex',
            justifyContent: 'center',
        }}>
        <Lottie animationData={theme === 'light' ? loadingAnimation : loadingAnimationWhite} style={{width: '20rem', justifySelf: 'center'}}/>
    </Box>;
}


export default LoadingContainer;