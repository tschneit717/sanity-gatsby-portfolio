import React from "react";

export const PortfolioNav = (props) => {
  return (
    <nav>
      <button onClick={() => props.handleNav("PREV")} className="nav prev">
        Prev
      </button>
      <button className="nav next" onClick={() => props.handleNav("NEXT")}>
        Next
      </button>
    </nav>
  );
};
