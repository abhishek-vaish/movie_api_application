import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useRef, useState } from "react";
import { auth } from "../firebase";
import App from "./App";
import "./Signup.css";

const Signup = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const nameRef = useRef("");
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();
    if (
      !passwordRef.current.value &&
      !emailRef.current.value &&
      !nameRef.current.value
    ) {
      setMessage("Please enter your details");
      return;
    }
    if (!nameRef.current.value) {
      setMessage("Please enter your name");
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
    await createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((user) => {
        updateProfile(user.user, {
          displayName: nameRef.current.value,
        });
        window.location.href = "/";
      })
      .catch(() => setError(true));
  };

  return (
    <div>
      <>
        <App title="Signup User">
          <div className="signup">
            <form className="signup__form">
              <h2>Register User</h2>
              <input
                className="signup__input"
                ref={nameRef}
                type="name"
                placeholder="Enter your full name"
              />
              <input
                className="signup__input"
                ref={emailRef}
                style={{ border: error ? "1px solid red" : "0px" }}
                type="email"
                placeholder="Enter your email address"
              />
              <input
                className="signup__input"
                ref={passwordRef}
                sytle={{ border: error ? "1px solid red" : "0px" }}
                type="password"
                placeholder="Enter your password"
              />
              <small style={{ color: "red" }}>{message}</small>
              <button className="signup__button" onClick={registerUser}>
                Signup
              </button>
              <p className="signup__content">
                Already a member?{" "}
                <span className="signin__link">
                  <a href="/login">Signin now</a>
                </span>
              </p>
            </form>
          </div>
        </App>
      </>
    </div>
  );
};

export default Signup;
