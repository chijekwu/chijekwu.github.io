import React, { Component } from 'react'
import './staffDoc.css'

export class Header extends Component {
    /* constructor(props) {
        super(props)

    } */
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container-fluid">
                    <div><a className="navbar-brand" href="/">Hospital management System</a></div> 

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                            <a className="nav-link" href="/add-doctor/-1">Add Staff</a>
                            <a className="nav-link" href="/add-doctor">Modify Record</a>
                            <a className="nav-link" href="/view-doctor">Search</a>
                        </div>
                    </div>
                  </div>
                </nav>
            </div>
        )
    }
}

export default Header
