import React, { useState } from "react";

function App() {
    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch("http://127.0.0.1:5000/api/getData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username }),
        });

        const data = await response.json();
        setMessage(data.message);
    };

    return (
        <div>
            <h1>Welcome to My React App!</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter your username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default App;
