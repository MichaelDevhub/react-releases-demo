import React from 'react';
import {Box, useTheme} from '@mui/material';
import {IReleaseData} from "../../types/data.types";
import ReleaseCard from "../release-card/ReleaseCard";
import InfoComponent from "../info-component/InfoComponent";

interface IReleaseCardContainerProps {
    releaseData: IReleaseData[];
}

const ReleaseCardContainer = ({releaseData}: IReleaseCardContainerProps) => {
    const theme = useTheme();

    if (releaseData && releaseData.length > 0) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: theme.spacing(2),
                }}
            >
                {
                    releaseData.map((item, index) =>
                        <ReleaseCard key={`${index}-release-card`} releaseData={item}/>
                    )
                }
            </Box>
        );
    } else {
        return <InfoComponent info={"No React Releases found."}/>
    }
};

export default ReleaseCardContainer;