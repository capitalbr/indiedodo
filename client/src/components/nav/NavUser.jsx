import React from 'react';
// import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
// import { Mutation } from "react-apollo";
// import Mutations from "../../graphql/mutations";
// const {VERIFY_USER} = Mutations;

class NavUser extends React.Component {
    // constructor(props){
    //     super(props);
    // }    
    
    render(){
        if (!this.props.user) return (<div></div>);
        
        return (
            <div className='user-nav'>
                <div>
                    <FaUser />
                    <p>{this.props.user.name}</p>
                </div>
            </div>
        )
    }    
    
}

export default NavUser;