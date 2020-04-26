import React from 'react'
import Catcher from '../components/Catcher'
import QuestionInput from '../components/QuestionInput'


let answers =

export default function AskCodeyPage() {
    return (
        <div>
            <div id="askcodey-top">
                <QuestionInput />
            </div>
            <div id="askcodey-center">
                <Catcher />
            </div>
            <div id="askcodey-bottom">
                {}
            </div>
        </div>
    )
}
