import React from "react";

import { Item } from "pages/pagination";

// import styles from "./index.module.scss";

export interface IProps {
  data: Item[];
}

const Pagination: React.FC<IProps> = ({ data }): JSX.Element => {
  const [currentPage, setCurrentPage] = React.useState(0);
  const [howManyItem, setHowManyItem] = React.useState(3);

  const Item = ({ title, desc }) => (
    <li>
      <h1>{title}</h1>
      <p>{desc}</p>
    </li>
  );

  React.useEffect(() => {
    setCurrentPage(0);
  }, [howManyItem]);

  return (
    <>
      <div>
        How Many?{" "}
        {[...Array(3).keys()].map((n) => (
          <div key={n} onClick={() => setHowManyItem(n + 1)}>
            {n + 1}
          </div>
        ))}
      </div>
      <ul>
        {data
          .slice(
            currentPage * howManyItem,
            howManyItem + currentPage * howManyItem
          )
          .map((item, i) => (
            <Item key={i} title={item.title} desc={item.desc} />
          ))}
      </ul>
      {[...Array(Math.ceil(data.length / howManyItem)).keys()].map((page) => (
        <span onClick={() => setCurrentPage(page)} key={page}>
          {page + 1}
          {currentPage === page && " CURRENT"}
        </span>
      ))}
    </>
  );
};

export default Pagination;
