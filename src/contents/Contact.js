import React, { Component } from 'react';
import Social from '../components/Social';
class Contact extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">Contact Me</h1>
                <h3>Email  :   luismir15@yahoo.com</h3>
                <h3>Instagram   :   @luismir15</h3>
                <div className="contactsocial">
                    <Social />
                </div>
            </div>
            )
        }
    }
    
    export default Contact
    