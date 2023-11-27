import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Ngekoss.id</span>
        </Link>
        <div className="navItems">
          <button className="navButton">Daftar</button>
          <Link to="/login">
            <button className="navButton">Masuk</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
