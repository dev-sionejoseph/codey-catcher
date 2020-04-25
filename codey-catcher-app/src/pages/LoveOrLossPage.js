import React, { Component } from 'react';
import axios from 'axios';
import NameInput from '../components/NameInput';
import Catcher from '../components/Catcher';

export default class LoveOrLossPage extends Component {
    constructor(props) {
        super(props);

        this.state={
            fname:'',
            sname:'',

        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState ({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e){
        axios.get('https://httpbin.org/get', {
            headers: {
                "x-rapidapi-host": "love-calculator.p.rapidapi.com",
		        "x-rapidapi-key": "fca71f8c8cmshdc95ba1e09ee3efp1fcc75jsn871d103cc45b"
            },
        })
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            this.setState({
                result: "uh oh. something went wrong!"
            })
        });
    }

    render() {
        return (
            <div id="love-or-loss-page">
                <div id="love-loss-left">
                    <NameInput onChange={this.handleChange} onClick={this.handleSubmit} />
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
