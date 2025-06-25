import React from "react";
import Business from "./Business.jsx";

const count = 10;

function BusinessList() {
  // For now, just rendering all Businesses hardcoded
  // Later you can add state and search/filter logic

  return (
    <div className="BusinessListContainer">
      {[...Array(count)].map((_, index) => (
        <Business key={index} />
      ))}
    </div>
  );
}

export default BusinessList;