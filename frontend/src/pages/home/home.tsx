import React from "react";
import LayoutTemplate from "../../components/layout-template/LayoutTemplate";
import Lottie from "lottie-react";
import loading from "../../animations/loading.json";

const HomePage = () => {
    return (
        <LayoutTemplate>
            <Lottie animationData={loading} style={{width: '20rem'}}/>
        </LayoutTemplate>
    );
}

export default HomePage;