import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <ul className="navigation">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
