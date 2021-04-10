import React from "react";
import '../CSS/TypesOfWork.css'


class WorkType extends React.Component {
    constructor(props) {
        super(props);
        this.img = this.props.img;

    }

    render() {
        return (
            <div>
                <img className="service" src={this.props.icon}/>
                <h4 className="center">{this.props.desc}</h4>
            </div>
        )
    }
}

export default WorkType;