import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/Login";
import SignupPage from "./Components/Signup";
import HomePage from "./Components/Home";
import PublicRoute from "./Routes/PublicRoute";
import PrivateRoute from "./Routes/PrivateRoute";
import { AuthProvider } from "./Context/AuthContext";
import ForgotPasswordPage from "./Components/Forgotpassword";





const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <SignupPage />
              </PublicRoute>
            }
          />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <PublicRoute>
                <ForgotPasswordPage />
              </PublicRoute>
            }
          />

        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
