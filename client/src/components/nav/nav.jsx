import React from "react";
import { Link } from "react-router-dom";
import { Query, ApolloConsumer } from "react-apollo";
import logo from "../../logo.png";
import NavUser from "./NavUser";
import Queries from "../../graphql/queries";
const { IS_LOGGED_IN } = Queries;



class Nav extends React.Component{
  session(e, type, client){
    e.preventDefault();
    client.writeData({
      data: {
        modalType: type,
      }
    });
  }
  render(){
    return (
      <ApolloConsumer>
        {client => (
          <Query query={IS_LOGGED_IN}>
            {({ data }) => {
              if (data.isLoggedIn) {
                return (
                  <nav className='nav-container'>
                    <div className='nav-left'>
                      <Link className="brand" to='/landing'>
                        <img  className="logo" src={logo} alt="IndieDodo"/>
                        <p className="wordmark">INDIEDODO</p>
                      </Link>
                      {/* <div className='search-container'>
                          <div className='explore-container'>
                              <span>Explore <FaAngleDown /></span>
                          </div>
                          <Link to='/about'>What We Do</Link>
                          <FaSearch />
                      </div> */}
                    </div>
                    <div className='nav-right'>
                      <div className='new-campaign'>
                        <Link className='new-link' to='/new-campaign'>Start a new Campaign</Link>
                      </div>
                      <NavUser />
                    </div>
                  </nav>
                );
              } else {
                return (
                    <nav className='nav-container'>
                      <div className='nav-left'>
                        <Link className="brand" to='/landing'>
                          <img  className="logo" src={logo} alt="IndieDodo"/>
                          <p className="wordmark">INDIEDODO</p>
                        </Link>
                        {/* <div className='search-container'>
                            <div className='explore-container'>
                                <span>Explore <FaAngleDown /></span>
                            </div>
                            <Link to='/about'>What We Do</Link>
                            <FaSearch />
                        </div> */}
                      </div>
                      <div className='nav-right'>
                        <div className='new-campaign'>
                          <div 
                            className='new-campaign-link'
                            onClick={e => this.session(e, "login", client)}>
                            Start a Campaign
                          </div>
                        </div>
                        <div className='login-signup'>
                          <div 
                            id="login-nav-button"
                            onClick={e => this.session(e, "login", client)}>
                            Log In
                          </div>
                          <div 
                            id="signup-nav-button"
                            onClick={e => this.session(e, "register", client)}>
                            Sign Up
                          </div>
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

  }
};

export default Nav;