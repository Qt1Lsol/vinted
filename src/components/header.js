import { Link, useNavigate } from "react-router-dom";
import vinted_logo from "../assets/img/vinted_logo.png";
import "../assets/css/header.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderVinted = ({ token, setUser }) => {
  // const navigate = useNavigate();

  return token ? (
    <header>
      <div>
        <Link to="/">
          <img className="vinted-logo" alt="vinted_logo" src={vinted_logo} />
        </Link>
      </div>
      <div>
        <form>
          <div className="icon-search-div">
            {/* <FontAwesomeIcon icon="envelope" className="icon-search" /> */}
            <input
              className="input-search"
              type="text"
              placeholder="Recherche des articles"
            />
          </div>
        </form>
      </div>
      <div>
        <Link
          className="btn-logout"
          to="/"
          onClick={() => {
            setUser(null);
          }}
        >
          Se déconnecter
        </Link>
      </div>
      <div>
        <Link to="/publish" className="btn-publish">
          Vend tes articles
        </Link>
      </div>
    </header>
  ) : (
    <header>
      <div>
        <Link to="/">
          <img className="vinted-logo" alt="vinted_logo" src={vinted_logo} />
        </Link>
      </div>
      <div>
        <form>
          <div className="icon-search-div">
            {/* <FontAwesomeIcon icon="envelope" className="icon-search" /> */}
            <input
              className="input-search"
              type="text"
              placeholder="Recherche des articles"
            />
          </div>
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
      <div>
        <Link to="/publish" className="btn-publish">
          Vend tes articles
        </Link>
      </div>
    </header>
  );
};
export default HeaderVinted;
