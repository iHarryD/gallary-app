import { Link } from "react-router-dom";
import headerStyles from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <nav className={headerStyles["navbar"]}>
        <div className={headerStyles["logo"]}>
          <Link to="/">
            <h3>Gallery App</h3>
          </Link>
        </div>
        <div>
          <input
            className={headerStyles["search-bar"]}
            placeholder="search by name"
          />
        </div>
        <div>
          <Link to="/new">
            <button>New</button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
