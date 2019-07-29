import React from "react";
import { Link } from "react-router-dom";

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
                                <nav>
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
                                    <button 
                                        onClick={ e => {
                                        e.preventDefault();
                                        props.history.push("/")
                                    }}>
                                        All Products
                                    </button>
                                </nav>
                            );
                        } else {
                            return (
                                <nav>
                                    <Link to="/login">Login</Link>
                                    <br/>
                                    <Link to="/register">Register</Link>
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