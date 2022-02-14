import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/login.css";
import { Link } from "react-router-dom";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );

      if (response.data.token) {
        setUser(response.data.token);
        navigate("/");
      }
    } catch (error) {
      if (error.response.status === 400 || error.response.status === 401) {
        setErrorMessage("Mauvais email et/ou mot de passe");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form_login">
      <div>
        <h1>Se connecter</h1>
      </div>

      <input
        type="email"
        placeholder="Adresse email"
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        placeholder="Mot de passe"
        onChange={(event) => setPassword(event.target.value)}
      />
      <input type="submit" value="Se Connecter" className="btn-connect" />

      <div className="link">
        <Link to="/signup">Pas encore de compte ? Inscris-toi !</Link>
      </div>
    </form>
  );
};

export default Login;
