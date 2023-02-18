import { Results } from "./Results/Results";
import { Search } from "./Search/Search";
import { useState } from "react";
import styles from "./FindPal.module.css";

export const FindPal = () => {
  const [searchData, setSearchData] = useState({});
  return (
    <>
      <h2 className={styles.formHeader}>Znajdź FitPala</h2>
      <Search setSearchData={setSearchData} />
      <Results searchData={searchData} />
    </>
  );
};
