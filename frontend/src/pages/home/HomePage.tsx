import React, {useEffect} from "react";
import LayoutTemplate from "../../components/layout-template/LayoutTemplate";
import Lottie from "lottie-react";
import loadingAnimation from '../../animations/loading.json';
import {IDataState} from "../../types/data.types";
import {AppDispatch, RootState, useAppDispatch, useAppSelector} from "../../store";
import {fetchReleaseData} from "../../reducers/release-data/releaseDataRequests";
import {STATUS} from "../../types/status.types";
import ErrorComponent from "../../components/error-component/ErrorComponent";


interface IHeaderContentProps {
    state: IDataState;
}
const HomeContent = ({state}: IHeaderContentProps) => {
    switch (state.status) {
        case STATUS.IDLE:
        case STATUS.LOADING:
            return <Lottie animationData={loadingAnimation} style={{width: '20rem'}}/>
        case STATUS.SUCCESS:
            return <div>{state.data?.length} Items found</div>;
        case STATUS.FAILED:
            return state.error ? <ErrorComponent error={state.error} /> : null;
    }
}

const HomePage = () => {
    const dispatch: AppDispatch = useAppDispatch();
    const dataState: IDataState = useAppSelector((state: RootState) => state.data);

    useEffect(() => {
        if (STATUS.IDLE === dataState.status) {
            console.log("fetch data");
            dispatch(fetchReleaseData());
        }
    }, []);

    return (
        <LayoutTemplate>
            <HomeContent state={dataState}/>
        </LayoutTemplate>
    );
}

export default HomePage;