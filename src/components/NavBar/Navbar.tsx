import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">TripFinder</div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Hotels</Link>
        </li>
        <li>
          <Link to="/">Flights</Link>
        </li>
        <li>
          <Link to="/Profile"></Link>
        </li>
        <li>
          <Link to="/login"></Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
