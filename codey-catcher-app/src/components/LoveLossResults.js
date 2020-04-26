import React from 'react'

export default function LoveLossResults(props) {
    return (
        <div>
            <div id="love-loss-results">
                        <p id="percentage">{props.percentageValue}</p>
                        <p id="result">{props.resultValue}</p>
            </div>
        </div>
    )
}
