import "../assets/css/payment.css";
import { Navigate, useNavigate } from "react-router-dom";

import React from "react";
import { useLocation } from "react-router-dom";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");

const Payment = ({ token }) => {
  const Navigate = useNavigate();
  const location = useLocation();
  const { title } = location.state;
  const { price } = location.state;

  return token ? (
    <div className="card-payment">
      <span>Résumé de la commande</span>

      <div className="row">
        <div className="col-description">Commande</div>
        <div className="col-price">{price}€</div>
      </div>

      <div className="row">
        <div className="col-description">Frais de protection</div>
        <div className="col-price">0.40€</div>
      </div>

      <div className="row">
        <div className="col-description">Frais de port</div>
        <div className="col-price">0.80€</div>
      </div>

      <div className="row">
        <div className="col-description" >Total</div>
        <div className="col-price">0.80€</div>
      </div>

      <span>
        Il ne vous reste plus qu'une étape pour vous offrir :"{title}". Vous
        allez payer {price} €. Frais de port et protection inlcus
      </span>

      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Payment;
