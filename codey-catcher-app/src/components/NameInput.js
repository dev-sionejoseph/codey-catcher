import React, { Component } from 'react'

export default class NameInput extends Component {
    render() {
        return (
            <div>
                <input type="text" id="name-one"></input>
                <input type="text" id="name-two"></input>
                <button id="compatibility-button">Love or Loss?</button>
            </div>
        )
    }
}
