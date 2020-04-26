import React from 'react'

export default function Instructions() {
    return (
        <div className="instructions-div">
            <h1>Welcome to Codey Catcher</h1>
            <p>For any future, bright or bleak, Codey Catcher will find the answers you seek.</p> 
                <div id="inner-instructions-wrap">
                    <h3>Instructions</h3>
                    <ul>
                        <p className="instruction-titles">Divinations: </p>
                        <li>Codey will predict who you will marry, 
                            where you will live, how many kids or pets, and your means of transportation
                        </li>
                        <p className="instruction-titles">Ask Codey: </p>
                        <li> Have a yes or no question? Ask Codey and she'll tell you what's what.
                        </li>
                        <p className="instruction-titles">Love or Loss: </p>
                        <li> Want to test the match between you and your beloved? 
                            Enter both your names in the input fields provided and Codey will calculate how likely it is to succeed.
                        </li>

                    </ul>
                </div>
        </div>
    )
}
