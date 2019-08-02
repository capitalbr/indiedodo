
import React from 'react';
import { withRouter } from 'react-router-dom';

const Footer = (props) => {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="tech-used">
                    <h5 className="footer-head">
                        Technologies
                    </h5>
                    <ul>
                        <li className="footer-li">Javascript</li>
                        <li className="footer-li">MongoDB</li>
                        <li className="footer-li">Express</li>
                        <li className="footer-li">React</li>
                        <li className="footer-li">NodeJS</li>
                    </ul>
                </div>
                <div className="dev-team">
                    <h5 className="footer-head">
                        Developers
                    </h5>
                    <ul>
                        <li className="footer-li">Brad Barnes</li>
                        <li className="footer-li">Josh Burnwatt</li>
                        <li className="footer-li">Zachary Oliver</li>
                    </ul>
                </div>
                <div className="description">
                    <h5 className="footer-head">
                        <ul>
                            <li className="footer-head">Description</li>
                        </ul>
                    </h5>
                    <ul>
                        <li className="footer-li">This is a full-stack clone of Indigogo created in one week.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Footer);