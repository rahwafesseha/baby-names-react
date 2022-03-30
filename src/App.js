import names from "./babyNamesData.json"
import './App.css';

function App() {
  
  return (
    <div className="App">
      <h1>
        Baby <span className="name">Name</span> Picker
      </h1>
      <div className="App-body">
        {names
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((value, index) => {
            return (
              <p keys={index} className={value.sex}>
                {value.name}
              </p>
            );
          })}
      </div>
    </div>
  );
}

export default App;
