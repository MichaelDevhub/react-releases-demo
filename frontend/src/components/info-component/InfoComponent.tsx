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
                color={"info"}
                sx={{
                    display: 'flex',
                    flex: 1,
                    justifyContent: 'center',
                    backgroundColor: theme.palette.info.light,
                    color: theme.palette.info.main,
                    borderRadius: theme.shape.borderRadius
                }}
            >
                <Typography variant="h6">
                    {info}
                </Typography>
            </Box>
    );
};

export default InfoComponent;