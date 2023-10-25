import { useState, useEffect } from "react";
import PropTypes from "prop-types";

HedyMachine.propTypes = {
    allCards: PropTypes.array,
    currentThreadData: PropTypes.object
}

const ai_uri = "http://localhost:5000/api/ai";

export default function HedyMachine({ allCards, currentThreadData }) {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState("");
    const [messages, setMessages] = useState([]);

    function handleInput(e){
        setInput(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        /* 
        const abort = new AbortController();
        const signal = abort.signal;
        **/
        let inputText = input;

        const prompt = { 
            thisDynamic: "dynamic", 
            thisCard: "card", 
            messages: messages,
            role: "user",
            content: inputText
        };

        console.log(prompt);

        try {
            const res = await fetch(ai_uri, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(prompt)
            });
            const data = await res.json();
            setResponse(data.content);
            setMessages(prev => [...prev, {role: "user", content: inputText}]);
            setMessages(prev => [...prev, {role: "assistant", content: data.content}]);

            console.log(data.content);
        }
        catch(error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="hedy-thread-container">
                <div className="interactionMessages">
                    {messages.length > 0 && messages.map((message, index) => {
                        return (
                            <div key={index}>
                                <p>{message.role}</p>
                                <p>{message.content}</p>
                                <br />
                            </div>
                        )
                    })}
                </div>
                <div className="userInput">
                    <h2>User Input</h2>
                    <form onSubmit={handleSubmit}>
                        <label>Prompt</label>
                        <input
                            type="text"
                            required
                            value={input}
                            onChange={handleInput}
                        />
                        <button>Submit user input</button>
                    </form>
                </div>
            </div>
        </>
    )
}