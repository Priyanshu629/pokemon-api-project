import { createContext, useContext, useState } from "react";

const searchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  return (
    <searchContext.Provider value={{ searchText, setSearchText }}>
      {children}
    </searchContext.Provider>
  );
};
export const useSearch = () => useContext(searchContext);
