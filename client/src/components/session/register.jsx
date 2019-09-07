import React, { Component } from "react";
import { Mutation, ApolloConsumer } from "react-apollo";
import Mutations from "../../graphql/mutations";
import { withRouter } from 'react-router-dom';

const { REGISTER_USER } = Mutations;
const { LOGIN_USER } = Mutations;

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      checkboxTerms: false
    };
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  toggleCheck(type){
    switch (type){
      case "terms":
        if (this.state["checkboxTerms"]){
          return false;
        } else {
          return true;
        }
      default:
        return "";
    }
  }

  updateCheckbox(field) {
    return e => {
      switch (field){
        case "terms":
          this.setState({ checkboxTerms: this.toggleCheck("terms") });
          break;
      default:
        return;
      }
    }
    
  }

  updateCache(client, { data }, type) {
    if (data) {
      client.writeData({
        data: { 
          isLoggedIn: data.register ? data.register.loggedIn : data.login.loggedIn,
          modalType: false
         }
      });
    } else {
      client.writeData({
        data: {
          modalType: type
        }
      });
    }
  }

  demoLogin(e, query){
    e.preventDefault();
    query({
      variables: {
        email: 'albus@hogwarts.edu',
        password: 'Qwerty1234!'
      }
    })
  }

  render() {
    let style = {};
    if (!this.state.checkboxTerms){
      style = {
        color: "rgb(15, 121, 170)"
      }
    }
    return (
      <Mutation
        mutation={REGISTER_USER}
        onCompleted={data => {
          const { name, token } = data.register;
          localStorage.setItem("current-user", name);
          localStorage.setItem("auth-token", token);
          this.props.history.push("/landing");
        }}
        update={(client, data) => this.updateCache(client, data, false)}
      >
        {registerUser => (
          <div className='register-container'>

            <form
              className='register-form'>
              <div className='register-header'>
                <h1>Welcome!</h1>
                <p>Sign up to join IndieDodo</p>
              </div>

              <div className='register-inputs'>
                <div className="input-container">
                  <div className="register-inputs-title">
                    Full Name
                  </div>
                  <input
                    value={this.state.name}
                    onChange={this.update("name")}
                    placeholder="Your Full Name"
                  />
                </div>
                <div className="input-container">
                  <div className="register-inputs-title">
                    Email
                  </div>
                  <input
                    value={this.state.email}
                    onChange={this.update("email")}
                    placeholder="Your Email"
                  />
                </div>
                <div className="input-container">
                  <div className="register-inputs-title">
                    Password
                  </div>
                  <input
                    value={this.state.password}
                    onChange={this.update("password")}
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <div className="checkbox-container">
                  <input 
                    className="session-checkbox" 
                    type="checkbox" 
                    value='email-signup' 
                    id="session-checkbox-1"
                  /><label className="checkbox-label" htmlFor="session-checkbox-1"/>
                  <span 
                    className='email-signup'>
                    Sign me up for the IndieDodo newsletter
                  </span>
                </div>
                <div className="checkbox-container">
                  <input 
                    className="session-checkbox" 
                    type="checkbox" 
                    value='TOS-agree'
                    id="session-checkbox-2"
                    onChange={this.updateCheckbox("terms")}
                  /><label className="checkbox-label" htmlFor="session-checkbox-2" />
                  <span 
                    className='tos-agree'
                    style={style}
                    >
                    I agree to the &nbsp;   
                    <a 
                      style={style}
                      href="https://www.indiegogo.com/about/terms"> 
                      Terms of Use 
                    </a> &nbsp;and &nbsp;
                    <a 
                      style={style}
                      href="https://www.indiegogo.com/about/privacy">
                      Privacy Policy</a>
                  </span>
                </div>
              </div>
              <div className='register-buttons'>
                <button
                  className="create-account" 
                  type="submit"
                  onClick={e => {
                    e.preventDefault();
                    registerUser({
                      variables: {
                        name: this.state.name,
                        email: this.state.email,
                        password: this.state.password,
                        // bio_header: this.state.bio_header,
                        // bio: this.state.bio
                      }
                    });
                  }}>
                    Create Account
                </button>
                <p>OR</p>
                <Mutation
                  mutation={LOGIN_USER}
                  onCompleted={data => {
                    const { name, token } = data.login;

                    localStorage.setItem("auth-token", token);
                    localStorage.setItem("current-user", name);
                    this.props.history.push("/landing");
                  }}
                  update={(client, data) => this.updateCache(client, data, false)}
                >
                  {loginUser => (
                    <button
                      className="guest-login"
                      type="submit"
                      onClick={ e => this.demoLogin(e, loginUser)}
                      >
                      GUEST LOGIN
                    </button>
                  )}
                </Mutation>
              </div>
            </form>

            <footer className='session-switch'>
              <ApolloConsumer>
                {client => (
                  <span>
                    Already have an account? &nbsp;
                    <div
                      onClick={() => this.updateCache(client, { data: null }, "login")}>
                      Log In
                    </div>
                  </span>
                )}
              </ApolloConsumer>
            </footer>

          </div>
        )}
      </Mutation>
    );
  }
}

export default withRouter(Register);