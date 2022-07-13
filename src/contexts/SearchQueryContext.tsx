import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface ISearchQueryContext {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

const SearchQueryContext = createContext<ISearchQueryContext>(
  {} as ISearchQueryContext
);

export function SearchQueryProvider({ children }: { children: ReactNode }) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  return (
    <SearchQueryContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchQueryContext.Provider>
  );
}

export function useSearchQuery() {
  return useContext(SearchQueryContext);
}
