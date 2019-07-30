import React from "react";
import { Link } from "react-router-dom";
import {FaSearch, FaAngleDown} from "react-icons/fa";
import logo from "../../src/logo.png";
import { Query, ApolloConsumer } from "react-apollo";
import Queries from "../graphql/queries";
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
                                        <Link to='/splash'>
                                            <img  className="logo" src={logo} alt="IndieDodo"/>
                                        </Link>
                                    </div>

                                    <div className='nav-right'>
                                        <button
                                            onClick={e => {
                                                e.preventDefault();
                                                localStorage.removeItem("auth-token");
                                                client.writeData({ data: { isLoggedIn: false } });
                                                props.history.push("/splash");
                                            }}
                                        >
                                            Logout
                                        </button>
                                        <button 
                                            onClick={ e => {
                                            e.preventDefault();
                                            props.history.push("/new-campaign")
                                        }}>
                                            Start a new campaign
                                        </button>
                                    </div>

                                </nav>
                            );
                        } else {
                            return (
                                <nav className='nav-container'>
                                    <div className='nav-left'>
                                        <Link className="brand"to='/splash'>
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