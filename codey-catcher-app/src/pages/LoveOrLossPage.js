import React, { Component } from 'react';
import axios from 'axios';
import NameInput from '../components/NameInput';
import Catcher from '../components/Catcher';
import LoveLossResults from '../components/LoveLossResults'



export default class LoveOrLossPage extends Component {
    constructor(props) {
        super(props);

        this.state={
            fname:'',
            sname:'',
            percentage: '',
            result:''

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
        let fname = this.state.fname;
        let sname = this.state.sname;
        let key = `${process.env.REACT_APP_LOVE_CALCULATOR_KEY}`
        let url = "https://love-calculator.p.rapidapi.com/getPercentage?fname="+ fname + "&sname=" + sname

        axios.get(url, {
            headers: {
                "x-rapidapi-host": "love-calculator.p.rapidapi.com",
		        "x-rapidapi-key": key 
            },
        })
        .then(res => {
            const data = res.data;

            this.setState({
                percentage: data.percentage,
                result: data.result
            })
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
                    <Catcher />
                </div>
                <div id="love-loss-right">
                    <LoveLossResults percentageValue={this.state.percentage} resultValue={this.state.result}/>
                </div>
                
            </div>
        )
    }
}
