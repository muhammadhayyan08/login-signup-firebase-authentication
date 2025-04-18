import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import firebaseAuth from "../Firebase";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      alert("Welcome back!");
      navigate("/home");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
        
      <p>
  <Link to="/forgot-password">Forgot Password?</Link>
</p>

    </div>
  );
};

export default LoginPage;
