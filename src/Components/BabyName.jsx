import React from "react";

const BabyName = (props) => {
  const { baby, addFavoriteName } = props;
  return (
    <div className="p-1 m-1">
      {baby.sex === "f" ? (
        <button
          className="btn btn-danger"
          onClick={() => addFavoriteName(baby)}
        >
          {baby.name}
        </button>
      ) : (
        <button
          className="btn btn-primary"
          onClick={() => addFavoriteName(baby)}
        >
          {baby.name}
        </button>
      )}
    </div>
  );
};

export default BabyName;
