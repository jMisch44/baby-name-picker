import React, { useState, useEffect } from "react";
import { BabyNameList } from "./Components/BabyNameList";
import SearchBar from "./Components/SearchBar";
import babyNameData from "./babyNameData";
import "./App.css";
import FavoriteNames from "./Components/FavoriteNames";

const sortedNames = babyNameData.sort((a, b) => {
  let fa = a.name.toLowerCase(),
    fb = b.name.toLowerCase();
  if (fa < fb) {
    return -1;
  }
  if (fa > fb) {
    return 1;
  }
  return 0;
});

function App() {
  const [babyNames, setBabyNames] = useState(sortedNames);
  const [input, setInput] = useState("");
  const [searchedNames, setSearchedNames] = useState([{}]);
  const [favoriteNames, setFavoriteNames] = useState([]);

  const formSubmit = (text) => {
    setBabyNames(babyNames.filter((baby) => text === baby.name));
  };

  const addFavoriteName = (baby) => {
    setFavoriteNames([...favoriteNames, { id: baby.id, name: baby.name }]);
    // console.log(babyNames.filter((name) => name.id !== baby.id));
  };

  const deleteFavoriteName = (fav) => {
    // setFavoriteNames(favoriteNames.filter((baby) => baby.id !== fav.id));
  };

  useEffect(() => {
    setSearchedNames(
      babyNames.filter((baby) => {
        return baby.name.toLowerCase().includes(input);
      })
    );
  }, [input]);

  return (
    <div className="mx-auto">
      <div
        style={{ height: "80vh" }}
        className="d-flex flex-column align-items-center border m-5 p-5"
      >
        <SearchBar input={input} setInput={setInput} formSubmit={formSubmit} />
        <FavoriteNames
          favoriteNames={favoriteNames}
          deleteFavoriteName={deleteFavoriteName}
        />
        <BabyNameList
          searchedNames={searchedNames}
          addFavoriteName={addFavoriteName}
        />
      </div>
    </div>
  );
}

export default App;
