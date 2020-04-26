import React, { Component } from 'react'
import Catcher from '../components/Catcher'
import QuestionInput from '../components/QuestionInput'



export default class AskCodeyPage extends Component {

    constructor(props){
        super(props);

        this.state={
            answerArray:["The stars say yes.", "The vision is unclear; proceed with caution.", "The answer is no"],
            currentAnswer:""
        }

        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(){
        
        let answers= this.state.answerArray
        
        this.setState({
         currentAnswer: answers[Math.floor(Math.random() * answers.length)]
        }) 
    }


    render(){
        return (
            <div>
                <div id="askcodey-top">
                    <QuestionInput onClick={this.handleClick}/>
                </div>
                <div id="askcodey-center">
                    <Catcher />
                </div>
                <div id="askcodey-bottom">
                    <p id="askcodey-result"> {this.state.currentAnswer} </p>
                </div>
            </div>
        )
    }
}
