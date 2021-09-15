import React from "react";

import styles from "./index.module.scss";

export interface IProps {
  results: any[];
}

const Results: React.FC<IProps> = ({ results }): JSX.Element =>
  results.length ? (
    <div className={styles.container}>
      <ul className="results">
        {console.log(results)}
        {results.map((r, i) => (
          <li key={i}>
            <p>Artist: {r.artistName}</p>
            <p>Album: {r.collectionName}</p>
            <p>Song: {r.trackName}</p>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div className="no-results">NoResults</div>
  );

export default Results;
