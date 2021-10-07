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
    <form onSubmit={handleFormSubmit}>
      <input
        className="form-input"
        placeholder="Email"
        name="email"
        value={formState.email}
        onChange={handleChange}
      />
      <input
        className="form-input"
        placeholder="User Name"
        name="username"
        value={formState.username}
        onChange={handleChange}
      />
      <input
        className="form-input"
        placeholder="Password"
        name="password"
        type="password"
        value={formState.password}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Signup;