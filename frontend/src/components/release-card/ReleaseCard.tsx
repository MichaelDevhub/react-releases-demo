import React from 'react';
import {Card, CardContent, CardHeader, Typography} from '@mui/material';
import {IReleaseData} from "../../types/data.types";
import ReactionContainer from "../reaction-container/ReactionContainer";

interface IReleaseCardProps {
    releaseData: IReleaseData;
}
const ReleaseCard = ({ releaseData }: IReleaseCardProps) => {
    const {
        name,
        html_url,
        reactions,
    } = releaseData;

    const handleClick = () => {
        window.location.href = html_url;
    };

    return (
        <Card onClick={handleClick} sx={{
            cursor: 'pointer',
        }}>
            <CardHeader title={name} />
            <CardContent>
                {reactions ? (
                    <ReactionContainer reactions={reactions}/>
                ) : (
                    <Typography variant="body2" color="textSecondary">
                        No reactions available.
                    </Typography>
                )}
            </CardContent>
        </Card>
    );
};

export default ReleaseCard;