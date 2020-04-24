import React, { Component } from 'react'

export default class NameInput extends Component {
    constructor(props){
        super(props);

        this.state= {
            nameOne:'',
            nameTwo:''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    handleChange(e){
        this.setState ({
            [event.target.name]: event.target.value
        })
    }
    
    handleSubmit(e){
        
    }


    render() {
        return (
            <div>
                <input type="text" id="name-one" name="nameOne" value={this.state.nameOne}></input>
                <input type="text" id="name-two" name="nameTwo" value={this.state.nameTwo}></input>
                <button id="compatibility-button">Love or Loss?</button>
            </div>
        )
    }
}
