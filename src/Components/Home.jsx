import { useEffect, useState } from "react";
import firebaseAuth from "../Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../App.css";

const HomePage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(firebaseAuth);
    navigate("/");
  };

  return (
    <div className="home-wrapper">
      <div className="navbar">
        <h2>Welcome {user?.email ? user.email.split("@")[0] : "User"}</h2>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="home-hero">
        <div className="hero-bg"></div>
        <h1>
          {user?.email ? "Welcome" : "Welcome!"}
        </h1>
        <p className="hero-email">{user?.email}</p>
        <p>You're now logged into your account. Enjoy your journey with us!</p>
      </div>
    </div>
  );
};

export default HomePage;