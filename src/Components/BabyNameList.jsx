import React from "react";
import BabyName from "./BabyName";

export const BabyNameList = (props) => {
  const { babyNames, addFavoriteName } = props;
  return (
    <div className="container border p-5 m-auto">
      <div className="mx-auto border" style={{ width: "10%" }}></div>
      <div className="d-inline-flex flex-wrap">
        {babyNames.map((baby) => {
          return (
            <BabyName
              key={baby.id}
              baby={baby}
              addFavoriteName={addFavoriteName}
            />
          );
        })}
      </div>
    </div>
  );
};
