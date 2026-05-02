import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = () => {
    axios.post("http://localhost:5000/api/auth/login", {
      email,
      password
    }).then(res => {
      localStorage.setItem("token", res.data.token);
      alert("Login successful");
    });
  };

  return (
    <div>
      <h2>Login</h2>

      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />

      <button onClick={loginUser}>Login</button>
    </div>
  );
}

export default Login;