import React, {ReactNode} from 'react';
import Header from "../header/Header";

interface ILayoutTemplateProps {
    children: ReactNode | ReactNode[];

}
const LayoutTemplate = ({children}: ILayoutTemplateProps) =>
    <div>
        <Header/>
        <div className="body">
            <div className="drawer-left"></div>
            <div className="body">
                {children}
            </div>
        </div>
    </div>;

export default LayoutTemplate;