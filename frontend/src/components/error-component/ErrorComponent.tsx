import React from 'react';
import {Box, Typography, useTheme} from '@mui/material';
import {CustomError} from "../../types/error.types";
import {ErrorOutlineSharp} from "@mui/icons-material";

export interface IErrorComponentProps {
    error: CustomError;
}

const ErrorComponent = ({error}: IErrorComponentProps) => {
    const theme = useTheme();
    return (
        <Box
            data-testid="error-message-container"
            p={1}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: theme.palette.error.main,
                gap: theme.spacing(1),
            }}
        >
            <ErrorOutlineSharp
                data-testid="error-message-icon"
                sx={{
                    color: theme.palette.error.main,
                }}/>
            <Typography
                data-testid="error-message-text"
                variant="h6"
                color="error">
                {error.message}
            </Typography>
        </Box>
    );
};

export default ErrorComponent;