import React from 'react';
import {Typography, useTheme} from '@mui/material';
import ReactionComponent from "../reaction-component/ReactionComponent";
import {IReactions} from "../../types/reaction.types";

interface IReactionContainerProps {
    reactions: IReactions;
}

const ReactionContainer= ({ reactions }: IReactionContainerProps) => {
    const theme = useTheme();

    return (
        <Typography variant="body2" color="textSecondary" sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: theme.spacing(2),
            flexWrap: 'wrap',
        }}>
            {Object.entries(reactions).map(([reactionType, count]) => (
                <ReactionComponent key={reactionType} reaction={reactionType} amount={count}/>
            ))}
        </Typography>
    );
};

export default ReactionContainer;