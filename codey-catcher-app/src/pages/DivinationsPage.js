import React, { Component } from 'react'
// import axios from 'axios';
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
            chosenDependent:'',
            spouse: {
                man: ['John', 'Brandon', 'Leo', 'Chris'],
                woman: ['Liz', 'Mya', 'Ashley', 'Brionne'],
                nonbinary: ['Payton', 'Jessie', 'Morgan', 'Gael']
            },
            home:['condo', 'apartment', 'townhome', 'tiny home', 'mansion' , 'house'],
            dependents: {
                kids: ["way more kids than you planned... but you love them all","no children","2 boys, 1 girl", "identical twins"],
                pets: ["no pets","1 dog","2 dogs 1 cat","basically a zoo"]
            },
            transportation: ["sports car", "bike", "minivan", "pogo stick", "hatchback", "converted school bus"],
            selections: {
                spouse:'',
                home:'',
                dependents:'',
                transportation:''
            }
        }
        this.handleSelect = this.handleSelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSelect(e){
        let tag = e.target.name;

        this.setState({
            [tag]: e.target.value
        })
    }

    handleSubmit(e){
        if(this.state.started === false){
            let gender = this.state.spouse[this.state.chosenGender]
            let dependent = this.state.dependents[this.state.chosenDependent]

            this.setState({
                started: true,
                selections:{
                    spouse: gender[Math.floor(Math.random() * gender.length)],
                    home: this.state.home[Math.floor(Math.random() * this.state.home.length)],
                    dependents: dependent[Math.floor(Math.random() * dependent.length)],
                    transportation: this.state.transportation[Math.floor(Math.random() * this.state.transportation.length)]
                }

            })
        }
    }

    render() {
        return (
            <div id="divinations-page">
                <div id="divinations-left">
                    <SpouseGenderSelect name='chosenGender' onChange={this.handleSelect}/>
                    <KidsOrPetsSelect name='chosenDependent' onChange={this.handleSelect}/>
                    <button id="go" onClick={this.handleSubmit}>Find your Future!</button>
                </div>
                <div id="divinations-center">
                    <Catcher />
                </div>
                <div id="divinations-right">
                    <div>You will marry a loving {this.state.chosenGender} named: 
                        <LifeAnswer info={this.state.selections['spouse']}/>
                    </div>
                    <div>You two will live together in a:
                        <LifeAnswer info={this.state.selections['home']}/>
                    </div>
                    <div>You decided on caring for:
                        <LifeAnswer info={this.state.selections['dependents']}/>
                    </div>
                    <div>And you all get around using a:
                        <LifeAnswer info={this.state.selections['transportation']}/>
                    </div>
                    
                </div>
            </div>
        )
    }
}

