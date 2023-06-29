import React from 'react';
import {Box, Typography, useTheme} from '@mui/material';

export interface IInfoComponent {
    info: string;
}

const InfoComponent = ({info}: IInfoComponent) => {
    const theme = useTheme();
    return (
            <Box
                p={1}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    color: theme.palette.grey.A700,
                }}
            >
                <Typography variant="h6">
                    {info}
                </Typography>
            </Box>
    );
};

export default InfoComponent;