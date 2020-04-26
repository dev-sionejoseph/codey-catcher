import React from 'react'

export default function KidsOrPetsSelect(props){
   
    return (
        <div id="kids-or-pets-wrap">
            <label>Kids or Pets?</label>
            <select id="dependents-select" name={props.name} onChange={props.onChange}>
                <option value="none" ></option>
                <option value="kids" >Kids</option>
                <option value="pets" >Pets</option>
            </select>
        </div>
    )
  
}
