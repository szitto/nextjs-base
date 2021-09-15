import React from "react";

import styles from "./index.module.scss";

export interface IProps {
  updateResults: any;
}

const Bar: React.FC<IProps> = ({ updateResults }): JSX.Element => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const fetchResults = async (searchTerm: string) => {
    const concatenatedSearchTerm = searchTerm.replace("", "+");

    try {
      const response = await fetch(
        `https://itunes.apple.com/search?term=${searchTerm}&limit=10&entity=musicArtist,album,song`
      );
      const jsonResponse = await response.json();

      updateResults(jsonResponse.results);

      return jsonResponse;
    } catch (e) {
      console.log("error", e.message);
    }

    return null;
  };

  React.useEffect(() => {
    if (searchTerm.length > 0) {
      const results = fetchResults(searchTerm);
    } else {
      updateResults("");
    }
  }, [searchTerm]);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
    </div>
  );
};

export default Bar;
