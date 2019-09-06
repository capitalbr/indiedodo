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
      password: ""
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
          <div className='login-container'>
            
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
              <div className='login-header'>
                  <h1>Welcome Back!</h1>
                  <p>Log in to continue.</p>
              </div>
              <div className='login-inputs'>
                <input
                  value={this.state.email}
                  onChange={this.update("email")}
                  placeholder="Email"
                />
                <input
                  value={this.state.password}
                  onChange={this.update("password")}
                  type="password"
                  placeholder="Password"
                />
                <a className='login-links' href="/register">Forgot your password?</a>
              </div>
              <div className='login-buttons'>
                <button className='login-button' type="submit">Log In</button>
                <button className='fb-button' onClick={this.demoLogin}> 
                  <i className="fab fa-facebook-f"></i>Demo Login
                </button>
              </div>
            </form>
            <footer className='session-switch'>
              <ApolloConsumer>
                {client => (
                  <span>New to IndieDodo? 
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
