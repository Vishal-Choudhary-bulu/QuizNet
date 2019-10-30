import React, { Component } from 'react'
import './Homepage.css'
import Quizlist from '../QuizList/Quizlist'

export default class Homepage extends Component {

    render() {
        return (
            <div className = "homepage-main flex-centered-container">
                <Quizlist/>
            </div>
        )
    }

}
