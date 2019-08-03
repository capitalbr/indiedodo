import React from 'react';
// import { Link } from 'react-router-dom';
import { FaUser, FaChevronDown } from 'react-icons/fa';
import { ApolloConsumer } from "react-apollo";
import Queries from "../../graphql/queries";
const { CURRENT_USER } = Queries;

class NavUser extends React.Component {
    constructor(props){
        super(props);

        // this.temp = "";
        this.verifyUser = this.verifyUser.bind(this);
    }
    
    verifyUser(token, client){
        client.query({query: CURRENT_USER, variables: {token}})
        .then(({data}) => {
          // this.setState({user: user._id})
    
          this.temp = data.currentUser
        })
    }
    
    render(){
        return <ApolloConsumer>
            { (client) => {
                const currentUser = localStorage.getItem("current-user")
                // this.verifyUser(token, client);
                // let name = this.temp.name;
                
                // let firstName = name.split(" ");
                return(
                    <div className='user-nav'>
                        <div className='user-menu'>
                            <FaUser />
                            <p>{currentUser}</p>
                            <FaChevronDown className="dropdown-btn"/>
                            <div className='dropdown-container'>
                                <a href="">My Profile</a>
                                <a href="">My Campaigns</a>
                                <a href="">My Contributions</a>
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