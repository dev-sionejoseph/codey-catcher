import React, { Component } from 'react'

export default class KidsOrPetsSelect extends Component {
    render() {
        return (
            <div id="kids-or-pets-wrap">
                <label>Kids or Pets?</label>
                <select id="dependents-select" name={this.props.name} onChange={this.props.onChange}>
                    <option value="none" ></option>
                    <option value="kids" >Kids</option>
                    <option value="pets" >Pets</option>
                </select>
            </div>
        )
    }
}
