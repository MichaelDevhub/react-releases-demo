import React from 'react';
import {Typography, Box, useTheme} from '@mui/material';
import {CustomError} from "../../types/error.types";

export interface IErrorComponent {
    error: CustomError;
}

const ErrorComponent = ({error}: IErrorComponent) => {
    const theme = useTheme();
    return (
            <Box
                p={1}
                color={'error'}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    color: theme.palette.error.main,
                    borderRadius: theme.shape.borderRadius,
                    border: `2px solid ${theme.palette.error.light}`,
                }}
            >
                <Typography variant="h6" color="error">
                    {error.message}
                </Typography>
            </Box>
    );
};

export default ErrorComponent;