
import React from 'react';
import { withRouter } from 'react-router-dom';

const Footer = (props) => {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="column">
                    <h2 className="column-header">
                        Technologies
                    </h2>
                    <ul>
                        <li>Javascript</li>
                        <li>MongoDB</li>
                        <li>Express</li>
                        <li>React</li>
                        <li>NodeJS</li>
                    </ul>
                </div>
                <div className="column">
                    <h2 className="column-header">
                        Developers
                    </h2>
                    <ul>
                        <li>Brad Barnes</li>
                        <li>Josh Burnwatt</li>
                        <li>Zachary Oliver</li>
                    </ul>
                </div>
                <div className="column">
                    <h2 className="column-header">
                        Description
                    </h2>
                    <p>This is a full-stack clone of Indigogo created in one week.</p>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Footer);