import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const registerUser = () => {
    if (!name || !email || !password) {
      alert("Fill all fields");
      return;
    }

    axios.post("http://localhost:5000/api/auth/register", {
      name,
      email,
      password
    })
    .then(res => {
      alert(res.data.message);
      navigate("/login");
    })
    .catch(err => {
      alert(err.response?.data?.message || "Registration failed");
    });
  };

  return (
  <div style={styles.page}>
    <div style={styles.card}>
      <h2 style={styles.title}>Create Account</h2>

      <input
        style={styles.input}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        style={styles.input}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        style={styles.input}
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button style={styles.button} onClick={registerUser}>
        Register
      </button>

      <p style={styles.text}>
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  </div>
);
}

const styles = {
  page: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "radial-gradient(circle at top, rgba(59,130,246,0.25), transparent 50%), linear-gradient(135deg, #0f172a, #111827)",
    color: "white",
    fontFamily: "Arial"
  },

  card: {
  width: "320px",
  padding: "25px",
  borderRadius: "18px",
  background: "rgba(255,255,255,0.06)",
  backdropFilter: "blur(14px)",
  border: "1px solid rgba(255,255,255,0.08)",
  boxShadow: "0 10px 40px rgba(0,0,0,0.4)"
},

  title: {
    marginBottom: "20px",
    textAlign: "center"
  },

  input: {
    width: "100%",
    padding: "10px",
    margin: "8px 0",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.05)",
    color: "white",
    outline: "none"
  },

  button: {
  width: "100%",
  padding: "12px",
  borderRadius: "12px",
  border: "none",
  background: "linear-gradient(135deg, #3b82f6, #2563eb)",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
  boxShadow: "0 8px 20px rgba(59,130,246,0.3)"
},

  text: {
    marginTop: "10px",
    textAlign: "center",
    fontSize: "14px",
    opacity: 0.8
  }
};
export default Register;