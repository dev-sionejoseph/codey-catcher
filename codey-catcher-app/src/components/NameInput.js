import React, { Component } from 'react'

export default class NameInput extends Component {

    render() {
        return (
            <div>
                <label>Your First Name:</label>
                <input type="text" id="fname-input" name="fname" onChange={this.props.onChange}></input>
                <label>Partner's First Name</label>
                <input type="text" id="sname-input" name="sname" onChange={this.props.onChange}></input>
                <button id="compatibility-button" onClick={this.props.onClick}>Love or Loss?</button>
            </div>
        )
    }
}
