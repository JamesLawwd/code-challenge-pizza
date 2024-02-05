import { Link } from "react-router-dom";
import pizzaIcon from "../pizzaIcon.png";

function NavigationBar() {
  return (
    <header>
      <div className="branding">
        <img src={pizzaIcon} alt="Pizza icon" />
        <h1>Pizza Hub</h1>
      </div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </header>
  );
}

export default NavigationBar;
