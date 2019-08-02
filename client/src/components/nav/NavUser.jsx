import React from 'react';
// import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
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
                debugger;
                // let firstName = name.split(" ");
                return(
                    <div className='user-nav'>
                        <div>
                            <button
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
                            > <FaUser /> </button>
                            <p>{currentUser}</p>
                        </div>
                    </div>
                );
            }}
        </ApolloConsumer>
    }    
    
}

export default NavUser;