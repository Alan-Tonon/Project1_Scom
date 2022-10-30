import React from "react";

export default ({ counter, success }) => {
  return (
    <div className="card-container">
      <div className={`card ${counter === 0 && "success"}`}>
     
      </div>
      
    </div>
  );
};
