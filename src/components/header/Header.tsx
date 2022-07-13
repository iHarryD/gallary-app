import { Link } from "react-router-dom";
import { useSearchQuery } from "../../contexts/SearchQueryContext";
import headerStyles from "./Header.module.css";

export default function Header() {
  const { searchQuery, setSearchQuery } = useSearchQuery();
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
            value={searchQuery}
            className={headerStyles["search-bar"]}
            placeholder="search by name"
            onChange={(e) => setSearchQuery(e.target.value)}
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
