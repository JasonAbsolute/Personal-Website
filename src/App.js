import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import {NavigationBar} from './Components/NavigationBar';
import {NoMatch} from './Components/NoMatch';
import Sidebar from './Components/Sidebar';
import Header from "./Components/Header";
import Footer from "./Components/Footer"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ProjectsAndWork from './Components/ProjectsAndWork'
import HomePage from './Components/HomePage'

export default class App extends React.Component {
    ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                width: 400,
                height: 2
            }}
        />
    );

    // return <AnimationRevealPage disabled></AnimationRevealPage>;
    render() {
        return (
            <React.Fragment>
                <Router>
                    <NavigationBar/>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/resume.pdf"/>
                        <Route path="/Projects&Work" component={ProjectsAndWork}/>
                        <Route component={NoMatch}/>
                    </Switch>
                </Router>
                <this.ColoredLine color="grey" />
                <Footer/>
            </React.Fragment>
        );
    }
}
