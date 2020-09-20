import React, { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

function App() {
  const [monsters, setMonsters] = useState([{}]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(async (data) => {
        await setMonsters(data);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, [searchField]);

  const updatedMonsters = monsters.filter((monster) => {
    if (monster.name) {
      return monster;
    }
  });

  const filteredMonsters = updatedMonsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div className="App">
      <SearchBox
        setSearchField={setSearchField}
        placeHolder="Search Monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
