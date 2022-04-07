import React, {useState} from "react";
import names from "./babyNamesData.json"
import './App.css';
import Favorites from "./Favorites";
import RenderNames from "./RenderNames";

function filterNames(input) {
  return names.filter((value) =>
    value.name.toLowerCase().includes(input.toLowerCase())
  );
}

function App() {
  
  const [input] = useState("");
  const [arrayOfNames, setArrayOfNames] = useState(names);
  const[favoriteNames, setFavoriteNames]=useState([]);
 
  return (
    <div>
      <h1>
        Baby <span className="name">Name</span> Picker
      </h1>
      <input
        className="input"
        type="text"
        placeholder="Search here..."
        onChange={(event) => {
          setArrayOfNames(filterNames(event.target.value));
        }}
      ></input>
  
      <Favorites
        favoriteNames={favoriteNames}
        setFavoriteNames={setFavoriteNames}
        setArrayOfNames={setArrayOfNames}
        arrayOfNames={arrayOfNames}
      />

      <RenderNames
        favoriteNames={favoriteNames}
        setFavoriteNames={setFavoriteNames}
        setArrayOfNames={setArrayOfNames}
        arrayOfNames={arrayOfNames}
      />
    </div>
  );
}

export default App;
