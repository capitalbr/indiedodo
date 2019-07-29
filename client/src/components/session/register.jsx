import React, { Component } from "react";
import { Mutation } from "react-apollo";
import Mutations from "../../graphql/mutations";

const { REGISTER_USER } = Mutations;

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: ""
    };
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  updateCache(client, { data }) {
    client.writeData({
      data: { isLoggedIn: data.register.loggedIn }
    });
  }

  render() {
    return (
      <Mutation
        mutation={REGISTER_USER}
        onCompleted={data => {
          const { token } = data.register;
          localStorage.setItem("auth-token", token);
          this.props.history.push("/");
        }}
        update={(client, data) => this.updateCache(client, data)}
      >
        {registerUser => (
          <div className='register-container'>

            <form
              className='register-form'
              onSubmit={e => {
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
              }}
            >
              <div className='register-header'>
                <h1>Welcome!</h1>
                <p>Sign up to join IndieDodo</p>
              </div>

              <div className='register-inputs'>
                <input
                  value={this.state.name}
                  onChange={this.update("name")}
                  placeholder=" Full Name"
                />
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
                <label>
                  <input type="checkbox" value='email-signup'/> <span className='email-signup'>Sign me up for the IndieDodo newsletter</span>
                </label>
                <label>
                  <input type="checkbox" value='TOS-agree'/> <span className='tos-agree'>I agree to the <a href="https://www.indiegogo.com/about/terms"> Terms of Use </a> and <a href="https://www.indiegogo.com/about/privacy">Privacy Policy</a></span>
                </label>
              </div>
              <div className='register-buttons'>
                <button type="submit">Register</button>
              </div>
            </form>

            <footer className='session-switch'>
              <span>Already have an account? <a href="#/login">Log In</a></span>
            </footer>

          </div>
        )}
      </Mutation>
    );
  }
}

export default Register;