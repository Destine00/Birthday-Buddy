import data from "./data";
import { useState } from "react";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button
          className="btn btn-block"
          onClick={() => {
            setPeople([]);
          }}
        >
          Clear profiles
        </button>
      </div>
    </main>
  );
}
export default App;
