import React, { Component } from "react";
import { Mutation } from "react-apollo";
import Mutations from "../../graphql/mutations";

const { LOGIN_USER } = Mutations;

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.fbLogin = this.fbLogin.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  updateCache(client, { data }) {
    client.writeData({
      data: { isLoggedIn: data.login.loggedIn }
    });
  }

  fbLogin(e){
    e.preventDefault();
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
          debugger;
          localStorage.setItem("auth-token", token);
          localStorage.setItem("current-user", name);
          this.props.history.push("/landing");
        }}
        update={(client, data) => this.updateCache(client, data)}
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
                <button className='fb-button' onClick={this.fbLogin}> 
                  Continue with Guestbook
                </button>
              </div>
            </form>
            <footer className='session-switch'>
              <span>New to IndieDodo? <a href="#/register">Register</a></span>
            </footer>
          </div>
        )}
      </Mutation>
    );
  }
}

export default Login;
