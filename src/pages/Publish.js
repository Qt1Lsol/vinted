import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "../assets/css/login.css";

const Publish = ({ token }) => {
  const [picture, setPicture] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [place, setPlace] = useState("");
  const [price, setPrice] = useState("");

  const [data, setData] = useState();

  const navigate = useNavigate();

  // Envoyer les éléments du formulaire au serveur
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      // créer un objet de type FormData
      const data = new FormData();
      // ajouter des paires clé/valeur
      data.append("picture", picture);
      data.append("title", title);
      data.append("description", description);
      data.append("brand", brand);
      data.append("size", size);
      data.append("color", color);
      data.append("condition", condition);
      data.append("place", place);
      data.append("price", price);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        data,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      navigate(`/offer/${response.data._id}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  return token ? (
    <form onSubmit={handleSubmit}>
      <input
        // sélectionner plusieur fichiers
        // multiple={true}
        type="file"
        onChange={(event) => setPicture(event.target.files[0])}
      />

      <br />

      <input
        type="text"
        placeholder="Titre"
        onChange={(event) => setTitle(event.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Décrit ton article"
        onChange={(event) => setDescription(event.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Marque"
        onChange={(event) => setBrand(event.target.value)}
      />
      <br />
      <input
        type="number"
        placeholder="Taille"
        onChange={(event) => setSize(event.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Couleur"
        onChange={(event) => setColor(event.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Etat"
        onChange={(event) => setCondition(event.target.value)}
      />

      <br />
      <input
        type="text"
        placeholder="Lieu"
        onChange={(event) => setPlace(event.target.value)}
      />

      <br />
      <input
        type="text"
        placeholder="Prix"
        onChange={(event) => setPrice(event.target.value)}
      />

      <br />
      <input type="submit" />
    </form>
  ) : (
    <Navigate to="/login" />
  );
};

export default Publish;
