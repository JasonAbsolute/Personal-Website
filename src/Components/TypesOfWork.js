import React from "react";

import WorkType from "./WorkType";
import desktopIcon from '../img/desktopIcon.png'
import systemsIcon from '../img/systmesIcon.png'
import mobileIcon from '../img/mobile-1.png'
import webIcon from '../img/webIcon.png'

class TypesOfWork extends React.Component{

    ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                width: 200,
                height: 2
            }}
        />
    );

    render() {
        return(
            <div className="background" style={{ backgroundColor: "#9FFFC0", width: "auto", minHeight: "20px"}}>
                <h2 style={{ padding: "10px 20px", textAlign: "center", color: "black"}}>Development Services</h2>
                <this.ColoredLine color="grey" />
                <div className='rowC'>
                    <WorkType icon={desktopIcon} desc={"Desktop"}/>
                    <h1 className="paddingservice"/>
                    <WorkType icon={webIcon} desc={"Web"}/>
                    <h1 className="paddingservice"/>
                    <WorkType icon={mobileIcon} desc={"Mobile"}/>
                    <h1 className="paddingservice"/>
                    <WorkType icon={systemsIcon} desc={"Systems"}/>
                    <h1 className="paddingservice"/>


                </div>
            </div>


        )
    }

}
export default TypesOfWork