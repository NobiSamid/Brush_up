import React, { Component } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <h3>I already have an account</h3>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput name="email" type="email" value={this.state.email} label="Email" handleChange={this.handleChange} required />
          <label>Email</label>
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <label>Password</label>
          <CustomButton type='submit' >Sign in</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
