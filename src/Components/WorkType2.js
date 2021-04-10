import React from "react";

class WorkType2 extends React.Component{
    constructor(props) {
        super(props);

    }
    render() {
        return(
            <div>
                <img className="service" src={this.props.icon}/>
                <h4 className="center">{this.props.desc}</h4>
            </div>
        )

    }
}
export default WorkType2