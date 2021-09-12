import React from "react";

import styles from "./index.module.scss";

const Hello: React.FC = (): JSX.Element => (
  <h1 className={styles.title}>
    Welcome to <span className={styles.highlight}>nextjs-base</span>
  </h1>
);

export default Hello;
