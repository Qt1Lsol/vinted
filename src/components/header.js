import { Link } from "react-router-dom";

const HeaderVinted = () => {
  return (
    <header>
      <Link to="/login">
        <button type="button">connexion</button>
      </Link>
    </header>
  );
};
export default HeaderVinted;
