import React, { Component } from 'react'

export default class KidsOrPetsSelect extends Component {
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
            <div id="kids-or-pets-wrap">
                <label for="dependents-select">Kids or Pets?</label>
                <select id="dependents-select">
                    <option value="kids" onChange={this.handleSelect}>Kids</option>
                    <option value="pets" onChange={this.handleSelect}>Pets</option>
                </select>
            </div>
        )
    }
}
