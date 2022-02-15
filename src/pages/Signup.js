import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "../assets/css/signup.css";

const Signup = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          email: email,
          username: username,
          password: password,
          newsletter: newsletter,
        }
      );

      if (response.data.token) {
        setUser(response.data.token);
        navigate("/");
      }
    } catch (error) {
      if (error.response.status === 409) {
        setErrorMessage("Cet email a déjà un compte");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <div>
        <h1>S'inscrire</h1>
      </div>
      <div className="input-form">
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          onChange={(event) => setPassword(event.target.value)}
        />

        <div>
          <div className="chk_box">
            <input
              className="input-chk-box"
              type="checkbox"
              onChange={(event) => setNewsletter(event.target.checked)}
            />
            <label>S'inscrire à notre newsletter</label>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium vel nemo beatae minus esse pariatur facilis obcaecati
            explicabo. Voluptates porro eaque, quidem cupiditate distinctio
            debitis ipsa facere officia maiores facilis.
          </p>
        </div>

        <input className="submit-button" type="submit" value="S'inscrire" />

        <div className="link">
          <Link to="/login">Tu as déja un compte ? Connecte-toi !</Link>
        </div>
      </div>

      <span>{errorMessage}</span>
    </form>
  );
};

export default Signup;
