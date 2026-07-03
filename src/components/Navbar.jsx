import react from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <h2>📚 City Library</h2>

      <ul>
        <li>Home</li>
        <li>Books</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>

    </nav>
  );
}

export default Navbar;
