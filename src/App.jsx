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
            </div>
            <div>
                <h1>Squirtle</h1>
            </div>
            <div>
                <h1>Charmander</h1>
            </div>
        </>
    );
}

export default App;
