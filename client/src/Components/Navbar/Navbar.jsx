import React, { Component } from 'react'
import './Navbar.css'
export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar-main" >
                <ul className="navbar-list">
                    <li className = "navbar-list-item">Home</li>
                    <li className = "navbar-list-item">Create</li>
                    <li className = "navbar-list-item">Profile</li>
                </ul>
            </div>
        )
    }
}
