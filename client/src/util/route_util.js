import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Query, ApolloConsumer } from 'react-apollo';
import Queries from '../graphql/queries';
const { IS_LOGGED_IN } = Queries;

const AuthRoute = ({ component: Component, path, exact, routeType, ...rest }) => (
    <ApolloConsumer>
        {client => (
        <Query query={IS_LOGGED_IN}>
            {({ data }) => {
                if (routeType === 'auth') {
                    return <Route path={path} exact={exact} render={(props) => (
                        !data.isLoggedIn ? (
                            <Component {...props} />
                        ) : (
                            <Redirect to="/" />
                            )
                    )} />;
                } else {
                    if (data.isLoggedIn) {
                        return <Route
                            {...rest}
                            render={props => (
                                    <Component {...props} />
                                )
                            }
                        />
                    } else {
                        client.writeData({
                            data: {
                                modalType: "login",
                            }
                        });
                        return <Redirect to="landing"/>
                    }
                }
            }}
        </Query>
        )}
    </ApolloConsumer>
)

export default AuthRoute;