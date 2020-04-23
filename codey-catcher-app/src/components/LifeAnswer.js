import React, { Component } from 'react'

export default class LifeAnswer extends Component {

    constructor(props){
        super(props);

        this.state = {
            spouse: {
                man: [],
                woman: []
            },
            home: [],
            city:[],
            dependents:[],
            transportation: []
        }
    }

    render() {
        
        return (
            <div className="lifeAnswerWraps">
            </div>
        )
    }
}
