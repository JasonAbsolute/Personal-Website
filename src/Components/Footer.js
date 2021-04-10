import React from "react";
import Header from "./Header";
import "../CSS/Footer.css"
import MailIcon from "../img/MailIcon.png"
import twitterIcon from "../img/twittericon.png"
import gitHubIcon from "../img/githubicon.png"
import linkedInIcon from "../img/LinkedinIcon.png"

class Footer extends React.Component {
    handleClick(){


    }

    credits() {
        return <div>
            <h3 className="h3">Jason Urban Software Engineer</h3>
            <h1 className="h1Footer">
                <span>
                        <img width="20px" src={MailIcon}/>
                </span>
                <a onClick={this.handleClick()}>
                Urbanj@msoe.edu
                </a>
            </h1>
            <h1 className="h1Footer">
            <span>
                <a href="https://www.linkedin.com/in/jason-urban/">
                    <img className="footer" src={linkedInIcon} alt="Snow"/>
                </a>
                <a href="https://twitter.com/Urbes98">
                    <img className="footer" src={twitterIcon} alt="Forest"/>
                </a>
                <a href="https://github.com/JasonAbsolute">
                    <img className="footer" src={gitHubIcon} alt="Mountains"/>
                </a>
            </span>
            </h1>
            <h1 className="h1Footer">Copyright © Jason-Urban.com</h1>
        </div>
    }

    render() {
        return (this.credits())
    }
}

export default Footer;