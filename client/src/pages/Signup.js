import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const Signup = (props) => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [addUser, { error }] = useMutation(ADD_USER);

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
      const { data } = await addUser({ variables: { ...formState } });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({ email: "", username: "", password: "" });
  };

  return (
    <div className="signup-container">
        <h4>Sign Up</h4>
        <form  className="signup-form" onSubmit={handleFormSubmit}>
            <label for="signup-email">Email: </label>
            <input
                id="signup-email"
                className="form-input"
                placeholder="Email"
                name="email"
                value={formState.email}
                onChange={handleChange}
            />
            <label for="signup-username">User Name: </label>
            <input
                id="signup-username"
                className="form-input"
                placeholder="User Name"
                name="username"
                value={formState.username}
                onChange={handleChange}
            />
            <label for="signup-password">Password: </label>
            <input
                id="signup-password"
                className="form-input"
                placeholder="Password"
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

export default Signup;