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
            descendents: {
                kids: [0,1,2,3],
                pets: [0,1,2,3]
            },
            spouse: {
                man: [John, Brandon, Leo, Chris],
                woman: [Liz, Mya, Ashley, Brionne],
                nonbinary: [Payton, Jessie, Morgan, Casey]
            }
        }
    }
    render() {
        return (
            <div id="divinations-page">
                <div id="divinations-left">
                    <SpouseGenderSelect />
                    <KidsOrPetsSelect />
                </div>
                <div id="divinations-center">
                    <Catcher />
                </div>
                <div id="divinations-center">
                    <LifeAnswer />
                    <LifeAnswer />
                    <LifeAnswer />
                    <LifeAnswer />
                    <LifeAnswer />
                </div>
            </div>
        )
    }
}
