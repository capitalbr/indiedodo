import React from 'react';
// import { Link } from 'react-router-dom';
import { FaUser, FaChevronDown } from 'react-icons/fa';
import { ApolloConsumer } from "react-apollo";
import Queries from "../../graphql/queries";
const { CURRENT_USER } = Queries;

class NavUser extends React.Component {
    constructor(props){
        super(props);
        this.verifyUser = this.verifyUser.bind(this);
    }
    
    verifyUser(token, client){
        client.query({query: CURRENT_USER, variables: {token}})
        .then(({data}) => {
          this.temp = data.currentUser
        })
    }
    
    render(){
        return <ApolloConsumer>
            { (client) => {
                const currentUser = localStorage.getItem("current-user")
                return(
                    <div className='user-nav'>
                        <div className='user-menu'>
                            <div className='user'>
                                <FaUser />
                                <p>{currentUser}</p>
                                <FaChevronDown className="dropdown-btn"/>
                            </div>
                            <div className='dropdown-content'>
                                <button
                                    className='logout'
                                    onClick={e => {
                                        e.preventDefault();
                                        localStorage.removeItem("auth-token");
                                        localStorage.removeItem("current-user");
                                        client.writeData({
                                            data: {
                                                isLoggedIn: false,
                                                currentUser: null,
                                                cart: []
                                            }
                                        });
                                    }}
                            >Logout</button>
                            </div>
                        </div>
                    </div>
                );
            }}
        </ApolloConsumer>
    }    
    
}

export default NavUser;