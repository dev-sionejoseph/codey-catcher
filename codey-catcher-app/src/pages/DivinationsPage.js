import React, { Component } from 'react'
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
            city:'',
            descendents: {
                kids: [0,1,2,3],
                pets: [0,1,2,3]
            },
            transportation: ["sports car", "bike", "minivan", "pogo stick", "hatchback", "converted school bus"],
            selections: {
                spouse:'',
                home:'',
                city:'',
                descendents:'',
                transportation:''
            }
        }
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(e){
        let choice = e.props.value;
        let key = e.props.key;

        this.setState({
            [key]: choice
        })
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
                    <LifeAnswer info={this.state.selections['city']}/>
                    <LifeAnswer info={this.state.selections['descendents']}/>
                    <LifeAnswer info={this.state.selections['transportation']}/>
                </div>
            </div>
        )
    }
}
