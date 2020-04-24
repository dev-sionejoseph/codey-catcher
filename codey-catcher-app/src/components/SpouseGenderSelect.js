import React, { Component } from 'react'

export default class SpouseGenderSelect extends Component {
    constructor(props){
        super(props);

        this.state= {
            selection:''
        }

        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(e){
        this.setState({
            selection: e.props.value
        })
    }

    render() {
        return (
            <div id="spouse-gender-wrap">
                <label for="gender-select">Spouse Gender?</label>
                <select id="gender-select">
                    <option value="man" onChange={this.handleSelect}>Man</option>
                    <option value="woman" onChange={this.handleSelect}>Woman</option>
                    <option value="nonbinary" onChange={this.handleSelect}>Nonbinary</option>
                </select>
            </div>
        )
    }
}
