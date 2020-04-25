import React, { Component } from 'react'

export default class SpouseGenderSelect extends Component{
    render() {
        return (
            <div id="spouse-gender-wrap">
                <label>Spouse Gender?</label>
                <select id="gender-select" name={this.props.name} onChange={this.props.onChange}>
                    <option value="none"></option>
                    <option value="man">Man</option>
                    <option value="woman">Woman</option>
                    <option value="nonbinary">Nonbinary</option>
                </select>
            </div>
        )
    }
}