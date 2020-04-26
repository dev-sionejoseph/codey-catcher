import React from 'react'

export default function SpouseGenderSelect(props) {
  
    return (
        <div id="spouse-gender-wrap">
            <label>Spouse Gender?</label>
            <select id="gender-select" name={props.name} onChange={props.onChange}>
                <option value="none"></option>
                <option value="man">Man</option>
                <option value="woman">Woman</option>
                <option value="nonbinary">Nonbinary</option>
            </select>
        </div>
    )

}