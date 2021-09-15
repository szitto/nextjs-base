import React from "react";

import styles from "./index.module.scss";

import Bar from "components/Search/Bar";
import Results from "components/Search/Results";

const Search: React.FC = (): JSX.Element => {
  const [searchResults, setSearchResults] = React.useState([]);

  return (
    <>
      <Bar updateResults={setSearchResults} />
      <Results results={searchResults} />
    </>
  );
};

export default Search;
