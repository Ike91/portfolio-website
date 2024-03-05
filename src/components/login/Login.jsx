import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  //use this to navigate
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true); // Set loading state to true while processing login

    try {
      // Attempt login
      await login(username, password);
      navigate("/admin");
    } catch (error) {
      if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password"
      ) {
        setError("Invalid email or password. Please try again.");
      } else if (error.code === "auth/invalid-email") {
        setError("Invalid email address.");
      } else {
        setError("Failed to log in. Please try again.");
      }
    } finally {
      setLoading(false);

      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="login p-4 sm:ml-64 sm:h-screen sm:mr-35 pb-5">
      <section class="section-services">
        <div class="container">
          <div className="justify-content-center register">
            <div class="form-content">
              <div class="login-dark">
                <form onSubmit={handleSubmit}>
                  {error && <Alert variant="danger">{error}</Alert>}
                  <div className="row justify-center">
                    <div className="col-md-5 card p-4">
                      <div class="illustration flex justify-center mt-3 mb-4">
                        <img
                          class="rounded-full border p-2"
                          src="../images/unnamed.png"
                          alt=""
                        />
                      </div>
                      <div class="form-group mb-3">
                        <input
                          class="form-control"
                          type="email"
                          name="email"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          placeholder="Email"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          className="form-control text-gray-300"
                          type="password"
                          name="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Password"
                        />
                      </div>
                      <div className="form-group mt-3">
                        <a
                          disabled={loading}
                          className="btn btn-primary w-full adminBtn btn-lg mr-2"
                        >
                          {loading ? (
                            <>
                              <i className="fas fa-spinner fa-spin mr-2"></i>
                              Logging in...
                            </>
                          ) : (
                            <>
                              <i className="fas fa-lock mr-2"></i>
                              Login
                            </>
                          )}
                        </a>
                      </div>
                      <div className="row text-center mb-4">
                        <a class="forgot mt-3 text-xs text-[#6f6f71]" href="#">
                          Forgot your email or password?
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
