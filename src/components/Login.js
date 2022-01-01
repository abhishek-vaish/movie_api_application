import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import { auth } from "../firebase";
import useAuth from "../hooks/useAuth";
import App from "./App";
import "./Login.css";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const { user, setUser } = useAuth();
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const loginUser = async (e) => {
    e.preventDefault();
    if (!passwordRef.current.value && !emailRef.current.value) {
      setMessage("Please enter your email and password");
      return;
    }
    if (!emailRef.current.value) {
      setMessage("Please enter your email address");
      return;
    }
    if (!passwordRef.current.value) {
      setMessage("Please enter your password");
      return;
    }
    await signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((user) => {
        if (user) {
          setUser(true);
        }
        window.location.href = "/";
      })
      .then((err) => {
        console.log(err);
        setError(true);
      });
  };
  console.log(user);

  return (
    <div>
      <>
        <App title="Login User">
          <div className="login">
            <form className="login__form">
              <h2>Login User</h2>
              <input
                className="login__input email"
                ref={emailRef}
                type="email"
                placeholder="Enter your email address"
              />
              <input
                className="login__input password"
                ref={passwordRef}
                type="password"
                placeholder="Enter your password"
              />
              {error ? (
                <small>Something went wrong!!</small>
              ) : (
                <small style={{ color: "red" }}>{message}</small>
              )}
              <button className="login__button" onClick={loginUser}>
                Login
              </button>
              <p className="login__content">
                New to streaming?{" "}
                <span className="signup__link">
                  <a href="/register">Signup now</a>
                </span>
              </p>
            </form>
          </div>
        </App>
      </>
    </div>
  );
};

export default Login;
