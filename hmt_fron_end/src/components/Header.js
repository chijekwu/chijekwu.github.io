import React, { Component } from 'react'

export class Header extends Component {
    /* constructor(props) {
        super(props)

    } */
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                  <div><a href="/" className="navbar-brand">Hospital management System</a></div>  
                </nav>
            </div>
        )
    }
}

export default Header
