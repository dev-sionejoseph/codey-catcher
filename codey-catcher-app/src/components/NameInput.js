import React from 'react'

export default function NameInput(props) {

    return (
        <div>
            <label>Your First Name:</label>
            <input type="text" id="fname-input" name="fname" onChange={props.onChange}></input>
            <label>Partner's First Name</label>
            <input type="text" id="sname-input" name="sname" onChange={props.onChange}></input>
            <button id="compatibility-button" onClick={props.onClick}>Love or Loss?</button>
        </div>
    )
    
}
