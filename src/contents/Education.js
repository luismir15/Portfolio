import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">Education</h1>
            <Widecard title="B.S. Computer Science" where="Florida International University" from="August 2017" to="Present"/>
            </div>
            )
        }
    }
    
export default Education
    