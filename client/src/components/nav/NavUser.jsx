import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { Mutation } from "react-apollo";
import Mutations from "../../graphql/mutations";
const {VERIFY_USER} = Mutations;

const NavUser = (props) => {
    return (
        <div className='user-nav'>
            <div>
                <FaUser />
                <p>{props.user.name}</p>
            </div>
        </div>
    )
}

export default NavUser;