import React, {useEffect} from "react";
import LayoutTemplate from "../../components/layout-template/LayoutTemplate";
import {IDataState} from "../../types/data.types";
import {AppDispatch, RootState, useAppDispatch, useAppSelector} from "../../store";
import {fetchReleaseData} from "../../reducers/release-data/releaseDataRequests";
import {STATUS} from "../../types/status.types";
import ErrorComponent from "../../components/error-component/ErrorComponent";
import ReleaseCardContainer from "../../components/release-card-container/ReleaseCardContainer";
import LoadingContainer from "../../components/loading-contaienr/LoadingContainer";
import {enqueueSnackbar} from "notistack";
import {useTheme} from "@mui/material";

interface IHeaderContentProps {
    state: IDataState;
}

const HomeContent = ({state}: IHeaderContentProps) => {
    switch (state.status) {
        case STATUS.IDLE:
        case STATUS.LOADING:
            return <LoadingContainer/>;
        case STATUS.SUCCESS:
            return <ReleaseCardContainer releaseData={state.data}/>;
        case STATUS.FAILED:
            return state.error ? <ErrorComponent error={state.error}/> : null;
    }
}

const HomePage = () => {
    const theme = useTheme();
    const dispatch: AppDispatch = useAppDispatch();
    const dataState: IDataState = useAppSelector((state: RootState) => state.data);

    useEffect(() => {
        if (STATUS.IDLE === dataState.status) {
            console.log("fetch data");
            dispatch(fetchReleaseData());
        }
    }, []);

    useEffect(() => {
        if (STATUS.FAILED === dataState.status) {
            enqueueSnackbar({
                message: dataState.error?.message,
                style: {
                    color: theme.palette.error.main,
                    border: `2px solid ${theme.palette.error.main}}`
                }
            })
        } else if (STATUS.SUCCESS === dataState.status && dataState.data.length > 0) {
            enqueueSnackbar({
                message: `${dataState.data.length} React Release found!`,
                style: {
                    color: theme.palette.success.main,
                    border: `2px solid ${theme.palette.success.main}}`
                }
            })
        } else if (STATUS.SUCCESS === dataState.status) {
            enqueueSnackbar({
                message: `0 React Release found!`,
                style: {
                    color: theme.palette.info.main,
                    border: `2px solid ${theme.palette.info.main}}`
                }
            })
        }
    }, [dataState.status])

    return (
        <LayoutTemplate>
            <HomeContent state={dataState}/>
        </LayoutTemplate>
    );
}

export default HomePage;