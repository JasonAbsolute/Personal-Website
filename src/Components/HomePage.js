import React from 'react';
import styled from 'styled-components';
import "../CSS/HomePage.css"
import Img from "react-cool-img";
import loadingImage from "../img/Untitled.png"
import selfi from "../img/LinkedinIcon.jpg"

import TypesOfWork from "./TypesOfWork";

class HomePage extends React.Component {

    render() {
        return (
            <div>
                <h1 className="paddingTop"></h1>
                <div className="container">
                    <div className="image">
                        <img className="needboard" src={selfi}/>
                    </div>
                    <div className="text">
                        <h1 className="text">TL;DR</h1>
                        <h2 className="text">I am a highly capable, Software Engineer with experience programming Desktop/Mobile applications, Websites, and Embedded systems.
                            My diverse background across a wide range of problem domains allows me
                            to approach issues in a pragmatic and all-encompassing way.</h2>
                    </div>
                </div>
                <h1></h1>
                <TypesOfWork/>
            </div>
        )
    }
}

export default HomePage