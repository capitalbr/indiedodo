import React, { Component } from "react";
import { Mutation, ApolloConsumer } from "react-apollo";
import Mutations from "../../graphql/mutations";
import { withRouter } from 'react-router-dom';


const { LOGIN_USER } = Mutations;

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      forgotPWordText: false
    };

    this.demoLogin = this.demoLogin.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  updateCache(client, { data }, type) {
    if (data) {
      client.writeData({
        data: { 
          isLoggedIn: data.login.loggedIn,
          modalType: type
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

  demoLogin(e){
    this.setState({
      email: 'albus@hogwarts.edu',
      password: 'Qwerty1234!'
    });
  }

  render() {
    let forgotPWordText = "Forgot your password?";
    if (this.state.forgotPWordText) {
      forgotPWordText = "Thats OK! Logging you in as Guest..."
    }
    return (
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
          <div className='register-container'>
            
            <form
              className='login-form'
              onSubmit={e => {
                e.preventDefault();
                loginUser({
                  variables: {
                    email: this.state.email,
                    password: this.state.password,
                  }
                });
              }}
            >
              <div className='register-header'>
                  <h1>Welcome Back!</h1>
                  <p>Log in to continue.</p>
              </div>
              <div className='register-inputs'>
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
              </div>
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
                  <span id="forgot-password">
                    <div onClick={e => {
                      this.setState({
                        forgotPWordText: true
                      })
                      setTimeout(() => { 
                        loginUser({
                          variables: {
                            email: 'albus@hogwarts.edu',
                            password: 'Qwerty1234!'
                          }
                        }) 
                      }, 3000);
                    }}>{forgotPWordText}</div>
                  </span>
                )}
              </Mutation>
              <div className='register-buttons'>
                <button className='create-account' type="submit">Log In</button>
                <p>OR</p>
                <button className='guest-login' onClick={this.demoLogin}> 
                  GUEST LOGIN
                </button>
              </div>
            </form>
            <footer className='session-switch'>
              <ApolloConsumer>
                {client => (
                  <span>New to IndieDodo? &nbsp;
                    <div 
                      onClick={() => this.updateCache(client, {data: null}, "register")}>
                      Register
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

export default withRouter(Login);
