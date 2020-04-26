import React from 'react'

export default function QuestionInput (props) {
    return (
        <div id="questioninput-wrap">
            <input type="text" placeholder="Enter your 'yes' or 'no' question here"></input>
            <button onClick={props.onClick}>Ask Codey!!</button>
        </div>
    )
    
}
