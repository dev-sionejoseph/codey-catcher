import React, { Component } from 'react'

export default class KidsOrPetsSelect extends Component {
    render() {
        return (
            <div id="kids-or-pets-wrap">
                <label>Kids or Pets?</label>
                <select id="dependents-select">
                    <option value="none" onChange={this.props.onChange}></option>
                    <option value="kids" onChange={this.props.onChange}>Kids</option>
                    <option value="pets" onChange={this.props.onChange}>Pets</option>
                </select>
            </div>
        )
    }
}
