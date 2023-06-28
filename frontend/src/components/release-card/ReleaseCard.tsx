import React from 'react';
import {Card, CardContent, CardHeader, Typography} from '@mui/material';
import {IReleaseData} from "../../types/data.types";
import {reactionEmojis} from "../../types/reaction.types";

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
        <Card onClick={handleClick}>
            <CardHeader title={name} />
            <CardContent>
                {reactions ? (
                    <>
                        <Typography variant="body2" color="textSecondary">
                            {Object.entries(reactions).map(([reactionType, count]) => (
                                <React.Fragment key={reactionType}>
                                    {reactionEmojis[reactionType]} {count}{' '}
                                </React.Fragment>
                            ))}
                        </Typography>
                    </>
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