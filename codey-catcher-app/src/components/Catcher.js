import React, { Component } from 'react'

export default class Catcher extends Component {
    constructor(props){
        super(props);

        this.state = {
            color: ["red", "orange", "yellow", "green", "blue", "purple"]
        };
    }
    render() {
        return (
            <div className="catcherWrap">
                <div className="bottomDiamond">

                </div>
                <div className="topTriangle">

                </div>
                <div className="topTriangle">

                </div>
                <div className="topTriangle">

                </div>
                <div className="topTriangle">

                </div>
            </div>
        )
    }
}
