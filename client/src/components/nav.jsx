import React from "react";
import { Link } from "react-router-dom";
import {FaSearch} from "react-icons/fa";
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
                                        <Link to='/'>
                                            <img  className="logo" src={logo} alt="IndieDodo"/>
                                        </Link>
                                    </div>

                                    <div className='nav-right'>
                                        <button
                                            onClick={e => {
                                                e.preventDefault();
                                                localStorage.removeItem("auth-token");
                                                client.writeData({ data: { isLoggedIn: false } });
                                                props.history.push("/");
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
                                        <Link to='/'>
                                            <img  className="logo" src={logo} alt="IndieDodo"/>
                                        </Link>
                                        <p>Explore</p>
                                        <p>What We Do</p>
                                        <FaSearch />
                                    </div>
                                    <div className='nav-right'>
                                        <Link to="/login">Login</Link>
                                        <Link to="/register">Register</Link>
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