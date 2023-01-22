import { Results } from "./Results/Results";
import { Search } from "./Search/Search";
import { useState } from "react";

export const FindPal = () => {
  const [searchData, setSearchData] = useState({});
  return (
    <>
      <p>Znajdź FitPala</p>
      <Search setSearchData={setSearchData} />
      <Results searchData={searchData} />
    </>
  );
};
