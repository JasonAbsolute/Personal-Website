import React from "react";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

// <button onClick={this.handleLoadButton}>Load Character</button>
// <Save save={this.download}/>
// {/*This input is not displayed, it is triggered by the button above*/}
// <input type={'file'} ref={this.inputRef} onChange={(e) => this.handleFileChosen(e)} style={{display: 'none'}}/>

    render() {
        return (<div>
            <h1>WOW</h1>
        </div>)
    }

}

export default Header;