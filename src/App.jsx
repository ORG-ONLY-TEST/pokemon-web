import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Pokemon</h1>
            <p>All about pokemon data</p>
            <div>
                <h1>Bulbasur</h1>
                <p>Bulbasur is green</p>
                <button>Delete</button>
            </div>
            <div>
                <h1>Squirtle</h1>
                <p>Squirtle is blue</p>
                <button>Delete</button>
            </div>
            <div>
                <h1>Charmander</h1>
                <p>Charmander is red</p>
                <button>Delete</button>
            </div>
        </>
    );
}

export default App;
