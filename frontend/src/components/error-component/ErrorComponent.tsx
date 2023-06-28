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
                sx={{
                    display: 'flex',
                    flex: 1,
                    justifyContent: 'center',
                    backgroundColor: theme.palette.error.light,
                    color: theme.palette.error.main,
                    borderRadius: theme.shape.borderRadius
                }}
            >
                <Typography variant="h6" color="error">
                    {error.message}
                </Typography>
            </Box>
    );
};

export default ErrorComponent;