import React from 'react';
import { Card, CardContent, CardHeader } from '@mui/material';
import {IReleaseData} from "../../types/data.types";

interface ReleaseCardProps {
    releaseData: IReleaseData;
}

const ReleaseCard = ({ releaseData }: ReleaseCardProps) => {
    const { name, html_url } = releaseData;

    const handleClick = () => {
        window.location.href = html_url;
    };

    // Generate random text for the card body
    const getRandomText = () => {
        // Replace this with your own logic to generate random text
        return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    };

    return (
        <Card onClick={handleClick}>
            <CardHeader title={name} />
            <CardContent>
                <p>{getRandomText()}</p>
            </CardContent>
        </Card>
    );
};

export default ReleaseCard;