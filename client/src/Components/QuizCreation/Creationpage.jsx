import React, { Component } from 'react'
import './Creationpage.css'

export default class Creationpage extends Component {
    render() {
        return (
            <div className="creationpage-main flex-centered-container">
                <div className="creationpage-form">
                    <h1>Create Quiz</h1>

                    <form onSubmit = "" className="creationpage-form-area">
                        
                        <div className="creation-page-form-ques-area">
                        <textarea name="ques" type="text" required = {true} onChange = "" className="creationpage-form-input input-ques" rows = "3" placeholder = "Enter the question here"></textarea>
                        </div>

                        <div className="creationpage-form-option-area">
                            <input name="option 1" type="text" required = {true} onChange = "" className= "creationpage-form-input form-option" placeholder = "choice 1" />
                            <input name="option 2" type="text" required = {true} onChange = "" className= "creationpage-form-input form-option" placeholder = "choice 2"/>
                            <input name="option 3" type="text" required = {false} onChange = "" className= "creationpage-form-input form-option" placeholder = "choice 3"/>
                            <input name="option 4" type="text" required = {false} onChange = "" className= "creationpage-form-input form-option" placeholder = "choice 4"/>
                        </div>
                        
                    </form>

                </div>
            </div>
        )
    }
}
