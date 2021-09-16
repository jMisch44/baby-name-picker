import React from "react";

const FavoriteNames = (props) => {
  const { favoriteNames, deleteFavoriteName } = props;
  return (
    <div>
      {favoriteNames.map((baby) => {
        return (
          <div key={baby.id} onClick={deleteFavoriteName}>
            {baby.name}
          </div>
        );
      })}
    </div>
  );
};

export default FavoriteNames;
