import React, { Component } from 'react'

export default class LoveOrLossPage extends Component {
    constructor(props) {
        super(props);

        this.state={
            fname:'',
            sname:'',

        }
    }
    render() {
        return (
            <div id="love-or-loss-page">
                <div id="love-loss-left">

                </div>
                <div id="love-loss-center">

                </div>
                <div id="love-loss-right">
                    <div id="love-loss-results">
                        
                    </div>
                </div>
                
            </div>
        )
    }
}
