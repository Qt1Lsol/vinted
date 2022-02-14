import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../assets/css/home.css";
import img_vinted from "../assets/img/img_vinted.png";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/offers"
      );
      //   console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <div>En cours de chargement...</div>
  ) : (
    <div className="home">
      <img className="img-vinted" alt="img-vinted" src={img_vinted} />
      <div className="container">
        {data.offers.map((offer) => {
          return (
            <Link key={offer._id} to={`/offer/${offer._id}`}>
              <div className="card">
                <h2>{offer.product_name}</h2>
                <img src={offer.product_image.secure_url} alt="" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
