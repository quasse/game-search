import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const [login, { error }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({ variables: { ...formState } });
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({ email: "", password: "" });
  };

  return (
    <div className="login-container">
      <h4>Login</h4>
      <form className="login-form" onSubmit={handleFormSubmit}>
        <label for="login-email">Email: </label>
        <input
          id="login-email"
          className="form-input"
          placeholder="Email"
          name="email"
          value={formState.email}
          onChange={handleChange}
        />
        <label for="login-password">Password: </label>
        <input
          id="login-password"
          className="form-input"
          placeholder="*******"
          name="password"
          type="password"
          value={formState.password}
          onChange={handleChange}
        />
        <button className="form-button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
