import React from 'react';
import {Box, CircularProgress, useTheme} from "@mui/material";
import {isDark} from "../../utils/theme-utils";

const LoadingContainer = () => {
    const theme = useTheme();

    return <Box
        data-testid="loading-container"
        p={1}
        sx={{
            paddingTop: theme.spacing(6),
            display: 'flex',
            justifyContent: 'center',
        }}>
        <CircularProgress size={'5rem'} sx={{ color: isDark(theme)? theme.palette.common.white : theme.palette.primary.main}} />
    </Box>;
}


export default LoadingContainer;