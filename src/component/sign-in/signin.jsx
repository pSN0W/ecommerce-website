import React from "react";

import "./signin.scss";

import FormInput from "../form-input/form-input";

import CustomButton from "../custom-button/custom-button";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = () => {
    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <h2>Already have an account</h2>
        <span>Sign In with your Email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handlechange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handlechange={this.handleChange}
            label="Password"
            required
          />
          <CustomButton type="submit">Sign in </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
