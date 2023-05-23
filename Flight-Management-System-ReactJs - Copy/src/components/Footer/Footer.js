import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer className = "footer">
                    
                    <span className="text-muted">All Rights Reserved  @FlightManagemnet.com</span>

                </footer>
            </div>
        )
    }
}

export default Footer;