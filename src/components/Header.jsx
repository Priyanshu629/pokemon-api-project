import { useSearch } from "../context/searchContext";

const Header = () => {
  const { setSearchText } = useSearch();

  return (
    <header className="header">
      <h1>PokePy</h1>

      <input
        type="text"
        placeholder="search your favourite pokemon"
        onChange={(e) => setSearchText(e.target.value)}
      />
      
    </header>
  );
};

export default Header;
