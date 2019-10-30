import React, { Component } from 'react'
import './Quizlist.css'
import Quiz from '../Quiz/Quiz'

export default class Quizlist extends Component {
    render() {
        return (
            <div className="quizlist-main">
                <Quiz/>
                <Quiz/>
                <Quiz/>
                <Quiz/>
                <Quiz/>
            </div>
        )
    }
}
