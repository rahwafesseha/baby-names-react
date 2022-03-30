import React, {useState} from "react";
import names from "./babyNamesData.json"
import './App.css';

function RenderNames(filteredNames) {
  return filteredNames.names.sort((a, b) => a.name.localeCompare(b.name))
    .map((value, index) => {
      return (
        <p keys={index} className={value.sex}>
          {value.name}
        </p>
      );
    });
}

function filterNames(input) { 
  return names.filter((value) =>
    value.name.toLowerCase().includes(input.toLowerCase())
  );
}

function App() {
  
  const [input, setInput] = useState("");
  const [arrayOfNames, setArrayOfNames] = useState(names);
  return (
    <div className="App">
      <h1>Baby <span className="name">Name</span> Picker</h1>
      <input type="text"
        onChange={(event) => {
          setArrayOfNames(filterNames(event.target.value));
        }}
      ></input>{input}
      <div className="App-body">
       <RenderNames names={arrayOfNames} />
      </div>
    </div>
  );
}

export default App;
