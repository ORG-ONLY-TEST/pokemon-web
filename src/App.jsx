import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Pokemon</h1>
            <p>All about pokemon data</p>
            <div class="bg-base-100">
                <img src="" alt="" />
                <h1>Bulbasur</h1>
                <p>Bulbasur is green</p>
                <div>
                    <button
                        class="btn bg-red-200"
                        onClick={() => {
                            console.log("Delete button clicked");
                        }}
                    >
                        Delete
                    </button>
                </div>
            </div>
            <div class="bg-base-100">
                <img src="" alt="" />
                <h1>Squirtle</h1>
                <p>Squirtle is blue</p>

                <div>
                    <button class="btn bg-red-200"
                        onClick={() => {
                            console.log("Delete button clicked");
                        }}
                    >
                        Delete
                    </button>
                </div>
            </div>
            <div class="bg-base-100">
                <img src="" alt="" />
                <h1>Charmander</h1>
                <p>Charmander is red</p>

                <div>
                    <button
                        class="btn bg-red-200"
                        onClick={() => {
                            console.log("Delete button clicked");
                        }}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </>
    );
}

export default App;
