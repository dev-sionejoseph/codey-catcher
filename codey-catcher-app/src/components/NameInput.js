import React, { Component } from 'react'

export default class NameInput extends Component {
    constructor(props){
        super(props);

        this.state= {
            nameOne:'',
            nameTwo:''
        }

        this.handleChange = this.handleChange.bind(this)
    }


    render() {
        return (
            <div>
                <input type="text" id="name-one" name="nameOne"></input>
                <input type="text" id="name-two" name="nameTwo"></input>
                <button id="compatibility-button">Love or Loss?</button>
            </div>
        )
    }
}
