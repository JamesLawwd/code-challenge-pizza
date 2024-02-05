import { Link } from "react-router-dom";
import pizzaLogo from "../pizzaLogo.png";

function Header() {
  return (
    <header>
      <div className="brand">
        <img src={pizzaLogo} alt="Pizza logo" />
        <h1>Pizza Palace</h1>
      </div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </header>
  );
}

export default Header;
