import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Signup = ({
  handleSubmit,
  setName,
  setEmail,
  setPassword,
  setConfirmPassword,
  name,
  email,
  password,
  confirmPassword,
  errorPassword,
}) => {
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <span>Name</span>
      <input
        value={name}
        placeholder="Jean Dupont"
        onChange={(e) => setName(e.target.value)}
      />
      <span>Email</span>
      <input
        value={email}
        placeholder="jeandupont@lereacteur.io"
        onChange={(e) => setEmail(e.target.value)}
      />
      <span>Password</span>
      <div>
        <input
          className={errorPassword && "error"}
          value={password}
          type={"password"}
          placeholder="lErEaCtEuR2020"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <span>Confirm your password</span>
      <div>
        <input
          className={errorPassword && "error"}
          type={"password"}
          value={confirmPassword}
          placeholder="lErEaCtEuR2020"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      {errorPassword && (
        <span className="error-message">
          Les mots de passe ne sont pas identiques
        </span>
      )}
      <input className="submit-button" value="Register" type="submit" />
    </form>
  );
};

export default Signup;
