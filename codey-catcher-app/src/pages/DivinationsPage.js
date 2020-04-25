import React, { Component } from 'react'
import axios from 'axios';
import SpouseGenderSelect from '../components/SpouseGenderSelect';
import KidsOrPetsSelect from '../components/KidsOrPetsSelect';
import Catcher from '../components/Catcher';
import LifeAnswer from '../components/LifeAnswer';
// import Navbar from '../components/Navbar';

export default class DivinationsPage extends Component {
    constructor(props){
        super(props);

        this.state={
            started: false,
            chosenGender:'',
            chosenDescendent:'',
            spouse: {
                man: ['John', 'Brandon', 'Leo', 'Chris'],
                woman: ['Liz', 'Mya', 'Ashley', 'Brionne'],
                nonbinary: ['Payton', 'Jessie', 'Morgan', 'Gael']
            },
            home:['condo', 'apartment', 'townhome', 'tiny home', 'mansion' , 'house'],
            descendents: {
                kids: [0,1,2,3],
                pets: [0,1,2,3]
            },
            transportation: ["sports car", "bike", "minivan", "pogo stick", "hatchback", "converted school bus"],
            selections: {
                spouse:'',
                home:'',
                descendents:'',
                transportation:''
            }
        }
        this.handleSelect = this.handleSelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSelect(e){
        let choice = e.props.value;
        let key = e.props.key;

        this.setState({
            [this.state[key]]: choice
        })
    }

    handleSubmit(e){
        if(this.state.started === true){
            let gender = this.state.spouse[chosenGender]
            let descendent = this.state.descendents[chosenDescendent]

            this.setState({
                started: true,
                selections:{
                    spouse: gender[Math.floor(Math.random() * gender.length)],
                    home: this.state.home[Math.floor(Math.random() * this.state.home.length)],
                    descendents: descendent[Math.floor(Math.random() * descendent.length)],
                    transportation: this.state.transportation[Math.floor(Math.random() * this.state.transportation.length)]
                }

            })
        }
    }

    pickOption(key) {
        
    }



    render() {
        return (
            <div id="divinations-page">
                <div id="divinations-left">
                    <SpouseGenderSelect key="chosenGender" onChange={this.handleSelect}/>
                    <KidsOrPetsSelect key="chosenDescendent" onChange={this.handleSelect}/>
                    <button id="go">Find your Future!</button>
                </div>
                <div id="divinations-center">
                    <Catcher />
                </div>
                <div id="divinations-center">
                    <LifeAnswer info={this.state.selections['spouse']}/>
                    <LifeAnswer info={this.state.selections['home']}/>
                    <LifeAnswer info={this.state.selections['descendents']}/>
                    <LifeAnswer info={this.state.selections['transportation']}/>
                </div>
            </div>
        )
    }
}

