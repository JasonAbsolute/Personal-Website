import React from 'react';
import './App.css';
import luigi from './imgs/luigi.png'
import toyLuigi from './imgs/toyLuigi.png'

function App() {
    return (
        <div className="App">
            <img src={toyLuigi}/>
            <h1> OH YEAH! LUIGI TIME! </h1>
            <img src={luigi}/>

        </div>
    );
}
//https://jasonabsolute.github.io/Personal-Website/.
export default App;
