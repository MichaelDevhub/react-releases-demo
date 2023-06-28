import React from 'react';
import {Box, Typography, useTheme} from '@mui/material';
import {reactionEmojis} from "../../types/reaction.types";

interface IReactionComponentProps {
    reaction: string;
    amount: number;
}

const ReactionComponent = ({ reaction, amount }: IReactionComponentProps) => {
    const theme = useTheme();

    return (
        <Box sx={{
            flexGrow: 0,
            display: 'flex',
            border: '1px solid lightgrey',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: theme.shape.borderRadius,
            padding: theme.spacing(.2, 1, 0.2, 1),
        }}>
            <span>{reactionEmojis[reaction]}</span> {/* Replace with the actual emoji or icon component */}
            <Typography variant="body2" sx={{ marginLeft: theme.spacing(1) }}>
                {amount}
            </Typography>
        </Box>
    );
};

export default ReactionComponent;