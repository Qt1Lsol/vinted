import { Link } from "react-router-dom";

const HeaderVinted = () => {
  return (
    <header>
      <Link to="/login">
        <button type="button">connexion</button>
      </Link>
      <Link to="/signup">
        <button type="button">S'inscrire</button>
      </Link>
    </header>
  );
};
export default HeaderVinted;
