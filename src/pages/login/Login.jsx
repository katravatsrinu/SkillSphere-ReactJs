import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState(""); // Track username
  const [password, setPassword] = useState(""); // Track password
  const [error, setError] = useState(""); // State to handle error messages
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve data from local storage
    const storedUsers = JSON.parse(localStorage.getItem("users"));

    if (!storedUsers || storedUsers.length === 0) {
      setError("No registered users found.");
      return;
    }

    // Check if any user with the given username and password exists
    const user = storedUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      // Clear error and navigate to the home page
      setError("");
      navigate("/");
    } else {
      setError("Incorrect username or password.");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
