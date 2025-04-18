import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import firebaseAuth from "../Firebase";
import { Link } from "react-router-dom";
import "../App.css";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleForgotPassword = async () => {
    setError("");
    setMessage("");
    setIsLoading(true);

    try {
      await sendPasswordResetEmail(firebaseAuth, email);
      setMessage("Password reset email sent successfully. Please check your inbox.");
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        setError("Email Invalid: No user found with this email.");
      } else if (err.code === "auth/invalid-email") {
        setError("Invalid email format.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h2>Forgot Password</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleForgotPassword} disabled={isLoading}>
        {isLoading ? "Sending..." : "Send Reset Email"}
      </button>

      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <p>
        Remembered your password? <Link to="/">Login</Link>
      </p>
    </div>
  );
};

export default ForgotPasswordPage;
