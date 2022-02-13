import { Link, useNavigate } from "react-router-dom";
import vinted_logo from "../assets/img/vinted_logo.png";
import "../assets/css/header.css";
import { IconName } from "react-icons/md";

const HeaderVinted = ({ token, setUser }) => {
  const navigate = useNavigate();

  return token ? (
    <button
      onClick={() => {
        setUser(null);
        navigate("/");
      }}
    >
      Se déconnecter
    </button>
  ) : (
    <header>
      <div>
        <img className="vinted-logo" alt="vinted_logo" src={vinted_logo} />
      </div>
      <div>
        <form>
          <span class="material-icons">search</span>
          <input className="input-search" type="text" />
        </form>
      </div>
      <div>
        <Link to="/login" className="btn-login">
          Connexion
        </Link>
      </div>
      <div>
        <Link to="/signup" className="btn-signup">
          S'inscrire
        </Link>
      </div>
    </header>
  );
};
export default HeaderVinted;
