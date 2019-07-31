import React from "react";
import { Link } from "react-router-dom";
import { Query, ApolloConsumer } from "react-apollo";
import {FaSearch, FaAngleDown} from "react-icons/fa";
import logo from "../../logo.png";
import NavUser from "./NavUser";
import Queries from "../../graphql/queries";
const { IS_LOGGED_IN } = Queries;


const Nav = props => {
    return (
        <ApolloConsumer>
            {client => (
                <Query query={IS_LOGGED_IN}>
                    {({ data }) => {
                        if (data.isLoggedIn) {
                            return (
                                <nav className='nav-container'>
                                    <div className='nav-left'>
                                        <Link className="brand"to='/landing'>
                                            <img  className="logo" src={logo} alt="IndieDodo"/>
                                            <p className="wordmark">INDIEDODO</p>
                                        </Link>
                                        <div className='search-container'>
                                            <div className='explore-container'>
                                                <span>Explore <FaAngleDown /></span>
                                            </div>
                                            <Link to='/about'>What We Do</Link>
                                            <FaSearch />
                                        </div>
                                    </div>
                                    <div className='nav-right'>
                                        <div className='new-campaign'>
                                            <Link className='new-link'to='/new-campaign'>Start a new Campaign</Link>
                                        </div>
                                        <NavUser />
                                    </div>
                                </nav>
                            );
                        } else {
                            return (
                                <nav className='nav-container'>
                                    <div className='nav-left'>
                                        <Link className="brand"to='/landing'>
                                            <img  className="logo" src={logo} alt="IndieDodo"/>
                                            <p className="wordmark">INDIEDODO</p>
                                        </Link>
                                        <div className='search-container'>
                                            <div className='explore-container'>
                                                <span>Explore <FaAngleDown /></span>
                                            </div>
                                            <Link to='/about'>What We Do</Link>
                                            <FaSearch />
                                        </div>
                                    </div>
                                    <div className='nav-right'>
                                        <div className='new-campaign'>
                                            <Link to='/new-campaign'>Start a new Campaign</Link>
                                        </div>
                                        <div className='login-signup'>
                                            <Link to="/login">Login</Link>
                                            <Link to="/register">Sign Up</Link>
                                        </div>
                                    </div>
                                </nav>
                            );
                        }
                    }}
                </Query>
            )}
        </ApolloConsumer>
    );
};

export default Nav;