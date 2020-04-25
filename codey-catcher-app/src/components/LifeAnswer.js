import React, { Component } from 'react'

export default class LifeAnswer extends Component {
    render() {
        return (
            <div className="lifeAnswerWraps">
                {this.props.info}
            </div>
        )
    }
}

